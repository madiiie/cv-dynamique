const interfaceText = {
  fr: {
    home: "Accueil", software: "Logiciels", back: "Toutes les expériences", more: "Voir la fiche",
    studyRoute: "D’Alger à Lille", algiers: "Alger, Algérie", lille: "Lille, France",
    aboutMe: "Qui est Madeleine ?",
    experienceSpotlight: "Ma polyvalence en pratique",
    experienceSpotlightIntro: "Chez Nyrstar, j’ai contribué à une migration réseau. Chez SKEMA Lille, je crée des agents IA et des formations. Au BDE, j’ai participé à l’organisation d’événements.",
    spotlightEngagements: "Mes engagements",
    bookingTitle: "Échanger sur Google Meet",
    bookingIntro: "Choisissez un créneau pour échanger sur votre offre de stage ou d’alternance.",
    bookingRequest: "En attendant l’ouverture des réservations, proposez-moi un créneau par e-mail.",
    bookingButton: "Réserver un créneau",
    bookingEmail: "Proposer un créneau par e-mail",
    bookingSubject: "Proposition de rendez-vous Google Meet",
    flows: "Flux Power Automate créés", photos: "En images",
    comparisonTitle: "Avant / après l’automatisation",
    comparisonIntro: "Choisissez un agent puis déplacez le curseur pour comparer deux façons de traiter la même tâche. Les situations sont illustratives.",
    comparisonAgent: "Agent à découvrir", comparisonBefore: "Avant · à la main", comparisonAfter: "Après · avec l’agent",
    comparisonControl: "Comparer le travail avant et après",
    aboutLink: "Découvrir qui je suis", backToBackground: "Retour au parcours",
    aboutQuestions: ["C’est quoi mon humeur par défaut ?", "Qu’est-ce qui me fait du bien ?", "Je fais quoi de mon temps libre ?", "Qu’est-ce que je prends à boire ?", "Où est-ce que j’ai voyagé ?", "Dans dix ans, j’aimerais en être où ?"],
    algiersPeriod: "Jusqu’en 2025", lillePeriod: "Depuis 2025",
    missingExperience: "Cette expérience est introuvable.", missions: "Missions",
    portfolio: "Portfolio professionnel", greeting: "Bonjour, je suis",
    seeWork: "Découvrir mes projets", seeAvailability: "Mes disponibilités",
    availability: "Disponibilités", background: "Parcours", skills: "Compétences",
    projects: "Projets", training: "Formations créées", certifications: "Certifications",
    goals: "Objectifs futurs", career: "Prochaine expérience", personal: "Objectifs personnels",
    cyberTraining: "Me former en cybersécurité", aiSecurity: "Me spécialiser dans la sécurité de l’IA",
    focus: "Cybersécurité et risques liés à l’IA", discuss: "Parlons de votre alternance",
    featured: "À découvrir", featuredTraining: "Agents IA et bons réflexes",
    featuredSummary: "Deux formations créées durant mon stage à SKEMA Lille sur la création d’agents, l’automatisation et les risques liés à l’IA.",
    caseTitle: "Cas fictif · Sécuriser un agent IA",
    caseIntro: "Une équipe veut utiliser un agent IA pour résumer une boîte mail partagée et préparer des réponses. Quels garde-fous prévoir avant le lancement ?",
    caseLink: "Explorer le cas pratique", caseSource: "Référence OWASP",
    caseChecks: [
      ["À quels messages l’agent doit-il avoir accès ?", "Limiter son accès à la boîte partagée et aux messages nécessaires à la tâche. Lui donner uniquement les droits de lecture s’il doit produire des brouillons."],
      ["Un e-mail demande à l’agent de transférer des pièces jointes. Que faire ?", "Traiter le message comme une donnée externe. Tester ce scénario et limiter les actions de l’agent pour qu’un message puisse être résumé sans déclencher de transfert."],
      ["Qui décide d’envoyer la réponse ?", "L’agent prépare le brouillon. Une personne vérifie le contenu et le destinataire avant l’envoi."],
    ],
    open: "Consulter", slides: "Ouvrir le support",
    cv: "CV en PDF", email: "E-mail",
    internshipTraining: "Réalisée durant mon stage à SKEMA Lille",
    readSlides: "Visionner la formation", previous: "Précédente", next: "Suivante", slide: "Diapositive", education: "Études",
    pending: "À compléter.", pendingSlides: "Support à ajouter.", nav: "Navigation principale",
    experience: "Expériences", volunteering: "Engagements", recommendations: "Recommandations",
    recommend: "Vous avez travaillé avec moi ? Partagez votre expérience.",
    privateRecommendation: "Envoyer une recommandation par e-mail",
    postRecommendation: "Proposer une recommandation", recommendationNote: "Votre recommandation sera envoyée à Madeleine pour validation avant une éventuelle publication.",
    sendRecommendation: "Envoyer ma recommandation", formServiceNote: "En envoyant ce formulaire, vous transmettez vos informations à Madeleine via le service FormSubmit.",
    localFormNote: "Pour tester l’envoi, ouvrez le portfolio avec « Ouvrir le portfolio.cmd » dans le dossier du projet, puis revenez sur ce formulaire dans la fenêtre ouverte. L’envoi sera aussi disponible sur le site publié.",
    music: "À écouter", openSpotify: "Ouvrir dans Spotify",
    showSoundtrack: "Ouvrir les ambiances musicales", hideSoundtrack: "Fermer le lecteur",
    soundtrackTitle: "Choisissez votre ambiance",
    soundtrackIntro: "Un peu de musique pour accompagner votre visite. Choisissez un instrumental et continuez à explorer le portfolio.",
    soundtrackTracks: ["Piano doux", "Lo-fi", "Épique cinématique", "Jazz de salon", "Synthwave", "Ambient"],
    soundtrackStop: "Couper la musique", soundtrackError: "La lecture n’a pas démarré. Réessayez.",
    menu: "Menu de navigation",
    name: "Votre nom", company: "Entreprise", phone: "Téléphone", subject: "Contact recrutement", message: "Votre message", send: "Envoyer le message",
    contact: "Contact recrutement",
    prepare: "Préparer l’e-mail", mailNote: "Votre messagerie s’ouvrira avec le message prérempli.",
  },
  en: {
    home: "Home", software: "Software", back: "All experience", more: "View experience",
    studyRoute: "From Algiers to Lille", algiers: "Algiers, Algeria", lille: "Lille, France",
    aboutMe: "Who is Madeleine?",
    experienceSpotlight: "Versatility in practice",
    experienceSpotlightIntro: "At Nyrstar, I helped migrate an industrial network. At SKEMA Lille, I build AI agents and create training materials. With the student association, I helped organise events.",
    spotlightEngagements: "My involvement",
    bookingTitle: "Meet on Google Meet",
    bookingIntro: "Choose a time to discuss your internship or work-study opportunity.",
    bookingRequest: "You can suggest a time by email while online booking is being set up.",
    bookingButton: "Book a time",
    bookingEmail: "Suggest a time by email",
    bookingSubject: "Google Meet appointment request",
    flows: "Power Automate flows", photos: "Photos",
    comparisonTitle: "Before and after automation",
    comparisonIntro: "Choose an agent and move the slider to compare two ways of handling the same task. The scenarios are illustrative.",
    comparisonAgent: "Choose an agent", comparisonBefore: "Before · manual process", comparisonAfter: "After · with the agent",
    comparisonControl: "Compare the process before and after",
    aboutLink: "Get to know me", backToBackground: "Back to my background",
    aboutQuestions: ["What’s my default mood?", "What makes me happy?", "What do I do in my spare time?", "What’s my go-to drink?", "Where have I travelled?", "Where would I like to be in ten years?"],
    algiersPeriod: "Until 2025", lillePeriod: "Since 2025",
    missingExperience: "This experience could not be found.", missions: "Responsibilities",
    portfolio: "Professional portfolio", greeting: "Hello, I’m",
    seeWork: "Explore my projects", seeAvailability: "My availability",
    availability: "Availability", background: "Background", skills: "Skills",
    projects: "Projects", training: "Training I’ve created", certifications: "Certifications",
    goals: "Future goals", career: "Next opportunity", personal: "Personal goals",
    cyberTraining: "Train in cybersecurity", aiSecurity: "Specialise in AI security",
    focus: "Cybersecurity and AI risks", discuss: "Discuss a work-study opportunity",
    featured: "Featured work", featuredTraining: "AI agents and safer practices",
    featuredSummary: "Two training decks I created during my internship at SKEMA Lille on building agents, automation and AI risks.",
    caseTitle: "Fictional scenario · Securing an AI agent",
    caseIntro: "A team wants an AI agent to summarise a shared inbox and draft replies. What safeguards would you put in place before launch?",
    caseLink: "Explore the scenario", caseSource: "OWASP reference",
    caseChecks: [
      ["Which messages should the agent have access to?", "Limit access to the shared inbox and the messages needed for the task. Grant read-only permissions if the agent only needs to draft replies."],
      ["An email asks the agent to forward attachments. What should happen?", "Treat the message as external data. Test this scenario and limit the agent’s actions so that summarising the message cannot trigger a transfer."],
      ["Who decides to send the reply?", "The agent drafts the reply. A person checks the content and recipient before sending it."],
    ],
    open: "View details", slides: "Open course materials",
    cv: "PDF résumé", email: "Email",
    internshipTraining: "Created during my internship at SKEMA Lille",
    readSlides: "View training", previous: "Previous", next: "Next", slide: "Slide", education: "Education",
    pending: "Details to be added.", pendingSlides: "Slides to be added.", nav: "Main navigation",
    experience: "Experience", volunteering: "Volunteering", recommendations: "Recommendations",
    recommend: "Have we worked together? Share your experience.",
    privateRecommendation: "Send a recommendation by email",
    postRecommendation: "Submit a recommendation", recommendationNote: "Your recommendation will be emailed to Madeleine for review before any publication.",
    sendRecommendation: "Send my recommendation", formServiceNote: "Submitting this form sends your information to Madeleine via FormSubmit.",
    localFormNote: "To test submissions, launch ‘Ouvrir le portfolio.cmd’ from the project folder, then return to this form in the browser window it opens. Submissions will also be available on the published website.",
    music: "Now listening", openSpotify: "Open in Spotify",
    showSoundtrack: "Open music selection", hideSoundtrack: "Close music player",
    soundtrackTitle: "Choose your soundtrack",
    soundtrackIntro: "Pick an instrumental to listen to as you explore the portfolio.",
    soundtrackTracks: ["Soft piano", "Lo-fi", "Cinematic epic", "Lounge jazz", "Synthwave", "Ambient"],
    soundtrackStop: "Stop music", soundtrackError: "Playback did not start. Please try again.",
    menu: "Navigation menu",
    name: "Your name", company: "Company", phone: "Phone number", subject: "Recruitment enquiry", message: "Your message", send: "Send message",
    contact: "Recruitment contact",
    prepare: "Prepare email", mailNote: "Your email app will open with the message filled in.",
  },
};

const languageButtons = document.querySelectorAll("[data-language]");
const main = document.querySelector("main");
const navigation = document.querySelector("nav");
const publicPages = new Set(["index", "experiences", "experience", "logiciels", "projets", "parcours", "qui-est-madeleine", "recommandations", "contact"]);
let updateHeaderLabels;
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function link(href, label, className = "", newTab = false) {
  if (!href) return "";
  let url;
  try {
    url = new URL(href, "https://portfolio.invalid/");
  } catch {
    return "";
  }
  if (!["http:", "https:", "mailto:"].includes(url.protocol)) return "";
  return `<a class="${className}" href="${escapeHtml(href)}"${newTab ? ' target="_blank" rel="noopener noreferrer"' : ""}${className === "download" ? " download" : ""}>${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

const soundtrackFiles = ["piano-calme", "lofi", "cinematique", "jazz-salon", "synthwave", "ambient"];
const soundtrackIcons = ["♩", "◈", "✦", "♪", "⚡", "☾"];

function soundtrackChoices(ui) {
  return ui.soundtrackTracks.map((title, index) => `<button type="button" class="button soundtrack-choice"
    data-soundtrack="${index}" aria-pressed="false"><span aria-hidden="true">${soundtrackIcons[index]}</span>${title}</button>`).join("");
}

function setupHeaderControls() {
  const controls = document.querySelector(".header-controls");
  const musicButton = document.createElement("button");
  musicButton.type = "button";
  musicButton.className = "header-icon soundtrack-toggle";
  const musicIcon = document.createElement("span");
  musicIcon.setAttribute("aria-hidden", "true");
  musicButton.append(musicIcon);

  const menuButton = document.createElement("button");
  menuButton.type = "button";
  menuButton.className = "header-icon mobile-menu";
  menuButton.setAttribute("aria-controls", navigation.id);
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = '<span aria-hidden="true">☰</span>';
  controls.prepend(musicButton);
  controls.append(menuButton);

  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("mobile-open", open);
    menuButton.firstElementChild.textContent = open ? "×" : "☰";
  }

  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) setMenu(false);
  });
  controls.closest(".top").addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });

  let ui = interfaceText.fr;
  const soundtrack = new Audio();
  soundtrack.loop = true;
  let activeTrack = null;
  const player = document.createElement("div");
  player.id = "soundtrack-player";
  player.className = "soundtrack-player";
  player.hidden = true;
  musicButton.setAttribute("aria-controls", player.id);
  controls.append(player);

  const choices = document.createElement("div");
  choices.className = "soundtrack-choices";
  player.append(choices);
  const stop = document.createElement("button");
  stop.type = "button";
  stop.className = "button soundtrack-stop";
  stop.hidden = true;
  player.append(stop);

  const status = document.createElement("p");
  status.className = "soundtrack-status";
  status.setAttribute("role", "status");
  player.append(status);

  function syncPlayer() {
    const label = player.hidden ? ui.showSoundtrack : ui.hideSoundtrack;
    musicButton.setAttribute("aria-label", label);
    musicButton.setAttribute("aria-expanded", String(!player.hidden));
    musicButton.title = label;
    musicIcon.textContent = player.hidden ? "♫" : "×";
    stop.hidden = activeTrack === null;
    for (const button of document.querySelectorAll("[data-soundtrack]")) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.soundtrack) === activeTrack));
    }
  }

  function stopPlayback() {
    soundtrack.pause();
    activeTrack = null;
  }

  musicButton.addEventListener("click", () => {
    player.hidden = !player.hidden;
    syncPlayer();
  });
  stop.addEventListener("click", () => {
    stopPlayback();
    status.textContent = "";
    syncPlayer();
  });

  document.addEventListener("click", event => {
    const button = event.target.closest?.("[data-soundtrack]");
    if (!button) return;
    const index = Number(button.dataset.soundtrack);
    if (activeTrack === index) {
      player.hidden = false;
      syncPlayer();
      return;
    }
    stopPlayback();
    status.textContent = "";
    activeTrack = index;
    player.hidden = false;
    soundtrack.src = `assets/${soundtrackFiles[index]}.wav`;
    soundtrack.play().catch(error => {
      if (activeTrack !== index || error.name === "AbortError") return;
      activeTrack = null;
      status.textContent = ui.soundtrackError;
      syncPlayer();
    });
    syncPlayer();
  });

  return text => {
    ui = text;
    menuButton.setAttribute("aria-label", ui.menu);
    stop.textContent = ui.soundtrackStop;
    choices.innerHTML = soundtrackChoices(ui);
    syncPlayer();
  };
}

function spotifyPlayer(ui) {
  const url = /^https:\/\/open\.spotify\.com\/(?:intl-[a-z]+\/)?(?:embed\/)?(playlist|album|track)\/([a-zA-Z0-9]+)(?:[/?#]|$)/i.exec(profil.musique.spotify.trim());
  if (!url) return "";
  const [, type, id] = url;
  const item = `https://open.spotify.com/${type.toLowerCase()}/${id}`;
  const embed = `https://open.spotify.com/embed/${type.toLowerCase()}/${id}`;
  return `<div class="music-panel">
    <iframe src="${embed}" title="Spotify" loading="lazy" width="100%" height="${type.toLowerCase() === "track" ? 152 : 352}"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    ${link(item, ui.openSpotify)}
  </div>`;
}

function contactForm(ui, recommendation = false) {
  const endpoint = profil.liens.formulaire?.trim() || "";
  const hosted = /^https:\/\/[^\s]+$/i.test(endpoint);
  const localFile = hosted && window.location.protocol === "file:";
  if (!hosted && !profil.liens.email) return "";
  const subject = recommendation ? ui.recommendations : ui.subject;
  return `<form class="contact-form card" method="post"${hosted ? ` action="${escapeHtml(endpoint)}"` : ' data-mail-form'}>
    <input type="hidden" name="_subject" value="${escapeHtml(subject)} — Portfolio Madeleine Rezki">
    <input type="hidden" name="_template" value="table">
    <div class="form-grid">
      <label>${ui.name}<input name="name" autocomplete="name" required maxlength="100"></label>
      <label>${ui.company}<input name="company" autocomplete="organization" ${recommendation ? "" : "required"} maxlength="120"></label>
      <label>${ui.email}<input type="email" name="email" autocomplete="email" required maxlength="254"></label>
      ${recommendation ? "" : `<label>${ui.phone}<input type="tel" name="phone" autocomplete="tel" required maxlength="50"></label>`}
    </div>
    <label>${ui.message}<textarea name="message" required maxlength="1800" rows="5"></textarea></label>
    ${localFile ? `<p role="status">${ui.localFormNote}</p>` : ""}
    <button type="submit" class="button primary"${localFile ? " disabled" : ""}>${hosted ? (recommendation ? ui.sendRecommendation : ui.send) : ui.prepare}</button>
    <p>${hosted ? ui.formServiceNote : ui.mailNote}</p>
  </form>`;
}

function render(language, page, experienceId) {
  const ui = interfaceText[language];
  function experienceStatus(item) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.dateFin || "")) return "";
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit",
    }).format(new Date());
    const state = today > item.dateFin ? "finished" : item.dateDebut && today < item.dateDebut ? "upcoming" : "current";
    const labels = language === "fr"
      ? { finished: "Terminé", upcoming: "À venir", current: "En cours" }
      : { finished: "Completed", upcoming: "Upcoming", current: "In progress" };
    return `<span class="experience-status" data-status="${state}">${labels[state]}</span>`;
  }
  const stickers = symbols => `<div class="sticker-trail" aria-hidden="true">
    ${symbols.map(symbol => `<span>${symbol}</span>`).join("")}
  </div>`;
  document.body.dataset.page = page;
  const local = value => typeof value === "string" ? value : value?.[language] || "";
  const safe = value => escapeHtml(local(value));
  const placeholder = label => `<p class="pending">${label || ui.pending}</p>`;

  function trainingViewer(item) {
    const { dossier, pages: value } = item.visionneuse || {};
    const pages = Number(value);
    if (!/^supports\/[a-z0-9-]+$/.test(dossier) || !Number.isInteger(pages) || pages < 1) return placeholder(ui.pendingSlides);
    return `<details class="training-viewer" data-folder="${dossier}" data-pages="${pages}">
      <summary class="button">${ui.readSlides}</summary>
      <div class="training-frame"><img alt="" draggable="false"></div>
      <div class="training-controls">
        <button type="button" class="button" data-step="-1">${ui.previous}</button>
        <output aria-live="polite"></output>
        <button type="button" class="button" data-step="1">${ui.next}</button>
      </div>
    </details>`;
  }

  function pageUrl(name, params = {}) {
    const query = new URLSearchParams(params);
    if (language === "en") query.set("lang", "en");
    return `${name}.html${query.size ? `?${query}` : ""}`;
  }

  function cards(items, training = false, experiences = false) {
    if (!items.length) return placeholder();
    return `<div class="cards">${items.map((item, index) => `
      <article class="card${experiences ? ' experience-card' : ''}">
        ${item.format ? `<span class="format">${escapeHtml(item.format)}</span>` : ""}
        ${experiences ? experienceStatus(item) : ""}
        <h2>${experiences ? `<a href="${pageUrl("experience", { id: item.id || index + 1 })}">${safe(item.titre)}</a>` : safe(item.titre)}</h2>
        ${local(item.description) ? `<p>${safe(item.description)}</p>` : ""}
        ${experiences ? `<span class="view-detail" aria-hidden="true">${ui.more} →</span>` : `<div class="card-links">
          ${training ? trainingViewer(item) : link(local(item.lien), ui.open)}
        </div>`}
      </article>`).join("")}</div>`;
  }

  function section(id, title, body) {
    return `<section class="section" id="${id}" aria-labelledby="${id}-title">
      <h2 id="${id}-title">${title}</h2>
      <div class="section-body">${body}</div>
    </section>`;
  }

  document.documentElement.lang = language;
  updateThemeButton();
  document.title = `${profil.nom} — ${ui.portfolio}`;
  document.querySelectorAll(".brand").forEach(brand => {
    brand.href = pageUrl("index");
    brand.innerHTML = `${escapeHtml(profil.nom)}<span>.</span>`;
  });
  languageButtons.forEach(button => button.setAttribute("aria-pressed", button.dataset.language === language));
  navigation.setAttribute("aria-label", ui.nav);
  navigation.innerHTML = [
    ["experiences", ui.experience], ["logiciels", ui.software], ["projets", ui.projects],
    ["parcours", ui.background], ["recommandations", ui.recommendations], ["contact", ui.contact],
  ].map(([id, label]) => {
    const active = page === id || (page === "experience" && id === "experiences");
    return `<a href="${pageUrl(id)}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");

  const contacts = [
    link(profil.liens.github, "GitHub", "button"),
    link(profil.liens.linkedin, "LinkedIn", "button"),
    link(profil.liens.email ? `mailto:${profil.liens.email}` : "", ui.email, "button"),
    link(local(profil.liens.cv), ui.cv, "button"),
  ].join("");
  const music = spotifyPlayer(ui);
  const form = contactForm(ui);
  const bookingUrl = /^https:\/\/(?:calendar\.app\.google\/[\w-]+|calendar\.google\.com\/calendar\/appointments\/schedules\/[\w-]+)(?:[/?#]|$)/i.test(profil.liens.reservationMeet?.trim())
    ? profil.liens.reservationMeet.trim()
    : "";
  const meetingLink = bookingUrl || (profil.liens.email
    ? `mailto:${profil.liens.email}?subject=${encodeURIComponent(ui.bookingSubject)}`
    : "");
  const booking = meetingLink ? `<section class="card meeting-booking" aria-labelledby="booking-title">
    <h2 id="booking-title">${ui.bookingTitle}</h2>
    <p>${bookingUrl ? ui.bookingIntro : ui.bookingRequest}</p>
    ${link(meetingLink, bookingUrl ? ui.bookingButton : ui.bookingEmail, "button primary")}
  </section>` : "";


  const home = `
    <div class="shell">
      <div class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${ui.focus} <span>·</span> CESI Lille</p>
          <p class="greeting">${ui.greeting}</p>
          <h1>${escapeHtml(profil.nom)}<span>.</span></h1>
          <p class="intro">${safe(profil.intro)}</p>
          <div class="actions">
            <a href="${pageUrl("contact")}" class="button primary">${ui.discuss} <span aria-hidden="true">→</span></a>
            <a href="${pageUrl("experiences")}" class="button">${ui.experience}</a>
            ${link(profil.liens.linkedin, "LinkedIn", "button linkedin-button")}
          </div>
        </div>
        <section class="availability" id="disponibilites" aria-labelledby="availability-title">
          <h2 id="availability-title">${ui.availability}</h2>
          <ul>${profil.disponibilites.map(item => `
            <li><p>${safe(item.periode)}</p><h3>${safe(item.titre)}</h3>
              ${local(item.mobilite) ? `<p class="mobility">${safe(item.mobilite)}</p>` : ""}
            </li>`).join("")}</ul>
        </section>
      </div>
      ${stickers(["✦", "⚡", "✧", "💻", "✷", "♫", "✦"])}
      <section class="card soundtrack-feature" aria-labelledby="soundtrack-title">
        <h2 id="soundtrack-title">${ui.soundtrackTitle}</h2>
        <p>${ui.soundtrackIntro}</p>
        <div class="soundtrack-choices">${soundtrackChoices(ui)}</div>
      </section>
      <section class="card featured-training">
        <div>
          <p class="eyebrow">${ui.featured}</p>
          <h2>${ui.featuredTraining}</h2>
          <p>${ui.featuredSummary}</p>
        </div>
        <div class="actions featured-actions">
          <a href="${pageUrl("projets")}#formations" class="button">${ui.training} <span aria-hidden="true">→</span></a>
          <a href="${pageUrl("projets")}#cas-pratique" class="button">${ui.caseLink} <span aria-hidden="true">→</span></a>
        </div>
      </section>
      ${stickers(["✧", "↗", "✦", "🛡️", "✷", "⚡", "✧"])}
      <section class="card featured-training" aria-labelledby="experience-spotlight-title">
        <div>
          <h2 id="experience-spotlight-title">${ui.experienceSpotlight}</h2>
          <p>${ui.experienceSpotlightIntro}</p>
          <div class="actions">
            ${link(pageUrl("experience", { id: "nyrstar-auby" }), "Nyrstar Auby", "button")}
            ${link(pageUrl("experience", { id: "skema-lille" }), "SKEMA Lille", "button")}
            ${link(`${pageUrl("parcours")}#engagements`, ui.spotlightEngagements, "button")}
          </div>
        </div>
      </section>
      ${music ? section("musique", ui.music, music) : ""}
    </div>`;

  const selectedExperience = profil.experiences.find((item, index) => (item.id || String(index + 1)) === experienceId);
  const pages = {
    "qui-est-madeleine": [ui.aboutMe, `
    ${stickers(["☀️", "✦", "🌊", "🎙️", "✧", "🧃", "✈️", "🥊", "✷", "📖"])}
    <div class="personal-questions">
      ${[
        ["caractere", "😄"], ["nature", "☀️"], ["loisirs", "🎤 📚 🥊"], ["cafe", "🧃"],
        ["voyages", "✈️"], ["dixAns", "📖 🎙️"],
      ].map(([key, sticker], index) => {
        const answer = profil.aPropos?.[key];
        if (!local(answer)) return "";
        return `<article class="card personal-profile" data-topic="${key}">
          <span class="personal-sticker" aria-hidden="true">${sticker}</span>
          <h2>${ui.aboutQuestions[index]}</h2><p>${safe(answer)}</p>
        </article>`;
      }).join("")}
    </div>
    ${stickers(["✷", "📚", "✦", "🏃‍♀️", "✧", "☀️", "✦"])}`],
    experiences: [ui.experience, cards(profil.experiences, false, true)],
    experience: [selectedExperience ? safe(selectedExperience.titre) : ui.missingExperience, selectedExperience ? `
      <article class="card experience-detail">
        <p class="format">${escapeHtml(selectedExperience.format)}</p>
        ${experienceStatus(selectedExperience)}
        <p>${safe(selectedExperience.description)}</p>
        ${local(selectedExperience.details) ? `<h2>${ui.missions}</h2><ul>${local(selectedExperience.details).split("\n").filter(line => line.trim()).map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` : ""}
        ${local(selectedExperience.flux) ? `<h2>${ui.flows}</h2><p class="experience-flows">${safe(selectedExperience.flux)}</p>` : ""}
        ${local(selectedExperience.competences) ? `<h2>${ui.skills}</h2><p>${safe(selectedExperience.competences)}</p>` : ""}
        ${local(selectedExperience.formationSecurite) ? `<h2>${language === "fr" ? "Formation sécurité" : "Safety training"}</h2><p>${safe(selectedExperience.formationSecurite)}</p>` : ""}
        ${link(selectedExperience.certificatSecurite, language === "fr" ? "Consulter le certificat (PDF)" : "View certificate (PDF)", "button", true)}
        ${link(selectedExperience.id === "skema-lille" ? `${pageUrl("projets")}#formations` : local(selectedExperience.lien), selectedExperience.id === "skema-lille" ? ui.training : ui.open)}
      </article>
      ${selectedExperience.comparaisons?.length ? `<section class="card automation-comparison" aria-labelledby="automation-comparison-title">
        <h2 id="automation-comparison-title">${ui.comparisonTitle}</h2>
        <p>${ui.comparisonIntro}</p>
        <label class="comparison-agent">${ui.comparisonAgent}
          <select>${selectedExperience.comparaisons.map((example, index) => `<option value="${index}">${safe(example.titre)}</option>`).join("")}</select>
        </label>
        <div class="comparison-track">
          <span aria-hidden="true">${ui.comparisonBefore}</span>
          <input type="range" min="0" max="1" step="1" value="0" aria-label="${ui.comparisonControl}" aria-valuetext="${ui.comparisonBefore}">
          <span aria-hidden="true">${ui.comparisonAfter}</span>
        </div>
        <div class="comparison-result" data-stage="before" aria-live="polite">
          <h3>${ui.comparisonBefore}</h3>
          <p>${safe(selectedExperience.comparaisons[0].avant)}</p>
        </div>
      </section>` : ""}
      ${selectedExperience.photos?.length ? `<section class="experience-gallery">
        <h2>${ui.photos}</h2>
        <div class="cards">${selectedExperience.photos.map(photo => `
          <figure class="card">
            <img src="${escapeHtml(photo.src)}" alt="${safe(photo.legende)}" loading="lazy">
            ${selectedExperience.afficherLegendes !== false && local(photo.legende) ? `<figcaption>${safe(photo.legende)}</figcaption>` : ""}
          </figure>`).join("")}</div>
      </section>` : ""}` : ""],
    logiciels: [ui.software, profil.logiciels?.length ? `<div class="software-motion"><div class="software-grid">${profil.logiciels.map(item => `
      <article class="card software-card">
        <span class="software-icon" aria-hidden="true">
          ${item.logo ? `<img src="${escapeHtml(item.logo)}" alt="" decoding="async" referrerpolicy="no-referrer">` : ""}
          <span>${escapeHtml(item.icone || local(item.titre).slice(0, 2))}</span>
        </span>
        <h2>${safe(item.titre)}</h2>
        ${local(item.description) ? `<p>${safe(item.description)}</p>` : ""}
        ${link(local(item.lien), ui.open)}
      </article>`).join("")}</div></div>` : placeholder()],
    projets: [ui.projects, `${cards(profil.projets)}
      ${section("cas-pratique", ui.caseTitle, `<div class="card case-study">
        <p>${ui.caseIntro}</p>
        ${ui.caseChecks.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}
        ${link("https://genai.owasp.org/llmrisk/llm062025-excessive-agency/", ui.caseSource)}
      </div>`)}
      ${section("formations", ui.training, `<p class="training-credit">${ui.internshipTraining}</p>${cards(profil.formations, true)}`)}`],
    parcours: [ui.background, `<section class="education" aria-labelledby="education-title">
      <h2 id="education-title">${ui.studyRoute}</h2>
      <div class="study-map">
        <ol class="study-route">
          <li><span>${ui.algiersPeriod}</span><strong>${ui.algiers}</strong></li>
          <li><span>${ui.lillePeriod}</span><strong>${ui.lille}</strong></li>
        </ol>
      </div>
      <ol class="timeline">${[...profil.parcours].reverse().map(item => `<li>
        <span class="timeline-date">${escapeHtml(item.format)}</span>
        <article class="card">
          <h3>${safe(item.titre)}</h3>
          <p>${safe(item.description)}</p>
          ${link(local(item.lien), ui.open)}
        </article>
      </li>`).join("")}</ol>
      </section>
      ${section("competences", ui.skills, cards(profil.competences))}
      ${section("certifications", ui.certifications, cards(profil.certifications))}
      ${section("engagements", ui.volunteering, cards(profil.engagements))}
      ${section("objectifs", ui.goals, `<div class="cards">${[
        [ui.cyberTraining, profil.objectifs.formationCyber], [ui.aiSecurity, profil.objectifs.specialisationIA],
        [ui.career, profil.objectifs.professionnel], [ui.personal, profil.objectifs.personnel],
      ].filter(([, goal]) => local(goal)).map(([title, goal]) => `<article class="card"><h3>${title}</h3>
        <p>${safe(goal)}</p></article>`).join("")}</div>`)}
      ${section("a-propos", ui.aboutMe, link(pageUrl("qui-est-madeleine"), ui.aboutLink, "button"))}`],
    recommandations: [ui.recommendations, `<p class="intro">${ui.recommend}</p>
        <details class="recommendation-panel">
          <summary class="button primary">${ui.postRecommendation}</summary>
          ${commentsReady() ? '<div class="giscus"></div>' : `<p>${ui.recommendationNote}</p>${contactForm(ui, true)}`} 
          ${link(profil.liens.email ? `mailto:${profil.liens.email}?subject=${encodeURIComponent(ui.recommendations)}` : "", ui.privateRecommendation, "button")}
        </details>`],
    contact: [ui.contact, contacts || form || booking ? `${form}${booking}<div class="actions">${contacts}</div>` : placeholder()],
  };
  const [title, content] = pages[page] || [];
  main.innerHTML = page === "index" ? home : `<div class="shell page-content">
    ${page === "experience" ? `<a class="back-link" href="${pageUrl("experiences")}">← ${ui.back}</a>` : ""}
    ${page === "qui-est-madeleine" ? `<a class="back-link" href="${pageUrl("parcours")}#a-propos">← ${ui.backToBackground}</a>` : ""}
    <h1>${title}</h1>
    ${content}
  </div>`;
  if (title) document.title = `${selectedExperience && page === "experience" ? local(selectedExperience.titre) : title} — ${profil.nom}`;
  document.querySelector("#footer-label").textContent = ui.portfolio;
  updateHeaderLabels?.(ui);
  const comparison = main.querySelector(".automation-comparison");
  if (comparison) {
    const agent = comparison.querySelector("select");
    const slider = comparison.querySelector('input[type="range"]');
    const result = comparison.querySelector(".comparison-result");
    function updateComparison() {
      const after = slider.value === "1";
      const label = after ? ui.comparisonAfter : ui.comparisonBefore;
      const example = selectedExperience.comparaisons[Number(agent.value)];
      result.dataset.stage = after ? "after" : "before";
      result.querySelector("h3").textContent = label;
      result.querySelector("p").textContent = local(after ? example.apres : example.avant);
      slider.setAttribute("aria-valuetext", label);
    }
    agent.addEventListener("change", updateComparison);
    slider.addEventListener("input", updateComparison);
  }
  const hero = main.querySelector(".hero");
  if (hero && window.matchMedia("(prefers-reduced-motion: no-preference) and (pointer: fine)").matches) {
    hero.addEventListener("pointermove", event => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--halo-x", `${event.clientX - bounds.left}px`);
      hero.style.setProperty("--halo-y", `${event.clientY - bounds.top}px`);
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      hero.style.removeProperty("--halo-x");
      hero.style.removeProperty("--halo-y");
    });
  }
  if (page === "recommandations") mountComments(language);
  main.querySelectorAll(".training-viewer").forEach(viewer => {
    const image = viewer.querySelector("img");
    const counter = viewer.querySelector("output");
    const [previous, next] = viewer.querySelectorAll("button");
    const count = Number(viewer.dataset.pages);
    let current = 1;
    function showSlide() {
      const label = `${ui.slide} ${current} / ${count}`;
      image.alt = label;
      image.src = `${viewer.dataset.folder}/page-${current}.webp`;
      counter.textContent = label;
      previous.disabled = current === 1;
      next.disabled = current === count;
    }
    viewer.addEventListener("toggle", () => {
      if (viewer.open && !image.hasAttribute("src")) showSlide();
    });
    viewer.querySelector(".training-frame").addEventListener("contextmenu", event => event.preventDefault());
    [previous, next].forEach(button => button.addEventListener("click", () => {
      current += Number(button.dataset.step);
      showSlide();
    }));
  });
  main.querySelectorAll(".software-icon img").forEach(image => {
    const showFallback = () => image.remove();
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete && !image.naturalWidth) showFallback();
  });
  main.querySelector("[data-mail-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const details = ["name", "company", "email", "phone"].map(key => `${ui[key]} · ${values.get(key)}`);
    const body = `${details.join("\n")}\n\n${values.get("message")}`;
    window.location.href = `mailto:${encodeURIComponent(profil.liens.email).replace("%40", "@")}?subject=${encodeURIComponent(ui.subject)}&body=${encodeURIComponent(body)}`;
  });
}

function commentsReady() {
  const { repo, repoId, category, categoryId } = profil.commentaires;
  return [repo, repoId, category, categoryId].every(Boolean);
}

function mountComments(language) {
  if (!commentsReady()) return;
  const { repo, repoId, category, categoryId } = profil.commentaires;

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  Object.assign(script.dataset, {
    repo, repoId, category, categoryId,
    mapping: "specific", term: "Portfolio – Recommandations", strict: "1",
    reactionsEnabled: "0", emitMetadata: "0", inputPosition: "top",
    theme: document.documentElement.dataset.theme, lang: language, loading: "lazy",
  });
  document.querySelector(".giscus").append(script);
}

function readRoute(url) {
  const virtual = url.protocol === "file:" && url.hash.startsWith("#page=");
  const params = virtual ? new URLSearchParams(url.hash.slice(1)) : url.searchParams;
  const filename = url.pathname.split("/").pop() || "index.html";
  const page = virtual ? params.get("page") : filename.replace(/\.html$/, "");
  return {
    page: publicPages.has(page) ? page : "index",
    language: params.get("lang") === "en" ? "en" : "fr",
    id: params.get("id"),
    anchor: virtual ? params.get("anchor") || "" : url.hash.slice(1),
  };
}

function showRoute(route, scroll = false) {
  render(route.language, route.page, route.id);
  if (!scroll && !route.anchor) return;
  const target = route.anchor ? document.getElementById(route.anchor) : null;
  if (target) target.scrollIntoView();
  else if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
}

function routeAddress(url) {
  if (url.protocol !== "file:") return url;
  // File previews use a fragment so routing can keep the current document open.
  const route = readRoute(url);
  const params = new URLSearchParams({ page: route.page, lang: route.language });
  if (route.id) params.set("id", route.id);
  if (route.anchor) params.set("anchor", route.anchor);
  return `#${params}`;
}

languageButtons.forEach(button => button.addEventListener("click", () => {
  const location = new URL(window.location.href);
  const route = readRoute(location);
  route.language = button.dataset.language;
  const url = new URL(`${route.page}.html`, location);
  url.searchParams.set("lang", route.language);
  if (route.id) url.searchParams.set("id", route.id);
  if (route.anchor) url.hash = route.anchor;
  window.history.replaceState(null, "", routeAddress(url));
  showRoute(route);
}));

document.addEventListener("click", event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.target.closest?.("a[href]");
  if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
  const current = new URL(window.location.href);
  const destination = new URL(anchor.href, current);
  const filename = destination.pathname.split("/").pop();
  if (!filename?.endsWith(".html") || !publicPages.has(filename.slice(0, -5))) return;
  const sameDirectory = new URL(".", destination).href === new URL(".", current).href;
  if (!sameDirectory) return;
  event.preventDefault();
  window.history.pushState(null, "", routeAddress(destination));
  showRoute(readRoute(destination), true);
});

window.addEventListener("popstate", () => showRoute(readRoute(new URL(window.location.href)), true));
if (document.querySelector(".header-controls")) updateHeaderLabels = setupHeaderControls();
showRoute(readRoute(new URL(window.location.href)));
