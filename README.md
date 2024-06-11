# Évaluation finale Nestjs
 - Team : Kevin 
 - DB : POSTGRES 
 - ORM : SEQUELIZE

## Setup
### 🏗️ Initialisation
1. Clonez le repository
2. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données
* PostgreSQL, pour du relationnel

Cela vous permet de ne pas avoir à les installer sur votre machine. Pour pouvoir utiliser le SGBD contenairisé :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Lorsque vous voudrez lancer votre serveur, utilisez le script npm de votre choix : `npm run start:postgres` (ces scripts démarrent une base de données, puis lancent le serveur en watch mode)

### ORM utilisé
* [Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)

### 🧪 Tests
Les tests utilisés pour vous noter sont localisés dans le dossier `test`. Considérez-les comme les spécifications du projet, vous n'aurez d'autre choix que de les respecter à la lettre.

Pour lancer ces tests, utilisez le script npm : `npm run test:e2e:postgres` (ces scripts démarrent une base de données, puis lancent les tests e2e).
