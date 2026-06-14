# World Cup 2026 — Simulateur & Tracker

Application web pour suivre en temps réel la Coupe du Monde 2026, simuler les matchs pas encore joués et voir comment votre équipe favorite peut remporter le titre.

## Description

Ce projet permet à chaque visiteur de :

- **Suivre les vrais résultats** synchronisés automatiquement depuis Google — les scores officiels apparaissent en vert et ne peuvent pas être modifiés
- **Simuler les matchs pas encore joués** pour voir comment son équipe préférée peut passer au tour suivant
- **Visualiser le tableau éliminatoire complet** — 16es, 8es, Quarts, Demies, Finale
- **Calculer automatiquement les meilleurs 3èmes** qui se qualifient pour la phase éliminatoire

Les simulations de chaque visiteur sont privées et stockées uniquement dans son navigateur. Seuls les scores officiels récupérés automatiquement sont partagés entre tous les visiteurs.

---

## Configuration

### 1. Firebase — URL de la base de données

Ouvre le fichier `src/services/FirebaseService.js` et ajoute l'adresse de votre Firebase à la ligne `DB_URL` :

```javascript
DB_URL: 'https://VOTRE-PROJET.firebaseio.com',
```

### 2. SerpApi + Firebase — Clés secrètes du Worker

Ces clés se configurent via le terminal après le déploiement du Worker :

```bash
wrangler secret put SERPAPI_KEY
# → colle votre clé SerpApi → Enter

wrangler secret put FIREBASE_URL
# → colle votre URL Firebase → Enter
```

---

## Déploiement

### Site (Cloudflare Pages)

1. Push le code sur GitHub
2. Va sur **pages.cloudflare.com**
3. Connecte ton repository GitHub
4. Clique Deploy — le site est en ligne automatiquement

### Worker de synchronisation (Cloudflare Workers)

```bash
cd worker/
npm install -g wrangler
wrangler login
wrangler deploy
wrangler secret put SERPAPI_KEY
wrangler secret put FIREBASE_URL
```

### Initialisation — une seule fois

Après le déploiement du Worker, appelle cette URL dans ton navigateur :

```
https://worldcup2026-sync.workers.dev/init
```

Cela récupère tous les matchs depuis SerpApi, stocke les scores déjà terminés dans Firebase et programme les synchros automatiques pour les matchs à venir.

### Vérifier le statut

```
https://worldcup2026-sync.workers.dev/status
```

---

## Logique de synchronisation

Le Worker tourne toutes les 2 minutes mais n'appelle SerpApi que lorsque c'est nécessaire :

- **Phase de groupe** — 2 synchros à 1h55 et 2h05 après le début du match
- **Phase finale** — 4 synchros à 1h55, 2h05, 2h30, 2h45 pour couvrir les prolongations et les tirs au but
- **Avant chaque nouveau match** — vérification que le match précédent est bien confirmé
- **Score changé seulement** — Firebase n'est mis à jour que si le score a changé, ce qui économise les requêtes SerpApi

---

## Firebase — Règles de sécurité

Dans **Firebase → Realtime Database → Rules**, copie ces règles et clique Publier :

```json
{
  "rules": {
    ".read": true,
    ".write": false,
    "officialScores": { ".write": true },
    "syncSchedule":   { ".write": true }
  }
}
```

---

## Stack technique

| Composant | Technologie |
|---|---|
| Frontend | HTML / CSS / JavaScript vanilla |
| Base de données | Firebase Realtime Database |
| Scores en temps réel | SerpApi (Google Sports Results) |
| Synchronisation | Cloudflare Workers + Cron |
| Hébergement | Cloudflare Pages |

---

## Structure du projet

```
worldcup2026/
├── index.html
├── styles/
│   └── main.css
├── src/
│   ├── models/
│   │   ├── data.js          — équipes, groupes, constantes
│   │   ├── Group.js         — classements, meilleurs 3èmes
│   │   └── Knockout.js      — bracket, propagation, tirs au but
│   ├── views/
│   │   ├── GroupView.js     — affichage groupes et matchs
│   │   ├── KnockoutView.js  — affichage bracket éliminatoire
│   │   └── ChampionView.js  — affichage du champion
│   ├── controllers/
│   │   ├── GroupController.js    — actions phase de groupe
│   │   └── KnockoutController.js — actions phase éliminatoire
│   └── services/
│       ├── StorageService.js  — sauvegarde locale (simulation privée)
│       ├── FirebaseService.js — lecture des scores officiels
│       └── SyncService.js     — fusion scores officiels + simulation
└── worker/
    ├── worker.js      — synchronisation SerpApi → Firebase
    └── wrangler.toml  — configuration Cloudflare Workers
```

---

## Équipes participantes

| Groupe | Équipes |
|---|---|
| A | Mexique · Afrique du Sud · Corée du Sud · Tchéquie |
| B | Canada · Bosnie-Herzégovine · Qatar · Suisse |
| C | Brésil · Maroc · Haïti · Écosse |
| D | États-Unis · Paraguay · Australie · Turquie |
| E | Allemagne · Curaçao · Côte d'Ivoire · Équateur |
| F | Pays-Bas · Japon · Suède · Tunisie |
| G | Belgique · Égypte · Iran · Nouvelle-Zélande |
| H | Espagne · Cap-Vert · Arabie Saoudite · Uruguay |
| I | France · Sénégal · Norvège · Irak |
| J | Argentine · Algérie · Autriche · Jordanie |
| K | Portugal · RD Congo · Ouzbékistan · Colombie |
| L | Angleterre · Croatie · Ghana · Panama |