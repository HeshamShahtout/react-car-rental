FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .

RUN yarn install --production=false

COPY . .

CMD ["node", "server.js"]