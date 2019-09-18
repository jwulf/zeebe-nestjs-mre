<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS with Zeebe

_MRE: Minimal Reproducible Example, or "Meal Ready to Eat"._

This is a fully working minimal example of the [NestJS Zeebe Connector](https://github.com/pay-k/nestjs-zeebe). Props to Dan Shapir for writing it!

## Description

[Nest](https://github.com/nestjs/nest) is a TypeScript-powered MVC framework for developing Node.js backend applications.

[Zeebe](https://zeebe.io) is a workflow engine for microservices orchestration.

You can run a Zeebe server locally using the [Zeebe Docker profiles](https://github.com/zeebe-io/zeebe-docker-compose), or by [downloading a release](https://github.com/zeebe-io/zeebe/releases).

## Installation

```bash
$ npm install
```

## Running the app

By default, the application connects to a broker running on localhost. 

To connect to a remote broker, set the `ZEEBE_ADDRESS` environment variable (and `ZEEBE_CLIENT_ID` and `ZEEBE_CLIENT_SECRET` if you are using the [Zeebe service on Camunda Cloud](https://zeebe.io/cloud/)).

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Josh Wulf](https://www.twitter.com/sitapati)
- Website - [https://zeebe.io](https://zeebe.io/)
- Slack - [Zeebe Slack](https://zeebe-slack-invite.herokuapp.com/)
- Forum - [Zeebe Forum](https://forum.zeebe.io/)