# World Cup 2026 — Simulateur & Tracker

## Configuration — 2 clés à renseigner

### 1. Clé Firebase

Ouvre le fichier `src/services/FirebaseService.js`

Remplace cette ligne :
```
DB_URL: 'METS_TON_URL_FIREBASE_ICI',
```
Par ton URL Firebase :
```
DB_URL: 'https://TON-PROJET.firebaseio.com',
```

### 2. Clé SerpApi

Ouvre le fichier `worker/worker.js`

Les clés SerpApi et Firebase se configurent via les variables d'environnement Cloudflare :
```bash
wrangler secret put SERPAPI_KEY
wrangler secret put FIREBASE_URL
```

---

## Déploiement du site (Cloudflare Pages)

1. Push le code sur GitHub
2. Va sur pages.cloudflare.com
3. Connecte ton repository GitHub
4. Déploie — ton site est en ligne sur `worldcup2026.pages.dev`

---

## Déploiement du Worker (Cloudflare Workers)

```bash
cd worker/
npm install -g wrangler
wrangler login
wrangler deploy
wrangler secret put SERPAPI_KEY
wrangler secret put FIREBASE_URL
```

## Initialisation du Worker

Une seule fois après le déploiement, appelle cette URL :
```
https://worldcup2026-sync.workers.dev/init
```

Cela :
- Récupère tous les matchs depuis SerpApi
- Stocke les scores déjà terminés dans Firebase
- Programme les synchros automatiques pour les matchs à venir

## Vérifier le statut

```
https://worldcup2026-sync.workers.dev/status
```

---

## Logique de synchronisation

- Phase de groupe : 2 synchros à 1h55 et 2h00 après le début du match
- Phase finale : 4 synchros à 1h55, 2h00, 2h30, 2h45 (pour les tirs au but)
- Avant chaque nouveau match : vérification que le match précédent est bien confirmé
- SerpApi n'est appelé que si nécessaire — économise les requêtes

## Firebase — Règles à configurer

Dans Firebase → Realtime Database → Rules :
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

## Structure du projet

```
worldcup2026/
├── index.html
├── styles/main.css
├── src/
│   ├── models/
│   │   ├── data.js
│   │   ├── Group.js
│   │   └── Knockout.js
│   ├── views/
│   │   ├── GroupView.js
│   │   ├── KnockoutView.js
│   │   └── ChampionView.js
│   ├── controllers/
│   │   ├── GroupController.js
│   │   └── KnockoutController.js
│   └── services/
│       ├── StorageService.js
│       ├── FirebaseService.js
│       └── SyncService.js
└── worker/
    ├── worker.js
    └── wrangler.toml
```
