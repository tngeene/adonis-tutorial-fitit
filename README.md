# FItIt BACKEND API

> Main Adonis js code base FitIt

1. [Requirements](#requirements)
2. [Installation](#installing-on-local-machine)
3. [Build Setup](#build-setup)
4. [Official Documentation](#official-documentation)

## Requirements

1. Node.js installed
2. Text editor such as [vs code](https://code.visualstudio.com/) or sublime text
3. Git - preferrably use terminal like [gitbash](https://gitforwindows.org/) (for windows users).
4. Docker with Docker compose (NOT NECESSARY)
5. Postgres
6. A desire for knowledge and learning new things 😄

## Installing on local machine

1. Clone the repository.
2. Change directory to the location of this repository.
3. Create a `.env` file using the included `.env.example` as an example.

## Build Setup

```bash
# install dependencies
$ npm install

# generate secret key
$ node ace key:generate

#run migrations
$ node ace migration:run

# serve on localhost:3333
 $ node ace serve --watch

# build for production and launch server
$ npm build
$ npm start
```

> All API documentation can be found in the "Documentation" directory.

## Official Documentation

For detailed explanation on how things work, check out [Adonis.js docs](https://docs.adonisjs.com/guides/introduction).
