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
    cover: "assets/formations-covers/agence-automobile.png",
    stripeLink: "#",
    previewVideo: "REMPLACER_ID_YOUTUBE",
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
    cover: "assets/formations-covers/Pack intermédiation.png",
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
    id: "premier-appartement",
    univers: "investissement",
    titre: "Acheter son premier appartement",
    soustitre: "Le guide complet pour trouver, financer et sécuriser ton premier bien immobilier",
    description: "Tout ce qu'il faut savoir pour acheter son premier appartement sans se faire piéger — de la recherche du bien jusqu'à la signature chez le notaire.",
    prix: 37,
    cover: "assets/formations-covers/Investisement 1er Appartement.png",
    stripeLink: "#",
    previewVideo: "REMPLACER_ID_YOUTUBE",
    previewLabel: "Les 3 erreurs qui font rater son premier achat immobilier",
    bestseller: false,
    contenu: [
      "Définir son projet et ses critères de recherche",
      "Comprendre le financement : prêt immobilier, PTZ, apport",
      "Comment analyser et visiter un bien efficacement",
      "Négocier le prix : techniques et arguments concrets",
      "Les étapes juridiques : offre, compromis, notaire",
      "Éviter les pièges et les mauvaises surprises"
    ],
    livrable: {
      ebook: true,
      video: "35 min",
      outils: [
        "Feuille de calcul capacité d'emprunt",
        "Simulateur de mensualités",
        "Checklist visite d'appartement",
        "Modèle d'offre d'achat",
        "Tableau de comparaison des biens"
      ],
      prompts: 6
    },
    pourQui: [
      "Tu veux acheter ton premier bien mais tu ne sais pas par où commencer",
      "Tu veux comprendre le financement sans jargon bancaire",
      "Tu veux négocier et ne pas payer trop cher"
    ],
    faq: [
      { q: "Faut-il obligatoirement un apport ?", r: "Non, il est possible d'emprunter sans apport. La formation t'explique comment monter un dossier solide dans ce cas." },
      { q: "Est-ce adapté si je suis encore locataire ?", r: "Oui, c'est même le profil idéal. La formation part de zéro et t'accompagne étape par étape." },
      { q: "Les outils de calcul sont-ils inclus ?", r: "Oui. Tu reçois des feuilles de calcul prêtes à l'emploi pour simuler ton prêt, comparer les biens et calculer ta capacité d'emprunt." }
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
  const coverHtml = formation.cover
    ? `<div class="formation-card__cover"><img src="${formation.cover}" alt="${formation.titre}" loading="lazy"></div>`
    : '';
  return `
    <a href="formation.html?id=${formation.id}" class="formation-card">
      ${coverHtml}
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
