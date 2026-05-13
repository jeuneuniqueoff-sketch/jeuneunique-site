// Catalogue des formations JeuneUnique
// Pour ajouter une formation : copier un objet et remplir les champs.
// Pour activer le paiement : remplacer stripeLink par le lien Stripe Payment Link réel.

const FORMATIONS = [
  {
    id: "agence-automobile",
    univers: "automobile",
    titre: "Créer une agence automobile",
    soustitre: "Lance ton activité de mandataire auto et génère tes premières commissions",
    description: "Tout ce qu'il faut pour créer, structurer et monétiser une activité de mandataire automobile — sans stock, sans local, sans diplôme.",
    prix: 37,
    stripeLink: "#", // Remplacer par le lien Stripe
    previewVideo: "REMPLACER_ID_YOUTUBE", // ID YouTube de ta vidéo gratuite (ex: "dQw4w9WgXcQ")
    previewLabel: "Introduction : comment fonctionne le marché mandataire",
    bestseller: true,
    contenu: [
      "Comment fonctionne le marché du mandataire auto",
      "Trouver tes premiers fournisseurs et négocier les marges",
      "Créer ton offre et te positionner sur le marché",
      "Les étapes légales pour exercer en règle",
      "Tes premiers clients : sourcing et closing",
      "Automatiser et déléguer pour scaler"
    ],
    livrable: {
      ebook: true,
      video: "25 min",
      outils: ["Modèle de contrat mandataire", "Script de closing", "Tableau de suivi commissions"],
      prompts: 8
    },
    pourQui: [
      "Tu veux créer une activité sans stock ni local",
      "Tu t'intéresses au secteur auto",
      "Tu veux des revenus commissions dès le premier mois"
    ],
    faq: [
      { q: "Faut-il un statut juridique particulier ?", r: "Non, tu peux démarrer en micro-entrepreneur. Le guide t'explique les options selon ton volume." },
      { q: "Combien peut-on gagner ?", r: "Les marges varient de 500€ à 3000€ par véhicule selon le modèle. Tout dépend de ton réseau et du volume." },
      { q: "Est-ce que le marché est saturé ?", r: "Non. La demande de mandataires est forte partout en France. La formation te montre comment te différencier." }
    ]
  },
  {
    id: "pack-intermediation",
    univers: "intermediation",
    titre: "Pack Intermédiation Complet",
    soustitre: "Sois payé pour mettre les bonnes personnes en relation",
    description: "Le guide complet pour créer une activité d'intermédiaire — sans compétence technique, sans investissement, juste avec ton réseau et ta capacité à identifier les bonnes opportunités.",
    prix: 47,
    stripeLink: "#",
    previewVideo: "REMPLACER_ID_YOUTUBE",
    previewLabel: "C'est quoi l'intermédiation ? La vidéo de 8 min qui explique tout",
    bestseller: false,
    contenu: [
      "C'est quoi l'intermédiation et pourquoi ça fonctionne",
      "Les 6 secteurs les plus rentables pour débuter",
      "Comment identifier une opportunité d'intermédiation",
      "Structurer ton deal : qui paie quoi et comment",
      "Légalité : accord de confidentialité, convention d'apporteur d'affaires",
      "Ton premier deal en 30 jours — plan d'action"
    ],
    livrable: {
      ebook: true,
      video: "30 min",
      outils: ["Convention apporteur d'affaires", "NDA template", "Tracker d'opportunités", "Email templates"],
      prompts: 12
    },
    pourQui: [
      "Tu as un réseau mais tu ne le monétises pas",
      "Tu veux créer des revenus sans produit ni service propre",
      "Tu cherches une activité à lancer en parallèle rapidement"
    ],
    faq: [
      { q: "C'est légal de faire de l'intermédiation ?", r: "Oui, avec la bonne structure. La formation t'explique exactement comment opérer en règle." },
      { q: "Faut-il avoir un grand réseau au départ ?", r: "Non. La formation montre comment identifier des opportunités même avec un petit réseau." },
      { q: "Combien peut-on espérer gagner ?", r: "Les commissions varient de 1 à 10% du deal selon le secteur. Un seul bon deal peut changer ta situation." }
    ]
  },
  {
    id: "zero-a-100k",
    univers: "investissement",
    titre: "De 0 à 100K en 5 ans",
    soustitre: "Le plan concret pour construire ton premier capital depuis zéro",
    description: "Pas de promesse de richesse rapide. Un plan réaliste, actionnable, pour quelqu'un qui part de zéro et veut atteindre 100 000€ de patrimoine en 5 ans avec un salaire normal.",
    prix: 37,
    stripeLink: "#",
    previewVideo: "REMPLACER_ID_YOUTUBE",
    previewLabel: "Pourquoi la plupart des gens n'investissent jamais — et comment briser ce cycle",
    bestseller: true,
    contenu: [
      "L'état d'esprit pour construire sur la durée",
      "Calculer son taux d'épargne réel et l'optimiser",
      "Les 4 véhicules d'investissement accessibles sans capital initial",
      "PEA, assurance-vie, SCPI : comment les utiliser vraiment",
      "Investir en bourse sans se faire brûler",
      "Le plan mois par mois sur 5 ans"
    ],
    livrable: {
      ebook: true,
      video: "28 min",
      outils: ["Calculateur d'épargne 5 ans", "Tracker de patrimoine", "Simulateur PEA"],
      prompts: 6
    },
    pourQui: [
      "Tu gagnes entre 1500€ et 3500€ net par mois",
      "Tu n'as jamais investi et tu ne sais pas par où commencer",
      "Tu veux un plan clair sans jargon financier inutile"
    ],
    faq: [
      { q: "Est-ce réellement possible sans salaire élevé ?", r: "Oui. Le plan est calibré pour un salaire médian français. L'optimisation du taux d'épargne fait la différence." },
      { q: "Est-ce qu'il faut prendre des risques importants ?", r: "Non. Le plan utilise des véhicules régulés et diversifiés. La prise de risque est progressive et maîtrisée." },
      { q: "Est-ce adapté aux étudiants ou aux personnes avec peu de revenus ?", r: "Partiellement. Le plan est optimisé pour des revenus stables. Une section est dédiée aux petits budgets." }
    ]
  },
  {
    id: "frameworks-decisions",
    univers: "mindset",
    titre: "Frameworks de Décision",
    soustitre: "Décide mieux et plus vite — les outils mentaux des entrepreneurs qui avancent",
    description: "5 frameworks concrets pour prendre de meilleures décisions professionnelles et personnelles. Moins d'hésitation, moins de regrets, plus de clarté.",
    prix: 27,
    stripeLink: "#",
    previewVideo: "REMPLACER_ID_YOUTUBE",
    previewLabel: "Le framework 10/10/10 — prendre une décision difficile en 3 minutes",
    bestseller: false,
    contenu: [
      "Pourquoi on prend de mauvaises décisions (biais cognitifs essentiels)",
      "Le framework 10/10/10 : dans 10 min, 10 mois, 10 ans",
      "La matrice risque/réversibilité pour savoir quand foncer",
      "Comment décider sous pression ou incertitude",
      "Le journal de décisions : apprendre de ses choix",
      "Exercices pratiques pour chaque framework"
    ],
    livrable: {
      ebook: true,
      video: "20 min",
      outils: ["Cartes frameworks imprimables", "Journal de décisions template"],
      prompts: 5
    },
    pourQui: [
      "Tu rumines et tu peines à décider",
      "Tu veux un système clair pour avancer sans bloquer",
      "Tu es entrepreneur ou tu veux le devenir"
    ],
    faq: [
      { q: "Ces frameworks sont-ils vraiment applicables au quotidien ?", r: "Oui, ils sont conçus pour être simples et rapides à utiliser. Pas de théorie, que du pratique." },
      { q: "Convient-il aux décisions personnelles aussi bien que pro ?", r: "Absolument. Les frameworks s'adaptent aux deux contextes avec des exemples dans chaque cas." }
    ]
  }
];

// Filtre par univers
function getFormationsByUnivers(univers) {
  if (!univers || univers === 'tous') return FORMATIONS;
  return FORMATIONS.filter(f => f.univers === univers);
}

// Récupérer une formation par ID
function getFormationById(id) {
  return FORMATIONS.find(f => f.id === id) || null;
}

// Labels des univers
const UNIVERS = [
  { id: 'tous',          label: 'Toutes',        icon: '✦' },
  { id: 'automobile',    label: 'Automobile',     icon: '🚗' },
  { id: 'intermediation',label: 'Intermédiation', icon: '🤝' },
  { id: 'investissement', label: 'Investissement', icon: '📈' },
  { id: 'mindset',       label: 'Mindset',        icon: '🧠' },
];

const BADGE_CLASS = {
  automobile:     'badge--auto',
  intermediation: 'badge--inter',
  investissement: 'badge--invest',
  mindset:        'badge--mindset',
  podcast:        'badge--podcast',
};

// Générer une carte formation HTML
function renderFormationCard(formation) {
  const badge = BADGE_CLASS[formation.univers] || '';
  const univers = UNIVERS.find(u => u.id === formation.univers);
  const hasPreview = formation.previewVideo && formation.previewVideo !== 'REMPLACER_ID_YOUTUBE';
  return `
    <a href="formation.html?id=${formation.id}" class="formation-card">
      <div class="formation-card__body">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <span class="formation-card__badge ${badge}" style="margin-bottom:0;">
            ${univers ? univers.icon : ''} ${univers ? univers.label : formation.univers}
          </span>
          ${formation.bestseller ? '<span class="tag" style="background:rgba(201,168,76,0.12);color:var(--gold);">⭐ Bestseller</span>' : ''}
          <span class="tag" style="background:rgba(52,211,153,0.12);color:#34d399;">▶ Aperçu gratuit</span>
        </div>
        <h3 class="formation-card__title">${formation.titre}</h3>
        <p class="formation-card__desc">${formation.description}</p>
        <div class="formation-card__includes">
          <span class="tag">📄 E-book PDF</span>
          <span class="tag">🎬 Vidéo ${formation.livrable.video}</span>
          <span class="tag">🤖 Outils IA</span>
        </div>
      </div>
      <div class="formation-card__footer">
        <div>
          <div class="price">${formation.prix}€</div>
          <span class="price-once">Paiement unique · Accès à vie</span>
        </div>
        <span class="btn btn--primary btn--sm">Obtenir <span class="arrow">→</span></span>
      </div>
    </a>
  `;
}
