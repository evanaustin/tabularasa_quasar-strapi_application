# Tabula Rasa: Quasar + Strapi

This is a tabula rasa (blank slate) scaffold for a new Quasar (Vue) + Strapi (Node + MongoDB) application.

Under the current configuration, `docker-compose` will run locally.

***Coming soon**: configuration for a production environment.*

## Pre-Requisites
1. Docker
2. Node

## Get Started

### Strapi
1. Initiate a new **Strapi** project:
    - `$ docker-compose up -d` (or `dc up -d` with provided alias)
2. Review diff between `/strapi` and `/strapi-config`, specifically:
    - `./api/`
    - `./config/`
    - `./extensions/user-permissions/config/`
    - `./extensions/user-permissions/controllers/`
3. Use our included API model to get up and running with basic `account` and `module` data types:
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ mv strapi-config/api/ strapi/api/`
4. Make our **Strapi** backend send an HTTP-only cookie (rather than a JWT) upon client authentication:
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ docker-compose down` (or `dc down` with provided alias)
    - `$ mv strapi-config/.env strapi/.env`
    - `$ mv strapi-config/config/ strapi/config/`
    - `$ mv strapi-config/extensions/ strapi/extensions/`
    - `$ docker-compose up -d` (or `dc up -d` with provided alias)
5. Create the first admin user at http://localhost:3000
6. From the Strapi admin dashboard (http://localhost:3000/admin/), create an initial dataset for our Quasar app:
    - at least one `user` (in Collection Types > Users)
    - at least one `account` from Collection Types > Accounts
    - at least one `module` from Collection Types > Modules
7. Install the GraphQL plugin from General > Marketplace

### Quasar
##### Install the dependencies
`$ yarn` or `$ npm install`

##### Start the app in development mode (hot-code reloading, error reporting, etc.)
`$ yarn dev` or `$ npm run dev`

##### Build the app for production
`$ yarn build` or `$ npm run build`

##### Customize the configuration
See [configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).