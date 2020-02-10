FROM node:alpine

WORKDIR /usr/backend

COPY package*.json ./
RUN npm install

RUN ln -sf ./code/package.json ./ && ln -sf ./code/package-lock.json ./

CMD ["npm", "run", "start.dev"]
