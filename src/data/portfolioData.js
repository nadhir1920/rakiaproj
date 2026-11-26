export const LINKEDIN_URL = "https://www.linkedin.com/in/rakiya-limem-853b87450/";
export const GITHUB_URL = "https://github.com/rakiyalimem-netizen";

export const NAV_ITEMS = [
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "parcours", label: "Parcours" },
  { id: "projets", label: "Projets" },
  { id: "dossier", label: "Dossier MDW" },
];

export const ROLES = [
  "Développeuse Web Full Stack",
  "Spécialiste React, Angular & Laravel",
  "UI/UX Designer · Figma & Tailwind",
  "Étudiante MDW 3.2 · ISET Sidi Bouzid",
];

export const QUICK_FACTS = [
  { index: "01", title: "3ème année MDW", detail: "Licence IT · ISET Sidi Bouzid" },
  { index: "02", title: "7+ Projets Web", detail: "React, Angular, Laravel, Spring Boot" },
  { index: "03", title: "3 Expériences", detail: "NovaWeb Studio, Freelance, Tunisie Telecom" },
  { index: "04", title: "4 Livrables MDW", detail: "Dossier complet & auto-évalué" },
];

export const INTERESTS = [
  "Développement Front-End moderne (React 18/19, Angular 18)",
  "Architecture Back-End & API REST (Laravel 13, Spring Boot 3.2, PHP 8)",
  "Sécurité Web (JWT HS256, Laravel Sanctum, Spring Security)",
  "UI/UX Design, Wireframing & Design Systems sous Figma",
  "Temps réel (WebSocket STOMP) & Paiement en ligne (Stripe)",
];

export const SKILL_FILTERS = [
  { key: "all", label: "Toutes" },
  { key: "frontend", label: "Front-End & UI" },
  { key: "backend", label: "Back-End & API" },
  { key: "tools", label: "Outils & Méthodes" },
];

export const SKILLS = [
  {
    id: "react",
    category: "frontend",
    icon: "Code2",
    code: "FE-01",
    featured: true,
    title: "React.js (18 / 19) & Vite",
    description:
      "Conception d'interfaces réactives modulaires avec Hooks, Context API, Tailwind CSS et Framer Motion.",
    tags: ["React 19", "Vite", "Tailwind CSS", "Axios"],
  },
  {
    id: "angular",
    category: "frontend",
    icon: "Layers",
    code: "FE-02",
    featured: false,
    title: "Angular 18 & TypeScript",
    description:
      "Applications structurées en Standalone Components avec lazy-loading, Route Guards et HttpInterceptors JWT.",
    tags: ["Angular 18", "TypeScript", "RxJS", "Chart.js"],
  },
  {
    id: "laravel",
    category: "backend",
    icon: "ShieldCheck",
    code: "BE-01",
    featured: true,
    title: "Laravel 13 & PHP 8.3",
    description:
      "Création d'APIs RESTful sécurisées avec Laravel Sanctum, Eloquent ORM, migrations et architectures MVC.",
    tags: ["Laravel 13", "PHP 8.3", "Sanctum", "MySQL / SQLite"],
  },
  {
    id: "springboot",
    category: "backend",
    icon: "Network",
    code: "BE-02",
    featured: true,
    title: "Spring Boot 3.2 & Temps Réel",
    description:
      "Services Java 17 avec Spring Security + JWT, Spring Data JPA (PostgreSQL), WebSocket STOMP et Stripe SDK.",
    tags: ["Spring Boot", "Java 17", "WebSocket", "Stripe", "PostgreSQL"],
  },
  {
    id: "uiux",
    category: "frontend",
    icon: "Cpu",
    code: "UI-01",
    featured: false,
    title: "UI/UX Design & Accessibilité",
    description:
      "Prototypage haute fidélité sous Figma, intégration responsive mobile-first et optimisation Lighthouse (> 92/100).",
    tags: ["Figma", "Design System", "WCAG", "Responsive"],
  },
  {
    id: "devops",
    category: "tools",
    icon: "Users",
    code: "OP-01",
    featured: false,
    title: "Git, Docker & Méthode Agile",
    description:
      "Versioning collaboratif GitHub, conteneurisation Docker Compose, sprints Scrum et usage critique de l'IA.",
    tags: ["Git / GitHub", "Docker Compose", "Scrum", "Merise / UML"],
  },
];

export const TIMELINE = [
  {
    index: "01",
    type: "Stage d'initiation",
    period: "Juillet 2024",
    title: "Stagiaire Développement Web & SI · Tunisie Telecom",
    summary:
      "Direction Régionale Sidi Bouzid — Immersion au sein du service informatique et refonte d'un module interne de suivi.",
    subtitle: "Réalisations principales",
    points: [
      "Modélisation de la base de données relationnelle (MCD/MLD sous Merise).",
      "Développement d'écrans de consultation et formulaires CRUD sécurisés en PHP PDO / MySQL.",
      "Rédaction de la documentation fonctionnelle et soutenance du rapport de stage.",
    ],
  },
  {
    index: "02",
    type: "Stage de perfectionnement",
    period: "Juillet – Août 2025",
    title: "Stagiaire Développeuse Web Front-End & UI · NovaWeb Studio",
    summary:
      "Sfax · Hybride — Intégration d'interfaces web responsives et modernisation de l'identité digitale pour des PME tunisiennes.",
    subtitle: "Réalisations principales",
    points: [
      "Conception de maquettes haute fidélité sur Figma et intégration pixel-perfect HTML5 / CSS3 Grid / JS ES6+.",
      "Amélioration des scores d'accessibilité et de performance mobile (Lighthouse > 92/100).",
      "Participation aux sprints hebdomadaires et gestion du code source collaboratif via Git & GitHub.",
    ],
  },
  {
    index: "03",
    type: "Activité Indépendante",
    period: "Octobre 2025 – Présent",
    title: "Développeuse Web Freelance · PME & Artisans Locaux",
    summary:
      "Sidi Bouzid · Télétravail — Conception de sites vitrines et catalogues produits sur mesure pour accompagner la transformation digitale.",
    subtitle: "Réalisations principales",
    points: [
      "Recueil du besoin client, proposition d'arborescence et création de prototypes interactifs.",
      "Développement d'espaces d'administration légers en PHP/MySQL pour une gestion autonome.",
      "Déploiement, configuration SEO on-page et formation des clients.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "smart-booking",
    featured: true,
    badge: "Projet Phare · Temps Réel",
    year: "2026",
    title: "Smart Booking System",
    stackLabel: "Spring Boot 3.2 · React 18 · PostgreSQL · Stripe",
    image: "/rakiaproj/assets/projects/smart-booking-illustration.svg",
    summary:
      "Plateforme full-stack de réservation d'hôtels, salles de réunion et espaces de coworking avec calendrier temps réel (WebSocket STOMP) et paiement Stripe.",
    highlights: [
      "Back-end Spring Boot 3.2 (Java 17), Spring Security + JWT, Spring Data JPA (PostgreSQL) & Docker Compose.",
      "Mise à jour instantanée des créneaux sur FullCalendar 6 via WebSocket STOMP (/api/ws).",
      "Paiement sécurisé via Stripe PaymentIntent côté serveur et Stripe Elements côté React.",
    ],
    tags: ["React 18", "Spring Boot 3.2", "WebSocket", "Stripe", "PostgreSQL"],
    repoUrl: GITHUB_URL,
  },
  {
    id: "car-rental",
    featured: true,
    badge: "Projet Phare · Full-Stack",
    year: "2026",
    title: "Car Rental Platform",
    stackLabel: "Laravel 13 · React 19 · Vite 8 · Tailwind CSS 4",
    image: "/rakiaproj/assets/projects/car-rental-illustration.svg",
    summary:
      "Plateforme complète de location de véhicules : catalogue public, réservations, gestion des contrats, suivi des paiements et dashboard administrateur.",
    highlights: [
      "API RESTful sécurisée sous Laravel 13 (PHP 8.3) avec authentification Laravel Sanctum et SQLite.",
      "Front-end React 19 + Vite 8 + Tailwind CSS 4 structuré en 5 modules métier (Dashboard, Véhicules, Réservations, Contrats, Paiements).",
      "Workflows de validation de statut et statistiques temps réel pour l'administrateur.",
    ],
    tags: ["React 19", "Laravel 13", "Sanctum", "Tailwind 4", "Axios"],
    repoUrl: GITHUB_URL,
  },
  {
    id: "gestion-etudiant",
    featured: true,
    badge: "Projet Phare · Académique",
    year: "2026",
    title: "Gestion des Étudiants",
    stackLabel: "Angular 18 · PHP 8 REST · MySQL · JWT HS256",
    image: "/rakiaproj/assets/projects/project-edusmart.jpg",
    summary:
      "Système complet de gestion académique : étudiants, saisie des notes (40% CC / 60% Examen), absences, statistiques Chart.js et bulletins.",
    highlights: [
      "API REST PHP 8 (PDO MySQL) avec architecture MVC, middleware CORS et authentification JWT HS256.",
      "Front-end Angular 18 en Standalone Components avec lazy-loading, authGuard/adminGuard et Interceptor Bearer.",
      "Calcul automatique des moyennes/mentions et graphiques analytiques avec ng2-charts.",
    ],
    tags: ["Angular 18", "PHP 8", "MySQL", "JWT HS256", "Chart.js"],
    repoUrl: GITHUB_URL,
  },
  {
    id: "artisana",
    featured: false,
    badge: "E-Commerce & UI",
    year: "2026",
    title: "Artisana Tunisi",
    stackLabel: "HTML5 · CSS3 Grid · JS ES6+ · PHP 8 · MySQL",
    image: "/rakiaproj/assets/projects/project-artisana.jpg",
    summary:
      "Boutique en ligne responsive valorisant l'artisanat tunisien avec filtrage multicritères et panier persistant.",
    highlights: [
      "Design mobile-first sous Figma et panier dynamique en JavaScript ES6+.",
      "Gestion des commandes et du stock en PHP 8 / MySQL avec requêtes préparées.",
    ],
    tags: ["Figma", "JavaScript", "PHP 8", "MySQL"],
    repoUrl: GITHUB_URL,
  },
  {
    id: "taskflow",
    featured: false,
    badge: "Front-End Agile",
    year: "2025",
    title: "TaskFlow Kanban",
    stackLabel: "JavaScript ES6+ · HTML5 Drag & Drop · LocalStorage",
    image: "/rakiaproj/assets/projects/project-taskflow.jpg",
    summary:
      "Gestionnaire de sprints Kanban collaboratif avec glisser-déposer natif, priorités visuelles et sauvegarde locale.",
    highlights: [
      "Interface 100% Vanilla JS sans dépendance externe et jauges d'avancement temps réel.",
    ],
    tags: ["JavaScript ES6+", "Drag & Drop", "LocalStorage"],
    repoUrl: GITHUB_URL,
  },
  {
    id: "maison-medina",
    featured: false,
    badge: "Site Vitrine",
    year: "2024",
    title: "Maison El Medina",
    stackLabel: "HTML5 · CSS3 Flexbox · JavaScript · UI/UX",
    image: "/rakiaproj/assets/projects/project-cafe.svg",
    summary:
      "Site vitrine éditorial pour un café artisanal avec carte interactive des spécialités et module de réservation.",
    highlights: [
      "Score Accessibilité 96/100 et validation dynamique du formulaire de réservation.",
    ],
    tags: ["HTML5", "CSS3", "UI/UX"],
    repoUrl: GITHUB_URL,
  },
];

export const DOSSIER_DOCUMENTS = [
  {
    id: "cv-final",
    type: "CV · Version retenue",
    badge: "Version finale",
    featured: true,
    title: "CV_Rakia_Limem_V2.pdf",
    description:
      "Version actualisée intégrant coordonnées, parcours MDW, 3 projets Full-Stack (React, Angular, Laravel, Spring Boot) et sécurité JWT/Sanctum.",
    linkLabel: "Ouvrir le CV final",
    content:
      "RAKIA LIMEM — Développeuse Full-Stack (React / Angular · Laravel / Spring Boot) & UI/UX\nSidi Bouzid (Mobilité : Sfax, Tunis & Télétravail) | rakiyalimem@gmail.com | +216 23 677 762\nLinkedIn : linkedin.com/in/rakiya-limem-853b87450 | GitHub : github.com/rakiyalimem-netizen\n\nPROFIL PROFESSIONNEL :\nÉtudiante en 3ème année Licence Technologies de l'Informatique (MDW 3.2) à l'ISET Sidi Bouzid. Conceptrice d'applications Full-Stack sécurisées (JWT, Sanctum, Spring Security) et d'interfaces accessibles (score Lighthouse > 92/100). Recherche un Stage PFE pour l’année universitaire 2026–2027.\n\nCOMPÉTENCES TECHNIQUES :\n• Front-End : React.js (18/19), Angular 18 (Standalone), TypeScript, JavaScript ES6+, Tailwind CSS 4, Chart.js, FullCalendar 6\n• Back-End & Sécurité : Laravel 13 (PHP 8.3, Sanctum), Spring Boot 3.2 (Java 17, JPA, Security), PHP 8 PDO, JWT HS256, WebSocket STOMP, Stripe\n• Bases de données & Outils : MySQL, PostgreSQL, SQLite, Merise/UML, Docker Compose, Git/GitHub, Figma\n\nPROJETS PHARES (2026) :\n• Smart Booking System — Spring Boot 3.2, React 18, PostgreSQL, WebSocket STOMP, Stripe\n• Car Rental Platform — Laravel 13 Sanctum, React 19, Vite 8, Tailwind CSS 4\n• Gestion des Étudiants — Angular 18, PHP 8 REST, MySQL, JWT HS256, Chart.js\n\nEXPÉRIENCES :\n• Stagiaire Développement Web & SI — Tunisie Telecom, Sidi Bouzid (Juil 2024) : Merise, PHP PDO / MySQL\n• Stagiaire Front-End & UI — NovaWeb Studio, Sfax (Juil–Août 2025) : Figma, intégration pixel-perfect, Lighthouse > 92/100\n• Développeuse Web Freelance — PME & Artisans Locaux (Oct 2025–Présent)",
  },
  {
    id: "cv-initial",
    type: "CV · Version initiale",
    badge: "Archive IA",
    featured: false,
    title: "Première maquette du CV (IA)",
    description:
      "Document de départ généré par l'IA, conservé afin de mesurer les ajustements de structure, de précision technique et de contenu effectués.",
    linkLabel: "Consulter l'archive",
    content:
      "RAKIA LIMEM — Étudiante en Informatique | Développeuse Web Junior\nEmail : rakiyalimem@gmail.com | Tél : +216 23 677 762 | Sidi Bouzid\n\nPROFIL :\nÉtudiante dynamique, sérieuse et passionnée par les nouvelles technologies. Je maîtrise le développement web et je cherche un stage PFE pour mettre à profit mes compétences.\n\nCOMPÉTENCES :\nHTML, CSS, JavaScript, PHP, Java, Bases de données, Figma, Git.\n\nEXPÉRIENCES :\n• Stagiaire chez NovaWeb Studio (2025) : Création de sites web responsives.\n• Stagiaire chez Tunisie Telecom (2024) : Participation à des tâches informatiques.\n\nPROJETS :\n• Site de réservation, site de location de voitures, gestion d'étudiants.\n\nFORMATION :\nLicence Technologies de l'Informatique — ISET Sidi Bouzid (2023–2026).",
  },
  {
    id: "lettre-initial",
    type: "Lettre · Ébauche IA",
    badge: "Archive IA",
    featured: false,
    title: "Première rédaction assistée",
    description:
      "Base rédactionnelle générique générée par l'IA servant de point de comparaison avec la lettre adaptée à mon parcours réel.",
    linkLabel: "Consulter l'ébauche",
    content:
      "Madame, Monsieur,\n\nActuellement étudiante en troisième année de licence en informatique, je vous soumets ma candidature pour effectuer un stage de fin d'études au sein de votre entreprise.\n\nPassionnée par le développement web, j'ai acquis de solides connaissances en programmation et en bases de données. Sérieuse, motivée et dotée d'un bon esprit d'équipe, je saurai m'adapter rapidement à vos projets.\n\nJe reste à votre disposition pour un entretien et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nRakia Limem",
  },
  {
    id: "lettre-final",
    type: "Lettre · Personnalisée",
    badge: "Version finale",
    featured: true,
    title: "Lettre de motivation personnalisée",
    description:
      "Rédaction ancrée sur mon stage chez NovaWeb Studio (Sfax), mes 3 projets Full-Stack et ma mobilité pour un stage PFE en Tunisie.",
    linkLabel: "Ouvrir la lettre",
    content:
      "Objet : Candidature Stage de Fin d'Études (PFE) — Développement Full-Stack & UI/UX\n\nMadame, Monsieur,\n\nÉtudiante en 3ème année Licence Technologies de l'Informatique (parcours MDW) à l'ISET Sidi Bouzid, je recherche un stage PFE pour l’année universitaire 2026–2027 pour concevoir et déployer des solutions web à forte valeur ajoutée au sein de votre équipe.\n\nLors de mon stage de perfectionnement chez NovaWeb Studio à Sfax, j'ai conçu des maquettes sous Figma et optimisé l'intégration front-end jusqu'à obtenir un score Lighthouse supérieur à 92/100. En parallèle, mes projets récents démontrent ma maîtrise d'architectures prêtes pour la production : une plateforme de réservation temps réel (Spring Boot 3.2, React 18, WebSocket STOMP et Stripe), une application de location automobile (Laravel 13 Sanctum et React 19) ainsi qu'un portail académique sécurisé par JWT (Angular 18 et PHP 8).\n\nMobile sur Sfax, Tunis et en télétravail, je serais ravie de vous présenter mes réalisations et mon code lors d'un entretien.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nRakia Limem",
  },
];

export const CV_JUSTIFICATIONS = [
  {
    change: "Suppression des clichés IA (« dynamique, passionnée, sérieuse »)",
    reason: "Remplacés par des preuves vérifiables : score Lighthouse > 92/100 et 3 architectures Full-Stack documentées.",
  },
  {
    change: "Précision des versions et protocoles (React 19, Laravel 13, JWT, STOMP, Stripe)",
    reason: "Les filtres ATS et les recruteurs techniques recherchent des compétences exactes plutôt qu'un terme vague comme « développement web ».",
  },
  {
    change: "Ajout de la mobilité géographique (Sfax, Tunis & Télétravail)",
    reason: "Précise la mobilité géographique utile pour les opportunités en Tunisie.",
  },
];

export const JOB_OFFERS = [
  {
    location: "Tunis centre · Hybride",
    date: "Date limite : 16/12/2026",
    title: "Stage PFE Développeur Java / Spring Boot",
    company: "Golden Horizon · Tanitjobs",
    details: "API REST Spring Boot, interface Angular ou React, SQL, tests JUnit, correction d'anomalies et Git. Stage hybride avec gratification annoncée.",
    tags: ["Java", "Spring Boot", "API REST", "SQL", "JUnit", "Git", "Angular / React"],
    match: "Projets pertinents : Smart Booking System (Spring Boot, React, PostgreSQL) et Gestion des Étudiants (Angular, PHP, JWT).",
    sourceLabel: "Consulter l'offre Tanitjobs",
    url: "https://www.tanitjobs.com/job/2074963/stagiaire-pfe-d%C3%A9veloppeur-se-java-spring-boot-h-f-3-postes-600-dt-par-mois-tunis/",
    evidenceImage: "/rakiaproj/assets/evidence/job-offers/offer-01.png",
  },
  {
    location: "Tunis · DCACM",
    date: "Date limite : 30/11/2026",
    title: "PFE — Plateforme de calcul et validation du P&L",
    company: "Tunisie Telecom · PFE-26-27-TT",
    details: "Plateforme web sécurisée, calculs financiers, workflow de validation, rôles, notifications, historique et dashboard avec Laravel, MySQL et Bootstrap.",
    tags: ["Laravel", "MySQL", "PHP", "JavaScript", "Workflow", "Gestion des droits"],
    match: "Correspondance : expérience Laravel/PHP, gestion de données, CRUD, authentification et développement de plateformes web.",
    sourceLabel: "Consulter le sujet officiel",
    url: "https://stages-tunisietelecom.jobs.hr.cloud.sap/job/Plateforme-de-calcul-et-validation-du-P%26L/1375198957/",
    evidenceImage: "/rakiaproj/assets/evidence/job-offers/offer-02.png",
  },
  {
    location: "Présentiel · Rue Lac Léman, Tunis",
    date: "Publié le 10/11/2026 · candidature avant le 31/12/2026",
    title: "Stagiaire Développeur Web — plateforme de recrutement",
    company: "CORP BY AHK TUNISIA",
    details: "Conception et développement d'une plateforme digitale pour la gestion d'événements de recrutement. Stage 5–6 mois, temps plein (40h), indemnité; attestation d'inscription 2026/2027 requise. Les technologies sont précisées dans la fiche de poste téléchargeable.",
    tags: ["Développement Web", "Plateforme digitale", "Événements recrutement"],
    match: "À analyser par rapport aux projets web et aux compétences de développement Full-Stack présentées dans le portfolio.",
    sourceLabel: "Consulter l'annonce CORP",
    url: "https://corp.tn/article-a-decouvrir/offre-de-stage-pour-etudiants-it/",
    evidenceImage: "/rakiaproj/assets/evidence/job-offers/offer-03.png",
  },
];

export const EVALUATION_RUBRIC = [
  { id: "r1", label: "Qualité professionnelle des livrables (Portfolio React, CV, Projets)", max: 30, score: "" },
  { id: "r2", label: "Démarche réflexive et esprit critique face à l'IA", max: 30, score: "" },
  { id: "r3", label: "Régularité et engagement tout au long du semestre", max: 20, score: "" },
  { id: "r4", label: "Simulation d'entretien final & auto-évaluation", max: 20, score: "" },
];

export const INTERVIEW_QA = [
  {
    q: "Comment sécurisez-vous vos APIs entre React/Angular et le Back-End ?",
    a: "J'utilise des standards adaptés à chaque stack : JWT HS256 avec Guards/Interceptor sous Angular 18 + PHP 8, Laravel Sanctum sous Laravel 13, et Spring Security JWT sous Spring Boot 3.2.",
  },
  {
    q: "Quelle difficulté technique avez-vous résolue sur Smart Booking System ?",
    a: "Pour éviter les doubles réservations simultanées, j'ai couplé la validation transactionnelle Spring Boot à des notifications WebSocket STOMP mettant à jour FullCalendar en temps réel.",
  },
  {
    q: "Comment utilisez-vous l'IA sans en dépendre aveuglément ?",
    a: "Comme un outil d'accélération et de diagnostic critique : je vérifie chaque choix d'architecture, la sécurité serveur et j'adapte les livrables aux faits réels de mon parcours.",
  },
];
