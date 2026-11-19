const bilingual = (fr, en) => ({ fr, en });
const entry = (fr, en, detailsFr, detailsEn, format) => ({
  titre: bilingual(fr, en), description: bilingual(detailsFr, detailsEn), format,
});
const commons = "https://upload.wikimedia.org/wikipedia/commons/";
const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/";

const profil = {
  nom: "Madeleine Rezki",
  aPropos: {
    caractere: bilingual(
      "En général, je suis de bonne humeur. Et côté humour, je l’assume : il est parfois complètement éclaté au sol.",
      "I’m usually in a good mood. And I’ll own it: my jokes are sometimes so bad they’re funny."
    ),
    voyages: bilingual(
      "J’adore voyager. J’ai visité l’Angleterre, le Japon, l’Espagne, les Pays-Bas, la Tunisie, la Belgique, l’Italie et, bien évidemment, la France.",
      "I love travelling. I’ve visited England, Japan, Spain, the Netherlands, Tunisia, Belgium, Italy and, of course, France."
    ),
    dixAns: bilingual(
      "Dans dix ans, j’aimerais avoir approfondi autant de sujets que possible, écrit un livre et lancé un podcast. J’ai envie de rencontrer des personnes qui travaillent dans des domaines très différents, de sortir le plus souvent possible de ma zone de confort, de continuer à voyager et de pousser mon anglais aussi loin que possible.",
      "In ten years, I’d like to have explored as many subjects in depth as possible, written a book and launched a podcast. I want to meet people who work in very different fields, step outside my comfort zone as often as I can, keep travelling and take my English as far as possible."
    ),
    loisirs: bilingual(
      "Je prends des cours de chant, j’aime lire et je cours. J’ai aussi fait quatre ans de boxe.",
      "I take singing lessons, I love reading, and I run. I also boxed for four years."
    ),
    nature: bilingual(
      "Le soleil, la mer et la nature. Si je peux réunir les trois dans la même journée, c’est encore mieux.",
      "Sunshine, the sea and being out in nature. If I can get all three in one day, even better."
    ),
    cafe: bilingual(
      "Je préfère le Capri-Sun et le Red Bull. Le café, c’est mon plan B en cas de nécessité.",
      "I prefer Capri-Sun and Red Bull. Coffee is my backup plan for when I really need it."
    ),
  },
  intro: bilingual(
    "Ma force, c’est la polyvalence. Étudiante ingénieure au CESI Lille, je passe de la technique au terrain : j’ai travaillé sur des réseaux, analysé des données, conçu des agents IA et participé à l’organisation d’événements. Je cherche une alternance où je pourrai mettre cette polyvalence au service de la cybersécurité et approfondir les risques liés à l’IA.",
    "Versatility is my strength. As an engineering student at CESI Lille, I’ve worked on networks, analysed data, built AI agents and helped organise events. I’m looking for a work-study position where I can bring that range of experience to cybersecurity and deepen my understanding of AI risks."
  ),
  disponibilites: [
    {
      periode: bilingual("Année 2027–2028", "2027–2028 academic year"),
      titre: bilingual("Recherche d’alternance / contrat de professionnalisation", "Seeking a work-study position"),
      mobilite: bilingual("Mobile et ouverte aux opportunités hors de Lille.", "Open to relocating for opportunities outside Lille."),
    },
    {
      periode: bilingual("Février à juin 2027", "February to June 2027"),
      titre: bilingual("Stage à l’international", "International internship"),
    },
    {
      periode: bilingual("Juin à fin août 2027", "June to the end of August 2027"),
      titre: bilingual("Recherche d’un stage en management événementiel", "Seeking an internship in event management"),
      mobilite: bilingual("Je souhaite apprendre à préparer et coordonner des événements.", "I want to learn how to plan and coordinate events."),
    },
  ],
  parcours: [
    entry("Cycle ingénieur en sciences du numérique", "Digital engineering degree",
      "CESI école d’ingénieurs, Lille", "CESI engineering school, Lille", "2025–2028"),
    entry("Cycle préparatoire en informatique", "Preparatory programme in computer science",
      "CESI Exia Algérie, Alger", "CESI Exia Algeria, Algiers", "2023–2025"),
    entry("Baccalauréat, filière mathématiques", "Baccalaureate in mathematics",
      "Lycée Cheikh Boumama, anciennement Descartes", "Lycée Cheikh Boumama, formerly Descartes", "2023"),
  ],
  experiences: [
    entry("Stage réseau industriel", "Industrial networking internship",
      "Migration de 100 Mb/s à 1 Gb/s, configuration de switches Cisco et migration d’un VLAN. Tests de connectivité, supervision PRTG, cartographie des ports et documentation.",
      "Migrated a network from 100 Mbps to 1 Gbps, configured Cisco switches and migrated a VLAN. Tested connectivity, monitored devices with PRTG, mapped ports and documented the work.", "Nyrstar Auby · 2025"),
    entry("Stage en développement d’un chatbot RH", "HR chatbot development internship",
      "Développement d’un chatbot Python pour analyser et rapprocher des CV, et générer des questionnaires et des rapports RH.",
      "Developed a Python chatbot to analyse and match résumés and generate HR questionnaires and reports.", "Innovateskills · 2025"),
    entry("Stage en communication", "Communications internship",
      "Gestion de projet, utilisation d’outils administratifs et génération de QR codes en Python.",
      "Project coordination, administrative tools and QR code generation in Python.", "NEED Agency · 2024"),
  ],
  logiciels: [
    { ...entry("Power BI", "Power BI", "Visualisation de données.", "Data visualisation."), logo: commons + "c/cf/New_Power_BI_Logo.svg" },
    { ...entry("MySQL", "MySQL", "Bases de données.", "Databases."), logo: devicon + "mysql/mysql-original.svg" },
    { ...entry("Cisco Packet Tracer", "Cisco Packet Tracer", "Simulation de réseaux.", "Network simulation."), logo: commons + "1/19/Icons8-cisco-packet-tracer.svg" },
    { ...entry("PRTG", "PRTG", "Supervision réseau lors du stage chez Nyrstar.", "Network monitoring during the Nyrstar internship."), logo: commons + "1/16/PRTG_Logo.svg" },
    { ...entry("VMware", "VMware", "Virtualisation.", "Virtualisation."), logo: commons + "7/7d/VMware_Workstation_Icon.png" },
    { ...entry("PuTTY", "PuTTY", "Accès à distance.", "Remote access."), logo: devicon + "putty/putty-original.svg" },
    { ...entry("PowerShell", "PowerShell", "Outils système en ligne de commande.", "Command-line system tools."), logo: "https://learn.microsoft.com/en-us/powershell/media/index/powershell_128.svg" },
    { ...entry("Visio", "Visio", "Création de diagrammes.", "Diagram creation."), logo: commons + "6/64/Microsoft_Office_Visio_%282019%29.svg" },
    { ...entry("Fusion", "Fusion", "Conception 3D.", "3D design."), logo: commons + "d/db/Fusion360_Logo.svg" },
    { ...entry("PowerPoint", "PowerPoint", "Création de deux supports de formation.", "Created two training slide decks."), logo: commons + "d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg" },
    { ...entry("Visual Studio Code", "Visual Studio Code", "Édition de code et débogage.", "Code editing and debugging."), logo: devicon + "vscode/vscode-original.svg" },
    { ...entry("Power Automate", "Power Automate", "Création de flux pour automatiser des tâches répétitives.", "Building flows to automate repetitive tasks."), logo: "assets/logos/power-automate.svg" },
    { ...entry("Microsoft Copilot Studio", "Microsoft Copilot Studio", "Création et configuration d’agents IA.", "Building and configuring AI agents."), logo: "assets/logos/copilot-studio.svg" },
    { ...entry("Power Apps", "Power Apps", "Création d’applications sans écrire beaucoup de code.", "Building low-code applications."), logo: "assets/logos/power-apps.svg" },
    { ...entry("Canva", "Canva", "Création de visuels et de supports de présentation.", "Creating visuals and presentation materials."), logo: devicon + "canva/canva-original.svg" },
    { ...entry("Microsoft Office", "Microsoft Office", "Suite bureautique pour les documents, les tableaux et les présentations.", "Productivity suite for documents, spreadsheets and presentations."), logo: "assets/logos/microsoft-office.png" },
  ],
  competences: [
    entry("Data science & IA", "Data science & AI", "Préparation de données, classification, NLP, spaCy, BERT, TF-IDF, k-NN, Power BI et MySQL.", "Data preparation, classification, NLP, spaCy, BERT, TF-IDF, k-NN, Power BI and MySQL."),
    entry("Programmation & conception", "Programming & design", "Python, C pour Arduino, C++, C#, HTML, UML et conception 3D avec Fusion.", "Python, C for Arduino, C++, C#, HTML, UML and 3D design with Fusion."),
    entry("Réseaux & systèmes", "Networking & systems", "Cisco Packet Tracer, VMware, PuTTY, Visio, PowerShell et PRTG.", "Cisco Packet Tracer, VMware, PuTTY, Visio, PowerShell and PRTG."),
    entry("Gestion de projet", "Project management", "Management d’équipe, autonomie, créativité et travail en équipe.", "Team management, initiative, creativity and teamwork."),
    entry("Langues", "Languages", "Français et arabe natifs, anglais intermédiaire (B1/B2), japonais débutant.", "Native French and Arabic, intermediate English (B1/B2), beginner Japanese."),
  ],
  projets: [
    entry("HumanForYou · Attrition RH", "HumanForYou · Employee attrition",
      "Analyse et préparation des données RH. Comparaison de modèles de machine learning avec l’accuracy, le rappel, le score F1 et la ROC-AUC.",
      "Analysed and prepared HR data. Compared machine learning models using accuracy, recall, F1 score and ROC-AUC.", "CESI Lille · 2025"),
    entry("Chatbot RH", "HR chatbot",
      "Analyse de CV avec spaCy et BERT, vectorisation TF-IDF et rapprochement de profils avec k-NN. Automatisation de questionnaires et de rapports RH.",
      "Used spaCy and BERT for résumé analysis, TF-IDF for vectorisation, and k-NN for candidate matching. Automated HR questionnaires and reports.", "Python · NLP"),
  ],
  certifications: [
    entry("Préparation CCNA 1", "CCNA 1 preparation", "Cisco Networking Academy", "Cisco Networking Academy", "2025"),
    entry("Formation en design", "Design training", "AIESEC in Benak", "AIESEC in Benak", "2024–2025"),
    entry("Formation de secourisme", "First aid training", "Croissant-Rouge algérien", "Algerian Red Crescent", "2022"),
  ],
  formations: [
    {
      ...entry(
        "Créer des agents d’automatisation grâce au prompting",
        "Build automation agents with prompting",
        "Un tutoriel en quatre modules pour identifier les tâches à automatiser, structurer un prompt, concevoir un agent et créer un premier flux Power Automate. Le support se termine par un atelier pratique.",
        "A four-module tutorial on identifying tasks to automate, structuring a prompt, designing an agent and building a first Power Automate flow. The deck ends with a hands-on workshop.",
        "24 diapositives · FR"
      ),
      visionneuse: { dossier: "supports/prompting", pages: 24 },
    },
    {
      ...entry(
        "Créer des agents IA sur Copilot : les points de vigilance",
        "Creating AI agents in Copilot: what to watch out for",
        "Une formation sur les risques à prendre en compte avant de créer et de déployer un agent IA avec Copilot.",
        "A training deck on the risks to consider before building and deploying an AI agent with Copilot.",
        "10 diapositives · FR"
      ),
      visionneuse: { dossier: "supports/risques-copilot", pages: 10 },
    },
  ],
  engagements: [
    entry("Ambassadrice CESI", "CESI student ambassador", "CESI Lille", "CESI Lille", "2026–2027"),
    entry("Membre du BDE CESI Lille", "CESI Lille student association member", "Organisation d’événements.", "Helped organise student events.", "2025–2026"),
    entry("Vice-présidente du BDE d’Exia", "Exia student association vice president", "CESI Exia Algérie", "CESI Exia Algeria", "2023–2025"),
    entry("Secouriste bénévole", "Volunteer first aider", "Croissant-Rouge algérien, El Biar", "Algerian Red Crescent, El Biar", "2021–2023"),
  ],
  objectifs: {
    professionnel: bilingual("Appliquer mes compétences en data science au sein d’une équipe, dans le cadre d’un stage à l’international puis d’un contrat de professionnalisation.", "Apply my data science skills as part of a team, first through an international internship and then through a work-study contract."),
    formationCyber: bilingual(
      "Suivre des formations en cybersécurité pour apprendre à identifier les vulnérabilités et à protéger les systèmes informatiques.",
      "Take cybersecurity courses to learn how to identify vulnerabilities and protect computer systems."
    ),
    specialisationIA: bilingual(
      "Devenir ingénieure en cybersécurité spécialisée dans l’intelligence artificielle. Je veux sécuriser les systèmes d’IA, évaluer les risques liés à leur utilisation et prévenir les détournements.",
      "Become a cybersecurity engineer specialising in artificial intelligence. I want to secure AI systems, assess the risks of using them and prevent misuse."
    ),
    personnel: bilingual("", ""),
  },
  liens: { github: "", linkedin: "https://www.linkedin.com/in/madeleine-rezki-25898a197/", email: "rezkimadeleine@gmail.com", formulaire: "https://formsubmit.co/rezkimadeleine@gmail.com", reservationMeet: "https://calendar.app.google/3kCgmJVRfsXJG8pHA", cv: bilingual("", "") },
  commentaires: { repo: "", repoId: "", category: "", categoryId: "" },
  musique: { spotify: "" },
};

const experienceDetails = [
  {
    id: "nyrstar-auby",
    certificatSecurite: "supports/certificats/nyrstar-risques-chimiques.pdf",
    formationSecurite: bilingual("Formation aux risques chimiques — Nyrstar Auby. Validée le 11 février 2026, certificat valable jusqu’au 5 août 2027.", "Chemical risk training — Nyrstar Auby. Completed on 11 February 2026, certificate valid until 5 August 2027."),
    afficherLegendes: false,
    format: "Nyrstar Auby · 02–04/2026",
    dateDebut: "2026-02-01",
    dateFin: "2026-04-30",
    details: bilingual(
      "Préparer et configurer des switches Cisco à partir des modèles de configuration, puis intervenir sur site pour leur remplacement.\nÉtablir les correspondances de ports, préparer les migrations et remettre les baies au propre.\nTester la connectivité et actualiser la supervision PRTG après les changements.\nMettre en service un rack monitor NetBotz, le configurer via PuTTY et son interface web, puis tester ses capteurs de température et d’humidité.\nIntégrer les capteurs dans PRTG avec SNMP et rechercher les OID nécessaires à leur supervision.\nCréer des tableaux de suivi Excel pour les interventions, les correspondances de ports et les contraintes de profondeur des baies.\nDocumenter les changements réseau et la configuration NetBotz, et contribuer à la mise à jour du plan réseau.\nParticiper à la préparation, à la maintenance et à la masterisation de postes informatiques.\nPréparer l’architecture et le plan de mise en place d’un lien bridge pour une extension réseau, encore en préparation au moment du rapport.",
      "Prepare and configure Cisco switches from configuration templates, then assist with on-site replacements.\nMap old and new ports, prepare migrations and reorganise network cabinets.\nTest connectivity and update PRTG monitoring after changes.\nCommission a NetBotz rack monitor, configure it with PuTTY and its web interface, and test temperature and humidity sensors.\nIntegrate the sensors into PRTG using SNMP and identify the OIDs needed for monitoring.\nCreate Excel tracking sheets for interventions, port mappings and rack-depth constraints.\nDocument network changes and NetBotz configuration, and help update the network diagram.\nAssist with PC preparation, maintenance and imaging.\nPrepare the architecture and deployment plan for a bridge-based network extension, which was still in preparation when the report was written."
    ),
    competences: bilingual(
      "Diagnostic structuré avec le modèle OSI · Câblage cuivre et fibre optique · Configuration Cisco · Supervision SNMP et OID · Préparation des changements et RFC · Documentation technique · Coordination des interventions en environnement industriel",
      "Structured troubleshooting using the OSI model · Copper and fibre cabling · Cisco configuration · SNMP and OID monitoring · Change preparation and RFCs · Technical documentation · Coordinating work in an industrial environment"
    ),
    photos: [
      { src: "assets/nyrstar/baie-halle-avant.webp", legende: bilingual("Baie de la Halle avant l’intervention — rapport, p. 36.", "Halle network cabinet before the intervention — report, p. 36.") },
      { src: "assets/nyrstar/baie-halle-apres.webp", legende: bilingual("Baie de la Halle après le remplacement et la réorganisation — rapport, p. 37.", "Halle cabinet after replacement and reorganisation — report, p. 37.") },
      { src: "assets/nyrstar/netbotz.webp", legende: bilingual("Rack monitor NetBotz et capteur sans fil mis en service — rapport, p. 44.", "NetBotz rack monitor and wireless sensor commissioned during the internship — report, p. 44.") },
    ],
  },
  {
    id: "innovateskills",
    format: "Innovateskills · 04–07/2025",
    dateDebut: "2025-04-01",
    dateFin: "2025-07-31",
    details: bilingual(
      "Analyser des CV avec spaCy et BERT.\nVectoriser les CV avec TF-IDF et utiliser k-NN pour le rapprochement des profils et le scoring.\nAutomatiser la génération de questionnaires et de rapports RH.",
      "Analyse résumés using spaCy and BERT.\nVectorise résumés with TF-IDF and use k-NN for matching and scoring.\nAutomate the generation of HR questionnaires and reports."
    ),
  },
  {
    id: "need-agency",
    format: "NEED Agency · 07–08/2024",
    dateDebut: "2024-07-01",
    dateFin: "2024-08-31",
    details: bilingual(
      "Contribuer à la gestion de projet.\nUtiliser les outils administratifs de l’agence.\nGénérer des QR codes avec Python.",
      "Assist with project coordination.\nUse the agency’s administrative tools.\nGenerate QR codes with Python."
    ),
  },
];
profil.experiences.forEach((experience, index) => Object.assign(experience, experienceDetails[index]));
profil.experiences.unshift({
  ...entry(
    "Agents IA et automatisation",
    "AI agents and automation",
    "Pendant mon stage à SKEMA Lille, je conçois et développe plusieurs agents IA pour automatiser des tâches répétitives du personnel.",
    "During my internship at SKEMA Lille, I design and build multiple AI agents to automate repetitive tasks for staff.",
    "SKEMA Lille · 09/2026–01/2027"
  ),
  id: "skema-lille",
  dateDebut: "2026-09-01",
  dateFin: "2027-01-31",
  photos: [
    { src: "assets/skema-exemple-flow.webp", legende: bilingual("Exemple Flow Power Automate", "Power Automate Flow Example") },
    { src: "assets/skema/flux-brouillons.png", legende: bilingual("Flux appelé par un agent : traitement JSON, génération HTML et création de brouillons de messages.", "Agent-triggered flow: JSON processing, HTML generation and message draft creation.") },
    { src: "assets/skema/suivi-demandes-anonymise.png", legende: bilingual("Application Power Apps de suivi des demandes — capture retouchée et anonymisée.", "Power Apps request tracking application — edited and anonymised screenshot.") },
    { src: "assets/skema/vectorisation-anonymisee.png", legende: bilingual("Expérimentation Python de vectorisation de questions et d’articles — capture retouchée et anonymisée.", "Python experiment with question and article embeddings — edited and anonymised screenshot.") },
    { src: "assets/skema/incidents-anonymise.png", legende: bilingual("Tableau de bord des incidents techniques — capture retouchée, libellés et valeurs internes masqués.", "Technical incident dashboard — edited screenshot with internal labels and values redacted.") },
  ],
  flux: bilingual(
    "Création de flux Power Automate connectés aux agents IA : traitement de données JSON, utilisation de modèles HTML, boucles et conditions de validation, création de brouillons de messages et retour d’une réponse à l’agent.",
    "Building Power Automate flows connected to AI agents: JSON processing, HTML templates, loops and validation conditions, message draft creation and responses returned to the agent."
  ),
  comparaisons: [
    {
      titre: bilingual("Agent rédacteur", "Writing agent"),
      avant: bilingual("Rassembler le contexte, rédiger le texte puis le relire avant diffusion.", "Gather the context, write the text and review it before sharing."),
      apres: bilingual("Donner le contexte à l’agent pour obtenir un premier brouillon, puis vérifier et adapter le texte.", "Give the agent the context to get a first draft, then check and adapt the text."),
    },
    {
      titre: bilingual("Agent « Qui fait quoi ? » — DSE", "DSE « Who does what? » agent"),
      avant: bilingual("Chercher dans les ressources internes ou demander à un collègue quel service contacter.", "Search internal resources or ask a colleague which team to contact."),
      apres: bilingual("Décrire son besoin à l’agent pour être orienté vers le service ou l’interlocuteur concerné.", "Describe the request to the agent to identify the relevant team or contact."),
    },
    {
      titre: bilingual("Agent renommeur de photos", "Photo renaming agent"),
      avant: bilingual("Ouvrir les fichiers et renommer les photos une par une selon la convention choisie.", "Open the files and rename photos one by one using the agreed naming convention."),
      apres: bilingual("Appliquer une convention de nommage à un lot de photos, puis contrôler les noms obtenus.", "Apply a naming convention to a batch of photos, then check the resulting names."),
    },
    {
      titre: bilingual("Agent redoublants", "Repeat-year student support agent"),
      avant: bilingual("Chercher les informations utiles sur les situations de redoublement dans plusieurs ressources.", "Look up information on repeat-year situations across several resources."),
      apres: bilingual("Poser une question à l’agent pour obtenir une première orientation, à vérifier selon la situation de l’étudiant.", "Ask the agent for initial guidance, then check it against the student’s situation."),
    },
  ],
  details: bilingual(
    "Créer des agents IA adaptés aux tâches du personnel de SKEMA Lille.\nConcevoir des flux Power Automate pour relier les agents à des actions concrètes, notamment la préparation de brouillons de messages.\nDévelopper une application Power Apps pour centraliser et suivre les demandes de communication : recherche, statut et informations de traitement.\nConstruire un tableau de bord de suivi des incidents techniques pour visualiser les catégories, l’évolution des demandes et leur répartition.\nExpérimenter la vectorisation de questions et d’articles en Python avec Sentence Transformers.\nConcevoir deux formations sur la création d’agents, l’automatisation avec Power Automate et les risques liés aux agents dans Copilot Studio.",
    "Build AI agents tailored to the tasks of SKEMA Lille staff.\nDesign Power Automate flows connecting agents to concrete actions, including message draft preparation.\nDevelop a Power Apps application to centralise and track communication requests, with search, status and processing information.\nBuild a technical incident dashboard to visualise categories, request trends and distribution.\nExperiment with question and article embeddings in Python using Sentence Transformers.\nCreate two training decks on building agents, automating tasks with Power Automate and addressing risks associated with Copilot Studio agents."
  ),
  competences: bilingual(
    "Copilot Studio · Power Automate · Power Apps · Python · Sentence Transformers · JSON · HTML · Suivi des demandes · Visualisation de données · Conception de formations",
    "Copilot Studio · Power Automate · Power Apps · Python · Sentence Transformers · JSON · HTML · Request tracking · Data visualisation · Training design"
  ),
  lien: "projets.html#formations",
});
