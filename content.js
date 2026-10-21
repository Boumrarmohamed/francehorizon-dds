// Contenus de l'appli. Les mots avec photo viennent de words.js (window.WORDS).
// Personnes et noms : tous fictifs.

// ---------- A2 : le bon petit mot (une phrase, un trou, 2 ou 3 choix) ----------
window.GRAM = {
  corps: [
    { q: 'J’ai mal ___ tête.', o: ['à la', 'au', 'aux'], a: 'à la', img: 'tête' },
    { q: 'J’ai mal ___ ventre.', o: ['au', 'à la', 'à l’'], a: 'au', img: 'ventre' },
    { q: 'J’ai mal ___ oreille.', o: ['à l’', 'au', 'à la'], a: 'à l’', img: 'oreille' },
    { q: 'J’ai mal ___ pieds.', o: ['aux', 'au', 'à la'], a: 'aux', img: 'pied' },
    { q: 'Il a mal ___ genou.', o: ['au', 'à la', 'aux'], a: 'au', img: 'genou' },
    { q: 'Elle a mal ___ épaule.', o: ['à l’', 'à la', 'au'], a: 'à l’', img: 'épaule' },
    { q: 'Il a mal ___ dents.', o: ['aux', 'au', 'à la'], a: 'aux' },
    { q: 'J’ai mal ___ bras.', o: ['au', 'à la', 'aux'], a: 'au', img: 'bras' },
    { q: 'Je ___ malade.', o: ['suis', 'ai'], a: 'suis' },
    { q: 'J’___ de la fièvre.', o: ['ai', 'suis'], a: 'ai' },
    { q: 'Il ___ fatigué.', o: ['est', 'a'], a: 'est' },
    { q: 'Nous ___ mal au dos.', o: ['avons', 'sommes'], a: 'avons' },
  ],
  transports: [
    { q: 'Je vais au travail ___ bus.', o: ['en', 'à'], a: 'en', img: 'bus' },
    { q: 'Il va à l’école ___ pied.', o: ['à', 'en'], a: 'à' },
    { q: 'Elle va au marché ___ vélo.', o: ['à', 'en'], a: 'à', img: 'vélo' },
    { q: 'Nous allons à Paris ___ voiture.', o: ['en', 'à'], a: 'en', img: 'voiture' },
    { q: 'Je prends ___ train.', o: ['le', 'la'], a: 'le', img: 'train' },
    { q: 'Tu prends ___ trottinette ?', o: ['la', 'le'], a: 'la', img: 'trottinette' },
    { q: 'Ils voyagent ___ avion.', o: ['en', 'à'], a: 'en', img: 'avion' },
    { q: 'Je ___ le métro tous les jours.', o: ['prends', 'prend'], a: 'prends', img: 'métro' },
    { q: 'Elle ___ le tram.', o: ['prend', 'prends'], a: 'prend', img: 'tram' },
    { q: 'Il va à Cergy ___ moto.', o: ['à', 'en'], a: 'à', img: 'moto' },
  ],
  metiers: [
    { q: 'Il est boulanger. Elle est ___.', o: ['boulangère', 'boulangeuse', 'boulanger'], a: 'boulangère', img: 'boulanger' },
    { q: 'Il est serveur. Elle est ___.', o: ['serveuse', 'servrice', 'serveure'], a: 'serveuse', img: 'serveuse' },
    { q: 'Il est directeur. Elle est ___.', o: ['directrice', 'directeuse', 'directeure'], a: 'directrice' },
    { q: 'Il est infirmier. Elle est ___.', o: ['infirmière', 'infirmieuse', 'infirmier'], a: 'infirmière', img: 'infirmière' },
    { q: 'Il est mécanicien. Elle est ___.', o: ['mécanicienne', 'mécanicière', 'mécanicien'], a: 'mécanicienne', img: 'mécanicien' },
    { q: 'Il est avocat. Elle est ___.', o: ['avocate', 'avocatrice', 'avocateuse'], a: 'avocate' },
    { q: 'Il est vétérinaire. Elle est ___.', o: ['vétérinaire', 'vétérinairesse', 'vétérinairière'], a: 'vétérinaire', img: 'vétérinaire' },
    { q: 'Le coiffeur ___ les cheveux.', o: ['coupe', 'répare', 'vend'], a: 'coupe', img: 'coiffeur' },
    { q: 'Le plombier ___ les tuyaux.', o: ['répare', 'coupe', 'chante'], a: 'répare', img: 'plombier' },
    { q: 'Le facteur ___ le courrier.', o: ['apporte', 'coupe', 'cuisine'], a: 'apporte', img: 'facteur' },
    { q: 'Nous ___ à la poste.', o: ['travaillons', 'travaillez', 'travaille'], a: 'travaillons' },
    { q: 'Je ___ cuisinier.', o: ['suis', 'ai'], a: 'suis', img: 'cuisinier' },
  ],
  logement: [
    { q: 'Dans ma chambre, ___ un lit.', o: ['il y a', 'il est'], a: 'il y a', img: 'lit' },
    { q: 'Il n’y a pas ___ télé.', o: ['de', 'une'], a: 'de', img: 'télé' },
    { q: 'Il n’y a pas ___ armoire.', o: ['d’', 'de'], a: 'd’', img: 'armoire' },
    { q: 'une table → des ___', o: ['tables', 'table'], a: 'tables', img: 'table' },
    { q: 'un bureau → des ___', o: ['bureaux', 'bureaus'], a: 'bureaux', img: 'bureau' },
    { q: 'Les vêtements sont ___ l’armoire.', o: ['dans', 'sur', 'sous'], a: 'dans', img: 'armoire' },
    { q: 'Le tapis est ___ la table.', o: ['sous', 'dans', 'sur'], a: 'sous', img: 'tapis' },
    { q: 'Le lait est ___ le frigo.', o: ['dans', 'sous', 'derrière'], a: 'dans', img: 'frigo' },
    { q: 'La lampe est ___ le bureau.', o: ['sur', 'dans', 'sous'], a: 'sur', img: 'lampe' },
    { q: '___ sont les clés ? — Sur la table.', o: ['Où', 'Qui'], a: 'Où' },
    { q: 'J’habite ___ un appartement.', o: ['dans', 'sur'], a: 'dans' },
  ],
  presentation: [
    { q: 'Je ___ Karim.', o: ['m’appelle', 'suis appelle', 'appelle'], a: 'm’appelle' },
    { q: 'J’___ 35 ans.', o: ['ai', 'suis'], a: 'ai' },
    { q: 'Je ___ marié.', o: ['suis', 'ai'], a: 'suis', img: 'couple' },
    { q: 'Elle ___ deux enfants.', o: ['a', 'est'], a: 'a', img: 'famille' },
    { q: 'Je viens ___ Maroc.', o: ['du', 'de la', 'd’'], a: 'du' },
    { q: 'Je viens ___ Algérie.', o: ['d’', 'du', 'de la'], a: 'd’' },
    { q: 'Je viens ___ Syrie.', o: ['de', 'du', 'd’'], a: 'de' },
    { q: 'J’habite ___ Cergy.', o: ['à', 'en', 'au'], a: 'à' },
    { q: 'Tu ___ comment ?', o: ['t’appelles', 'appelle'], a: 't’appelles' },
    { q: 'Vous ___ quel âge ?', o: ['avez', 'êtes'], a: 'avez' },
    { q: 'Nous ___ sénégalais.', o: ['sommes', 'avons'], a: 'sommes' },
    { q: 'Ils ___ trois enfants.', o: ['ont', 'sont'], a: 'ont' },
  ],
};

// ---------- A2 : la phrase en désordre ----------
window.PHRASES = {
  corps: ['J’ai mal au ventre.', 'Elle a mal à la tête.', 'Je suis malade.', 'Il a mal aux dents.', 'Où as-tu mal ?', 'J’ai de la fièvre.'],
  transports: ['Je prends le bus.', 'Je vais au travail en voiture.', 'Il va à l’école à pied.', 'Nous prenons le métro.', 'Elle va au marché à vélo.'],
  metiers: ['Le boulanger fait le pain.', 'Elle travaille à l’hôpital.', 'Le mécanicien répare les voitures.', 'Je suis cuisinier.', 'Il travaille au garage.', 'Elle est infirmière.'],
  logement: ['Il y a un lit dans la chambre.', 'Le frigo est dans la cuisine.', 'La souris est sous la table.', 'Il n’y a pas de baignoire.', 'J’habite dans un appartement.'],
  presentation: ['Je m’appelle Karim.', 'J’ai trente ans.', 'J’habite à Pontoise.', 'Je suis marié.', 'Je viens du Mali.', 'Je parle arabe et français.', 'J’ai deux enfants.'],
};

// ---------- A2 : lectures (un texte court + questions) ----------
window.LECTURES = {
  corps: {
    titre: 'Chez le médecin',
    texte: 'Moussa ne va pas bien. Il a mal à la tête et il a de la fièvre. Il a aussi mal au ventre. Il téléphone au cabinet médical et il prend rendez-vous à 10 heures. Le médecin dit : « Vous avez la grippe. Restez à la maison trois jours et buvez beaucoup d’eau. » Ensuite, Moussa va à la pharmacie pour acheter les médicaments.',
    q: [
      { q: 'Moussa a mal où ?', o: ['à la tête et au ventre', 'aux pieds et au dos', 'aux dents'], a: 'à la tête et au ventre' },
      { q: 'Le rendez-vous est à quelle heure ?', o: ['à 10 heures', 'à 2 heures', 'à 12 heures'], a: 'à 10 heures' },
      { q: 'Qu’est-ce qu’il a ?', o: ['la grippe', 'mal aux yeux', 'un bras cassé'], a: 'la grippe' },
      { q: 'Il reste combien de jours à la maison ?', o: ['trois jours', 'un jour', 'deux semaines'], a: 'trois jours' },
      { q: 'Il achète les médicaments où ?', o: ['à la pharmacie', 'au supermarché', 'à l’hôpital'], a: 'à la pharmacie' },
      { q: 'Vrai ou faux ? Moussa a de la fièvre.', o: ['vrai', 'faux'], a: 'vrai' },
    ],
  },
  transports: {
    titre: 'Le trajet d’Amina',
    texte: 'Amina habite à Saint-Ouen-l’Aumône. Elle travaille dans un supermarché à Cergy. Le matin, elle prend le bus à 7 heures, puis elle prend le train. Le trajet dure 40 minutes. Le soir, son mari vient la chercher en voiture. Le samedi, elle va au marché à pied avec ses enfants.',
    q: [
      { q: 'Où travaille Amina ?', o: ['dans un supermarché', 'dans une école', 'à l’hôpital'], a: 'dans un supermarché' },
      { q: 'Le matin, elle prend le bus à quelle heure ?', o: ['à 7 heures', 'à 9 heures', 'à 17 heures'], a: 'à 7 heures' },
      { q: 'Après le bus, elle prend…', o: ['le train', 'le métro', 'un taxi'], a: 'le train' },
      { q: 'Le trajet dure combien de temps ?', o: ['40 minutes', '4 minutes', '4 heures'], a: '40 minutes' },
      { q: 'Le soir, elle rentre comment ?', o: ['en voiture', 'à vélo', 'en bus'], a: 'en voiture' },
      { q: 'Le samedi, elle va au marché comment ?', o: ['à pied', 'en train', 'en moto'], a: 'à pied' },
    ],
  },
  metiers: {
    titre: 'Le travail de Samir',
    texte: 'Samir est cuisinier. Il travaille dans un restaurant à Pontoise. Il commence à 10 heures et il finit à 15 heures. Il prépare les entrées et les desserts. Sa collègue Inès est serveuse : elle prend les commandes et elle apporte les plats aux clients. Le restaurant est fermé le lundi. Samir aime son travail, mais le soir il est fatigué.',
    q: [
      { q: 'Quel est le métier de Samir ?', o: ['cuisinier', 'serveur', 'boulanger'], a: 'cuisinier' },
      { q: 'Où travaille Samir ?', o: ['dans un restaurant', 'dans un garage', 'dans une école'], a: 'dans un restaurant' },
      { q: 'Il commence à quelle heure ?', o: ['à 10 heures', 'à 15 heures', 'à 8 heures'], a: 'à 10 heures' },
      { q: 'Qui est Inès ?', o: ['la serveuse', 'la cuisinière', 'la directrice'], a: 'la serveuse' },
      { q: 'Le restaurant est fermé quel jour ?', o: ['le lundi', 'le samedi', 'le dimanche'], a: 'le lundi' },
      { q: 'Vrai ou faux ? Samir n’aime pas son travail.', o: ['vrai', 'faux'], a: 'faux' },
    ],
  },
  logement: {
    titre: 'L’appartement de Fatou',
    texte: 'Je m’appelle Fatou. J’habite à Saint-Ouen-l’Aumône avec mon mari et mes deux enfants. Notre appartement est au 3e étage. Il y a trois pièces : un salon et deux chambres. Il y a aussi une petite cuisine et une salle de bain. Dans le salon, il y a un canapé, une table et quatre chaises. La télé est sur un petit meuble. Dans la salle de bain, il y a une douche et un lavabo. Il n’y a pas de baignoire. La machine à laver est dans la cuisine, à côté de la cuisinière.',
    q: [
      { q: 'Fatou habite avec qui ?', o: ['avec son mari et ses deux enfants', 'seule', 'avec ses parents'], a: 'avec son mari et ses deux enfants' },
      { q: 'L’appartement est à quel étage ?', o: ['au 3e étage', 'au rez-de-chaussée', 'au 10e étage'], a: 'au 3e étage' },
      { q: 'Il y a combien de chambres ?', o: ['deux', 'trois', 'une'], a: 'deux' },
      { q: 'Où est la télé ?', o: ['sur un petit meuble', 'sous la table', 'dans la chambre'], a: 'sur un petit meuble' },
      { q: 'Vrai ou faux ? Il y a une baignoire.', o: ['vrai', 'faux'], a: 'faux' },
      { q: 'Où est la machine à laver ?', o: ['dans la cuisine', 'dans la salle de bain', 'dans le salon'], a: 'dans la cuisine' },
    ],
  },
  presentation: {
    titre: 'Lucia se présente',
    texte: 'Bonjour ! Je m’appelle Lucia Pereira. J’ai 41 ans. Je suis brésilienne, je viens de São Paulo, au Brésil. J’habite à Osny depuis deux ans avec mon mari et ma fille. Je parle portugais, espagnol et un peu français. Au Brésil, j’étais infirmière. En France, je cherche du travail dans un hôpital. Le week-end, j’aime cuisiner et marcher au parc.',
    q: [
      { q: 'Comment elle s’appelle ?', o: ['Lucia Pereira', 'Lucia Silva', 'Laura Pereira'], a: 'Lucia Pereira' },
      { q: 'Elle a quel âge ?', o: ['41 ans', '14 ans', '31 ans'], a: '41 ans' },
      { q: 'Elle est de quelle nationalité ?', o: ['brésilienne', 'portugaise', 'espagnole'], a: 'brésilienne' },
      { q: 'Elle habite où ?', o: ['à Osny', 'à São Paulo', 'à Paris'], a: 'à Osny' },
      { q: 'Au Brésil, quel était son métier ?', o: ['infirmière', 'cuisinière', 'vendeuse'], a: 'infirmière' },
      { q: 'Vrai ou faux ? Lucia a deux enfants.', o: ['vrai', 'faux'], a: 'faux' },
    ],
  },
};

// ---------- Métiers A2 : où travaille… ? ----------
window.LIEUX = [
  { m: 'boulanger', s: 'Le boulanger travaille', a: 'à la boulangerie', o: ['à la boulangerie', 'au garage', 'à l’école'] },
  { m: 'boucher', s: 'Le boucher travaille', a: 'à la boucherie', o: ['à la boucherie', 'à la poste', 'à l’hôpital'] },
  { m: 'coiffeur', s: 'Le coiffeur travaille', a: 'au salon de coiffure', o: ['au salon de coiffure', 'au commissariat', 'à la boulangerie'] },
  { m: 'médecin', s: 'Le médecin travaille', a: 'au cabinet médical', o: ['au cabinet médical', 'au garage', 'au restaurant'] },
  { m: 'infirmière', s: 'L’infirmière travaille', a: 'à l’hôpital', o: ['à l’hôpital', 'à la boucherie', 'au magasin'] },
  { m: 'policier', s: 'Le policier travaille', a: 'au commissariat', o: ['au commissariat', 'à la boulangerie', 'au salon de coiffure'] },
  { m: 'pompier', s: 'Le pompier travaille', a: 'à la caserne', o: ['à la caserne', 'à la poste', 'au restaurant'] },
  { m: 'facteur', s: 'Le facteur travaille', a: 'à la poste', o: ['à la poste', 'à l’hôpital', 'au garage'] },
  { m: 'mécanicien', s: 'Le mécanicien travaille', a: 'au garage', o: ['au garage', 'à l’école', 'à la boucherie'] },
  { m: 'cuisinier', s: 'Le cuisinier travaille', a: 'au restaurant', o: ['au restaurant', 'au commissariat', 'à la poste'] },
  { m: 'professeur', s: 'Le professeur travaille', a: 'à l’école', o: ['à l’école', 'au garage', 'à la caserne'] },
  { m: 'caissière', s: 'La caissière travaille', a: 'au supermarché', o: ['au supermarché', 'à l’hôpital', 'à la caserne'] },
  { m: 'serveuse', s: 'La serveuse travaille', a: 'au café', o: ['au café', 'à la poste', 'au garage'] },
  { m: 'maçon', s: 'Le maçon travaille', a: 'sur le chantier', o: ['sur le chantier', 'au cabinet médical', 'à la boulangerie'] },
  { m: 'jardinier', s: 'Le jardinier travaille', a: 'au parc', o: ['au parc', 'à la poste', 'au commissariat'] },
];

// ---------- Se présenter ----------
// A1 : la question et la bonne réponse
window.QR = [
  { q: 'Comment tu t’appelles ?', a: 'Je m’appelle Ana.' },
  { q: 'Tu as quel âge ?', a: 'J’ai 30 ans.' },
  { q: 'Tu es de quelle nationalité ?', a: 'Je suis marocain.' },
  { q: 'Tu viens d’où ?', a: 'Je viens du Mali.' },
  { q: 'Tu habites où ?', a: 'J’habite à Pontoise.' },
  { q: 'Tu parles quelles langues ?', a: 'Je parle arabe et français.' },
  { q: 'Tu es marié ?', a: 'Oui, je suis marié.' },
  { q: 'Tu as des enfants ?', a: 'Oui, j’ai deux enfants.' },
  { q: 'Tu travailles ?', a: 'Non, je cherche du travail.' },
  { q: 'Quel est ton numéro de téléphone ?', a: 'C’est le 06 12 34 56 78.' },
  { q: 'Comment ça va ?', a: 'Ça va bien, merci.' },
];

// A1 : je lis la fiche
window.FICHES = [
  { photo: 'f', champs: [['Nom', 'DIALLO'], ['Prénom', 'Aminata'], ['Âge', '34 ans'], ['Nationalité', 'malienne'], ['Ville', 'Cergy'], ['Situation familiale', 'mariée'], ['Enfants', '3'], ['Profession', 'aide-soignante']],
    q: [
      { q: 'Elle s’appelle comment ?', o: ['Aminata Diallo', 'Diallo Cergy', 'Aminata Mali'], a: 'Aminata Diallo' },
      { q: 'Elle a quel âge ?', o: ['34 ans', '43 ans', '3 ans'], a: '34 ans' },
      { q: 'Elle est de quelle nationalité ?', o: ['malienne', 'marocaine', 'française'], a: 'malienne' },
      { q: 'Elle habite où ?', o: ['à Cergy', 'au Mali', 'à Paris'], a: 'à Cergy' },
      { q: 'Elle a combien d’enfants ?', o: ['3', '34', '1'], a: '3' },
      { q: 'Quel est son métier ?', o: ['aide-soignante', 'caissière', 'coiffeuse'], a: 'aide-soignante' },
    ] },
  { photo: 'm', champs: [['Nom', 'HADDAD'], ['Prénom', 'Karim'], ['Âge', '27 ans'], ['Nationalité', 'algérien'], ['Ville', 'Pontoise'], ['Situation familiale', 'célibataire'], ['Enfants', '0'], ['Profession', 'cuisinier']],
    q: [
      { q: 'Il s’appelle comment ?', o: ['Karim Haddad', 'Haddad Pontoise', 'Karim Algérie'], a: 'Karim Haddad' },
      { q: 'Il a quel âge ?', o: ['27 ans', '72 ans', '17 ans'], a: '27 ans' },
      { q: 'Il est marié ?', o: ['Non, il est célibataire.', 'Oui, il est marié.'], a: 'Non, il est célibataire.' },
      { q: 'Il est de quelle nationalité ?', o: ['algérien', 'tunisien', 'malien'], a: 'algérien' },
      { q: 'Quel est son métier ?', o: ['cuisinier', 'boulanger', 'facteur'], a: 'cuisinier' },
    ] },
];

// A2 : je remplis la fiche de Lucia (texte dans LECTURES.presentation)
window.FICHE_LUCIA = [
  { f: 'Nom', o: ['PEREIRA', 'SILVA', 'LUCIA'], a: 'PEREIRA' },
  { f: 'Prénom', o: ['Lucia', 'Laura', 'Pereira'], a: 'Lucia' },
  { f: 'Âge', o: ['41 ans', '14 ans', '2 ans'], a: '41 ans' },
  { f: 'Nationalité', o: ['brésilienne', 'portugaise', 'espagnole'], a: 'brésilienne' },
  { f: 'Ville', o: ['Osny', 'São Paulo', 'Pontoise'], a: 'Osny' },
  { f: 'Situation familiale', o: ['mariée', 'célibataire', 'divorcée'], a: 'mariée' },
  { f: 'Enfants', o: ['1', '2', '0'], a: '1' },
  { f: 'Langues', o: ['portugais, espagnol, français', 'arabe, français', 'anglais, espagnol'], a: 'portugais, espagnol, français' },
  { f: 'Profession (au Brésil)', o: ['infirmière', 'cuisinière', 'professeure'], a: 'infirmière' },
];

// A2 : les nationalités (il → elle)
window.NATS = [
  { m: 'marocain', f: 'marocaine', p: 'du Maroc' }, { m: 'algérien', f: 'algérienne', p: 'd’Algérie' }, { m: 'tunisien', f: 'tunisienne', p: 'de Tunisie' },
  { m: 'sénégalais', f: 'sénégalaise', p: 'du Sénégal' }, { m: 'malien', f: 'malienne', p: 'du Mali' }, { m: 'ivoirien', f: 'ivoirienne', p: 'de Côte d’Ivoire' },
  { m: 'guinéen', f: 'guinéenne', p: 'de Guinée' }, { m: 'mauritanien', f: 'mauritanienne', p: 'de Mauritanie' }, { m: 'camerounais', f: 'camerounaise', p: 'du Cameroun' },
  { m: 'congolais', f: 'congolaise', p: 'du Congo' }, { m: 'comorien', f: 'comorienne', p: 'des Comores' }, { m: 'égyptien', f: 'égyptienne', p: 'd’Égypte' },
  { m: 'soudanais', f: 'soudanaise', p: 'du Soudan' }, { m: 'érythréen', f: 'érythréenne', p: 'd’Érythrée' }, { m: 'éthiopien', f: 'éthiopienne', p: 'd’Éthiopie' },
  { m: 'somalien', f: 'somalienne', p: 'de Somalie' }, { m: 'tchadien', f: 'tchadienne', p: 'du Tchad' }, { m: 'nigérian', f: 'nigériane', p: 'du Nigeria' },
  { m: 'afghan', f: 'afghane', p: 'd’Afghanistan' }, { m: 'pakistanais', f: 'pakistanaise', p: 'du Pakistan' }, { m: 'bangladais', f: 'bangladaise', p: 'du Bangladesh' },
  { m: 'indien', f: 'indienne', p: 'd’Inde' }, { m: 'sri-lankais', f: 'sri-lankaise', p: 'du Sri Lanka' }, { m: 'syrien', f: 'syrienne', p: 'de Syrie' },
  { m: 'irakien', f: 'irakienne', p: 'd’Irak' }, { m: 'iranien', f: 'iranienne', p: 'd’Iran' }, { m: 'turc', f: 'turque', p: 'de Turquie' },
  { m: 'géorgien', f: 'géorgienne', p: 'de Géorgie' }, { m: 'ukrainien', f: 'ukrainienne', p: 'd’Ukraine' }, { m: 'russe', f: 'russe', p: 'de Russie' },
  { m: 'roumain', f: 'roumaine', p: 'de Roumanie' }, { m: 'moldave', f: 'moldave', p: 'de Moldavie' }, { m: 'albanais', f: 'albanaise', p: 'd’Albanie' },
  { m: 'chinois', f: 'chinoise', p: 'de Chine' }, { m: 'vietnamien', f: 'vietnamienne', p: 'du Vietnam' }, { m: 'brésilien', f: 'brésilienne', p: 'du Brésil' },
  { m: 'colombien', f: 'colombienne', p: 'de Colombie' }, { m: 'haïtien', f: 'haïtienne', p: 'd’Haïti' }, { m: 'péruvien', f: 'péruvienne', p: 'du Pérou' },
  { m: 'portugais', f: 'portugaise', p: 'du Portugal' }, { m: 'espagnol', f: 'espagnole', p: 'd’Espagne' }, { m: 'italien', f: 'italienne', p: 'd’Italie' },
  { m: 'français', f: 'française', p: 'de France' },
];
window.LANGUES = ['français', 'arabe', 'anglais', 'espagnol', 'portugais', 'turc', 'russe', 'ukrainien', 'roumain', 'tamoul', 'bengali', 'ourdou', 'hindi', 'pachto', 'dari', 'persan', 'kurde', 'tigrigna', 'amharique', 'somali', 'soninké', 'wolof', 'peul', 'bambara', 'lingala', 'berbère', 'albanais', 'géorgien', 'chinois', 'vietnamien', 'créole'];
