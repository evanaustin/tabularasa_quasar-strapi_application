# Tabula Rasa: Quasar + Strapi

This is a tabula rasa scaffold for a new Quasar (Vue) + Strapi (Node + MongoDB) application.

The current configuration is for local development, but may be modified for any environment.

***Coming soon**: configuration for a production environment.*

## Most recent successful build:
- 12:35PM EDT 12/30/2020
- macOS 11.1 on Apple M1
- Docker Desktop Preview (Docker Engine v20.10.0 on darwin/arm64)

## Pre-Requisites
1. Docker
2. Node

## Recommendations
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/global/)
- [NVM] (https://github.com/nvm-sh/nvm)
- [Vue Devtools](https://github.com/vuejs/vue-devtools)
- [Apollo Client Devtools](https://www.apollographql.com/docs/react/development-testing/developer-tooling/)

## Get Started

### Strapi
1. Initiate a new **Strapi** project:
    - `$ docker-compose up -d` (or `dc up -d` with the provided alias) to build the project
    - `$ docker-compose logs --tail=all -f | grep strapi` (or `log -s` with the provided alias) to watch the log as Strapi builds for the first time (it will take a few minutes)
2. Once our new `/strapi` directory is fully built (watch the logs), we're going to stop our new Docker services:
    - `$ docker-compose down` (or `dc down` with provided alias)
    - Note: for future configuration changes, you won't necessarily need to `$ docker-compose down`. Our Strapi server will gracefully restart on file change (based off our specifications in `docker-compose.yaml`). However, we're doing a hard shut down here due to the extent of the changes we're making, and because we don't want the server running until our changes are complete.
3. Locate your `ADMIN_JWT_SECRET` in `/strapi/config/server.js` and copy the value to `/strapi-config/.env`
4. Review diff between `/strapi` and `/strapi-config`, specifically:
    - `./api/`
    - `./config/`
    - `./extensions/user-permissions/config/`
    - `./extensions/user-permissions/controllers/`
5. Use the included API model to get up and running with basic `account` and `module` data types:
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ rsync -a strapi-config/api/ strapi/api`
6. Make **Strapi** send an HTTP-only cookie (rather than a JWT) upon client authentication:
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ cp strapi-config/.env strapi/`
    - `$ rsync -a strapi-config/config/ strapi/config`
    - `$ rsync -a strapi-config/extensions/ strapi/extensions`
    - *optional*: `$ rm -r strapi-config`
    - `$ docker-compose up -d` (or `dc up -d` with provided alias)
7. Check out the **Strapi** dashboard and create the first admin user at http://localhost:3000/admin
8. From the dashboard, create an initial dataset for our Quasar app:
    - at least one `user` (in Collection Types > Users)
    - at least one `account` (in Collection Types > Accounts)
    - at least one `module` (in Collection Types > Modules)
9. Install the GraphQL plugin (in General > Marketplace)

### Quasar
##### Install the dependencies
`$ yarn` or `$ npm install`

##### Start the app in development mode (hot-code reloading, error reporting, etc.)
`$ yarn dev` or `$ npm run dev`

##### Build the app for production
`$ yarn build` or `$ npm run build`

##### Customize the configuration
See [configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Notes
This tabula rasa project was compiled from a number of helpful resources, including:
- [quasar.dev](https://www.quasar.dev)
- [strapi.io](https://www.strapi.io)
- https://strapi.io/blog/how-to-run-a-strapi-dev-stack-with-docker-compose
- https://talke.dev/strapi-user-permissions-jwt-cookies
- https://dev.to/n_tepluhina/apollo-state-management-in-vue-application-8k0
- https://dev.to/quasar/quasar-and-apollo-client-state-without-vuex-2iii
