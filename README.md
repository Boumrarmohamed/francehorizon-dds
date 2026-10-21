# FranceHorizon – DDS

Petite application de français (FLE) pour les stagiaires, niveaux A1 et A2, sur téléphone et ordinateur.

- `index.html` : l'application des stagiaires (thèmes : le corps, les transports, les métiers, le logement, se présenter).
- `prof.html` : le tableau de bord du formateur (réponses de chaque stagiaire, erreurs, export CSV), protégé par un code.

Les réponses sont enregistrées dans Supabase (insertion seule pour les stagiaires ; lecture uniquement avec le code formateur).
Site statique, hébergé sur Vercel.
