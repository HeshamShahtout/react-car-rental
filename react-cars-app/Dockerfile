FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .

RUN yarn install --production=false

COPY . .

RUN yarn build

CMD ["node", "server.js"]