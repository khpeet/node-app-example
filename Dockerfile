FROM node:18-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
