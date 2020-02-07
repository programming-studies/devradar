FROM node:alpine

WORKDIR /usr/backend

COPY package*.json ./
RUN npm install

COPY . ./code

CMD ["npm", "run", "start.dev"]
