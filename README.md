
![bagde](https://github.com/kwetterr/kwat-service/actions/workflows/build.yml/badge.svg)
![bagde](https://github.com/kwetterr/kwat-service/actions/workflows/docker-publish.yml/badge.svg)

# kwat-service
Retrieves kwats filtered by user, @mentions, trends and personal newsfeed.

## Run
```zsh
node server.js
```

## Build and run with Docker
```zsh
docker build -t kwat-service .
```

```zsh
docker run -p 3000:3000 --name kwat-service-app kwat-service
```


Sources:
- [Node CRUD + Mongo](https://medium.com/@nmayurashok/crud-app-using-node-js-express-mongodb-61529ce12fba)
- [Dockerize NodeJS](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Build NodeJS with Github Actions ](https://dev.to/chathula/how-to-set-up-a-ci-cd-pipeline-for-a-node-js-app-with-github-actions-32h0)
