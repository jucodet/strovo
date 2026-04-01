<!-- Improved compatibility of Back to top links -->
<a id="readme-top"></a>

# Strovo

API Fastify + MongoDB et interface React pour la gestion de formations (parcours « courses »).

**Signaler un bug** · [Issues](https://github.com/jucodet/strovo/issues)

[![Issues][issues-shield]][issues-url]
[![Licence][license-shield]][license-url]

## Table des matières

1. [À propos du projet](#à-propos-du-projet)
    - [Construit avec](#construit-avec)
2. [Démarrage](#démarrage)
    - [Prérequis](#prérequis)
    - [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Feuille de route](#feuille-de-route)
5. [Contribution](#contribution)
6. [Licence](#licence)
7. [Contact](#contact)
8. [Remerciements](#remerciements)

## À propos du projet

Strovo est organisé en **monorepo** avec deux parties :

- **web-backend** — serveur HTTP [Fastify](https://www.fastify.io/) connecté à **MongoDB** (plugin `fastify-mongodb`), exposition de routes REST simples.
- **web-frontend** — application **React 18** générée avec [Create React App](https://create-react-app.dev/) (`react-scripts`).

Capture d’écran ou schéma d’architecture : à ajouter ici (`images/` à la racine ou liens externes).

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

### Construit avec

- [Node.js](https://nodejs.org/) — Volta recommandée pour le backend : Node **16.14.2**, npm **8.5.5** (voir [`web-backend/package.json`](web-backend/package.json))
- [Fastify](https://www.fastify.io/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Démarrage

Les étapes ci-dessous permettent d’obtenir une copie locale fonctionnelle (base de données + API + frontend).

### Prérequis

- **Node.js** et **npm** (versions compatibles avec le backend : voir Volta dans `web-backend/package.json`)
- **Docker** et **Docker Compose** (optionnel mais recommandé pour MongoDB et mongo-express)

### Installation

1. **Cloner le dépôt**

   ```sh
   git clone https://github.com/jucodet/strovo.git
   cd strovo
   ```

2. **Base MongoDB (Docker)**

   Depuis [`web-backend/`](web-backend/) :

   ```sh
   cd web-backend
   ```

   Définir les identifiants admin attendus par `docker-compose.yml`, puis lancer les services :

   ```sh
   set MONGO_ADMIN_USERNAME=votre_user
   set MONGO_ADMIN_PASSWORD=votre_mot_de_passe
   docker compose up -d
   ```

   Sous PowerShell, utilisez `$env:MONGO_ADMIN_USERNAME=...` si besoin. Avec une instance Mongo **avec authentification**, adaptez `MONGO_DB_URL` (inclure utilisateur, mot de passe et `authSource=admin` si vous utilisez le compte root du conteneur).

   - **MongoDB** : port **27017**
   - **mongo-express** (interface web) : **8081**

3. **Backend — dépendances et variables d’environnement**

   Toujours dans `web-backend/` :

   ```sh
   npm install
   ```

   Créer un fichier **`.env`** (non versionné, voir `.gitignore`) avec par exemple :

   | Variable       | Description | Exemple |
   | -------------- | ----------- | ------- |
   | `PORT`         | Port d’écoute de l’API | `3001` (voir ci-dessous) |
   | `LOG_LEVEL`    | Niveau de log Pino | `info`, `debug`, `error` |
   | `MONGO_DB_URL` | URI MongoDB | `mongodb://localhost:27017/courses` |

   Valeur par défaut dans le code si absente : `mongodb://localhost:27017/courses`.

4. **Frontend**

   ```sh
   cd ../web-frontend
   npm install
   ```

**Conflit de ports** : par défaut, l’API utilise le port **3000** (`PORT`) et Create React App aussi. Pour lancer les deux en local, fixez par exemple `PORT=3001` dans `web-backend/.env` pour l’API, et laissez le frontend sur **3000**, ou acceptez le port alternatif proposé par le script React.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Utilisation

### Backend

Depuis `web-backend/` :

```sh
npm start
```

Développement avec rechargement automatique :

```sh
npm run watch
```

Vérification du formatage (Prettier) :

```sh
npm run prettier
```

**Routes actuelles** (voir [`web-backend/src/plugins/routes-plugin.js`](web-backend/src/plugins/routes-plugin.js)) :

| Méthode | Chemin    | Description |
| ------- | --------- | ----------- |
| `GET`   | `/`       | Réponse JSON de test (`hello: world`) |
| `GET`   | `/courses`| Liste des documents de la collection `courses` |

Exemples :

```sh
curl http://localhost:3001/
curl http://localhost:3001/courses
```

(Remplacez le port par celui défini dans votre fichier `web-backend/.env`.)

### Frontend

Depuis `web-frontend/` :

```sh
npm start
```

Build de production :

```sh
npm run build
```

Tests (Jest / Testing Library) :

```sh
npm test
```

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Feuille de route

- [ ] Tests automatisés pour le backend (remplacer le script `test` factice)
- [ ] Fichier `.env.example` à la racine de `web-backend` pour documenter les variables sans secrets
- [ ] Harmoniser ports / proxy CRA vers l’API en développement
- [ ] CI (lint, tests, build)
- [ ] Écran frontend connecté aux endpoints `/courses`

Voir les [issues ouvertes](https://github.com/jucodet/strovo/issues) pour la liste détaillée des idées et bugs.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Contribution

Les contributions sont les bienvenues.

1. Forker le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Committer les changements (`git commit -m 'Ajouter une amélioration'`)
4. Pousser la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Licence

Ce dépôt n’est **pas** distribué sous une licence open source standard : le backend déclare `"license": "UNLICENSED"` dans [`web-backend/package.json`](web-backend/package.json). Tous droits réservés sauf mention contraire.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Contact

**Julien Codet** — dépôt : [https://github.com/jucodet/strovo](https://github.com/jucodet/strovo)

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Remerciements

- Structure et idées pour ce README : [Best-README-Template](https://github.com/jucodet/Best-README-Template) (fork de [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template))
- Choix de licence : [Choose an Open Source License](https://choosealicense.com/)

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- Liens des badges -->
[issues-shield]: https://img.shields.io/github/issues/jucodet/strovo.svg?style=for-the-badge
[issues-url]: https://github.com/jucodet/strovo/issues
[license-shield]: https://img.shields.io/badge/licence-UNLICENSED-lightgrey?style=for-the-badge
[license-url]: https://github.com/jucodet/strovo/blob/main/web-backend/package.json
