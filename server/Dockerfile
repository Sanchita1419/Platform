# FROM node:16
# WORKDIR /project
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD ["node", "index.js"]

FROM node:16

WORKDIR /project

COPY package*.json /project/

RUN npm install

# COPY . .

EXPOSE 5000

CMD ["node", "index.js"]