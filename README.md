# Tabula Rasa: Quasar + Strapi

This is a tabula rasa (blank slate) scaffold for a new Quasar (Vue) + Strapi (Node + MongoDB) application.

By default, `docker-compose` will run locally. To configure your production environment, use docker-compose.prod.yaml instead.

## Pre-Requisites
1. Docker
2. Node

## Get Started

#### Strapi
1. Initiate a new **Strapi** project
    - `$ docker-compose up -d`
2. Review diff between /strapi and /strapi-config, specifically:
    - `./api/`
    - `./extensions/user-permissions/config/*`
    - `./extensions/user-permissions/controllers/*`
3. Use the included API model in `/strapi-config` to get up and running with `account` and `module` data types.
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ cp strapi-config/api/ strapi/api/`
*Note: while this step is not required to get **Strapi** working (it should already be running), it is however required to get our as-is **Quasar** app working).*
4. Make our **Strapi** backend send an HTTP-only cookie (rather than a JWT) upon client authentication.
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ cp strapi-config/extensions/user-permissions/config/ strapi/extensions/user-permissions/controllers/`
    - `$ cp strapi-config/extensions/user-permissions/config/ strapi/extensions/user-permissions/controllers/`
*Note: while this step is not required to get **Strapi** working (it should already be running), it is however required to get our as-is **Quasar** app working).*
