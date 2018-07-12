FROM node:9.11.2-alpine

WORKDIR /usr/workspace/ncms

RUN npm install -g nodemon
RUN npm install -g concurrently

COPY package.json .
RUN npm install --quiet

COPY . .