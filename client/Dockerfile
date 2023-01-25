FROM node:17-alpine

WORKDIR /project

COPY package*.json /project/

RUN ls

RUN npm config set legacy-peer-deps true

RUN apk update && apk add bash

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
