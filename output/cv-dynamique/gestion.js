const sections = {
  presentation: "Présentation",
  experiences: "Expériences",
  parcours: "Parcours",
  competences: "Compétences",
  logiciels: "Logiciels",
  projets: "Projets",
  formations: "Formations créées",
  certifications: "Certifications",
  engagements: "Engagements",
  disponibilites: "Disponibilités",
  objectifs: "Objectifs",
  liens: "Contact et liens",
  commentaires: "Commentaires GitHub",
  musique: "Musique Spotify",
};

const key = "madeleine-portfolio-draft-v1";
const picker = document.querySelector("#rubrique");
const fields = document.querySelector("#champs");
const status = document.querySelector("#etat");
const add = document.querySelector("#ajouter");
let draft = structuredClone(profil);

try {
  const saved = localStorage.getItem(key);
  if (saved) {
    const previous = JSON.parse(saved);
    draft = { ...draft, ...previous, musique: { ...draft.musique, ...previous.musique } };
  }
} catch {
  status.textContent = "Impossible de charger le brouillon local.";
}

Object.entries(sections).forEach(([value, label]) => picker.add(new Option(label, value)));

function save() {
  try {
    localStorage.setItem(key, JSON.stringify(draft));
    status.textContent = "Brouillon enregistré dans ce navigateur.";
  } catch {
    status.textContent = "Stockage local indisponible. Télécharge le fichier pour conserver les changements.";
  }
}

function field(container, label, parent, property, multiline = false) {
  const wrapper = document.createElement("label");
  wrapper.textContent = label;
  const input = document.createElement(multiline ? "textarea" : "input");
  input.value = parent[property] || "";
  input.addEventListener("input", () => {
    parent[property] = input.value;
    save();
  });
  wrapper.append(input);
  container.append(wrapper);
}

function translations(container, label, item, property, multiline = false) {
  const value = item[property];
  if (typeof value === "string") item[property] = { fr: value, en: value };
  item[property] ??= {};
  field(container, `${label} (FR)`, item[property], "fr", multiline);
  field(container, `${label} (EN)`, item[property], "en", multiline);
}

async function preparePhoto(file) {
  const source = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = source;
    await image.decode();
    const scale = Math.min(1, 1280 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
    return { src: canvas.toDataURL("image/webp", .82), legende: {} };
  } finally {
    URL.revokeObjectURL(source);
  }
}

function editPhotos(card, item) {
  const label = document.createElement("label");
  label.textContent = "Ajouter des photos (JPEG, PNG, WebP)";
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/jpeg,image/png,image/webp";
  input.multiple = true;
  input.addEventListener("change", async () => {
    input.disabled = true;
    const photos = [];
    let rejected = 0;
    for (const file of input.files) {
      try {
        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) throw new Error();
        photos.push(await preparePhoto(file));
      } catch {
        rejected += 1;
      }
    }
    if (!draft.experiences.includes(item)) return;
    if (photos.length) {
      item.photos ??= [];
      item.photos.push(...photos);
      save();
    }
    if (rejected) status.textContent += ` ${rejected} image(s) illisible(s) ou non prise(s) en charge.`;
    if (picker.value === "experiences") renderEditor();
  });
  label.append(input);
  card.append(label);

  for (const [index, photo] of (item.photos || []).entries()) {
    const preview = document.createElement("div");
    preview.className = "editor-photo";
    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = `Photo ${index + 1}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "button";
    remove.textContent = `Retirer la photo ${index + 1}`;
    remove.addEventListener("click", () => {
      item.photos.splice(index, 1);
      save();
      renderEditor();
    });
    preview.append(image);
    translations(preview, "Légende de la photo", photo, "legende");
    preview.append(remove);
    card.append(preview);
  }
}

function renderEditor() {
  const section = picker.value;
  const value = draft[section];
  fields.replaceChildren();
  add.hidden = !Array.isArray(value);

  if (Array.isArray(value)) {
    fields.className = "cards";
    value.forEach((item, index) => {
      const card = document.createElement("section");
      card.className = "card";
      translations(card, "Titre", item, "titre");

      if (section === "disponibilites") {
        translations(card, "Période", item, "periode");
        translations(card, "Mobilité", item, "mobilite");
      } else {
        field(card, "Date, organisme ou format", item, "format");
        if (section === "logiciels") {
          field(card, "Adresse ou chemin de l’image du logo", item, "logo");
          field(card, "Initiales de secours", item, "icone");
        }
        translations(card, "Description", item, "description", true);
        if (section === "experiences") {
          field(card, "Date de début (AAAA-MM-JJ)", item, "dateDebut");
          field(card, "Date de fin (AAAA-MM-JJ) — statut terminé dès le lendemain", item, "dateFin");
          translations(card, "Missions (une par ligne)", item, "details", true);
          translations(card, "Compétences mobilisées", item, "competences", true);
          translations(card, "Flux Power Automate", item, "flux", true);
          editPhotos(card, item);
        }
        if (section === "formations") {
          item.visionneuse ??= {};
          field(card, "Dossier des diapositives (supports/nom)", item.visionneuse, "dossier");
          field(card, "Nombre de diapositives", item.visionneuse, "pages");
        } else {
          translations(card, "Lien", item, "lien");
        }
      }

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "button";
      remove.textContent = "Supprimer cette entrée";
      remove.addEventListener("click", () => {
        value.splice(index, 1);
        save();
        renderEditor();
      });
      card.append(remove);
      fields.append(card);
    });
    return;
  }

  fields.className = "card";
  switch (section) {
    case "presentation":
      field(fields, "Nom", draft, "nom");
      translations(fields, "Présentation", draft, "intro", true);
      draft.aPropos ??= {};
      translations(fields, "Qui est Madeleine ? — Caractère et état d’esprit", draft.aPropos, "caractere", true);
      translations(fields, "Qui est Madeleine ? — Voyages", draft.aPropos, "voyages", true);
      translations(fields, "Qui est Madeleine ? — Objectifs à dix ans", draft.aPropos, "dixAns", true);
      translations(fields, "Qui est Madeleine ? — Loisirs", draft.aPropos, "loisirs", true);
      translations(fields, "Qui est Madeleine ? — Soleil, mer et nature", draft.aPropos, "nature", true);
      translations(fields, "Qui est Madeleine ? — Boissons", draft.aPropos, "cafe", true);
      break;
    case "objectifs":
      translations(fields, "Objectif professionnel", value, "professionnel", true);
      translations(fields, "Formations en cybersécurité", value, "formationCyber", true);
      translations(fields, "Spécialisation en sécurité de l’IA", value, "specialisationIA", true);
      translations(fields, "Objectif personnel", value, "personnel", true);
      break;
    case "liens":
      field(fields, "GitHub", value, "github");
      field(fields, "LinkedIn", value, "linkedin");
      field(fields, "Adresse e-mail", value, "email");
      field(fields, "Adresse HTTPS du service de formulaire (facultatif)", value, "formulaire");
      field(fields, "Lien de réservation Google Agenda (Google Meet)", value, "reservationMeet");
      translations(fields, "Lien vers le CV PDF", value, "cv");
      break;
    case "commentaires":
      for (const name of ["repo", "repoId", "category", "categoryId"]) {
        field(fields, name, value, name);
      }
      break;
    case "musique":
      field(fields, "Lien Spotify (open.spotify.com) vers une playlist, un album ou un morceau", value, "spotify");
      break;
  }
}

picker.addEventListener("change", renderEditor);
add.addEventListener("click", () => {
  const item = picker.value === "experiences" ? { id: Date.now().toString(36) } : {};
  draft[picker.value].push(item);
  save();
  renderEditor();
  fields.lastElementChild.querySelector("input").focus();
});

document.querySelector("#reinitialiser").addEventListener("click", () => {
  if (!window.confirm("Remplacer le brouillon par les données du fichier profil.js ?")) return;
  draft = structuredClone(profil);
  save();
  renderEditor();
});

document.querySelector("#exporter").addEventListener("click", () => {
  const file = new Blob([`const profil = ${JSON.stringify(draft, null, 2)};\n`], { type: "text/javascript" });
  const url = URL.createObjectURL(file);
  const download = document.createElement("a");
  download.href = url;
  download.download = "profil.js";
  download.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = "Fichier profil.js préparé pour le téléchargement.";
});

renderEditor();
