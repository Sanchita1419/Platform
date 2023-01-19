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






# FROM node:17-alpine
# WORKDIR /app
# COPY package.json
# RUN npm install
# COPY ..
# EXPOSE 3000
# CMD ["npm", "start"]






# Host UI on MFGPU
# subscription page-> no. of services from api
#                     event ??
# Install LLE on nvdia --- scaling up
