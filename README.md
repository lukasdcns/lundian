<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

FR - Projet réalisé pendant mes études. Il s'agit d'une API pour la gestion d'un blog.

EN - Project carried out during my studies. It's an API for managing a blog.

## Run project with docker

1. Clone the repository
2. Go to the root of the project
3. Run the following command: `docker-compose up -d` to install the DB
(The first time it will take a little longer because it will download the images) 
4. Run the following command: `npm install` to install the dependencies
5. Run the following command: `npx prisma db seed ` to seed the DB
6. Run the following command: `npm run start:dev` to start the project
7. Go to `http://localhost:3000/api` to see the documentation


## Used technologies
1. Prisma (ORM)
2. NestJS (Framework)
3. Docker (Containerization)
4. PostgreSQL (Database)
5. Swagger (Documentation)
