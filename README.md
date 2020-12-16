# Tabula Rasa: Quasar + Strapi

This is a tabula rasa (blank slate) scaffold for a new Quasar (Vue) + Strapi (Node + MongoDB) application.

Under the current configuration, `docker-compose` will run locally.

***Coming soon**: configuration for a production environment.*

## Pre-Requisites
1. Docker
2. Node

## Get Started

### Quasar
*Section forthcoming...*

### Strapi
1. Initiate a new **Strapi** project
    - `$ docker-compose up -d` (or `dc up -d` with provided alias)
2. Review diff between /strapi and /strapi-config, specifically:
    - `./api/`
    - `./config/`
    - `./extensions/user-permissions/config/`
    - `./extensions/user-permissions/controllers/`
3. Use the included API model in `/strapi-config` to get up and running with `account` and `module` data types. *Note: while this step is not required to get **Strapi** working (it should already be running), it is however required to get our as-is **Quasar** app working).*
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ mv strapi-config/api/ strapi/api/`
4. Make our **Strapi** backend send an HTTP-only cookie (rather than a JWT) upon client authentication. *Note: while this step is not required to get **Strapi** working (it should already be running), it is however required to get our as-is **Quasar** app working).*
    - `$ pwd` : `tabularasa_quasar-strapi`
    - `$ docker-compose down` (or `dc down` with provided alias)
    - `$ mv strapi-config/.env strapi/.env`
    - `$ mv strapi-config/config/ strapi/config/`
    - `$ mv strapi-config/extensions/ strapi/extensions/`
    - `$ docker-compose up -d` (or `dc up -d` with provided alias)
