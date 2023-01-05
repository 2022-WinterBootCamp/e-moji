FROM node:14.19.1 as build

WORKDIR /frontend

RUN  npm install

COPY . /frontend
RUN npm run build