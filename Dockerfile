FROM node:alpine

WORKDIR /usr/backend

COPY package*.json ./
RUN npm install

COPY . ./code

CMD ["npm", "run", "start.dev"]

#WORKDIR /usr/backend/tmp
#
#COPY package*.json ./
#RUN npm install
#COPY . .
#
#WORKDIR /usr/backend
#RUN mv ./tmp/* . && rm -rf ./tmp
#
#CMD ["npm", "run", "start.dev"]

#WORKDIR /usr
#
#COPY package*.json ./
#RUN npm install
#
#COPY . /usr/backend
#
##RUN mv ./node_modules/ ../ && ls -la && ls -la ../
##RUN pwd && ls -la && ls -la ../
#WORKDIR /usr/backend
#RUN mv ../node_modules ./ && ls -la ../ && ls -la && pwd
#
#CMD ["npm", "run", "start.dev"]

#WORKDIR /usr/backend
#
#COPY package*.json ./
##RUN export NODE_PATH='/usr'/node_modules && npm install && ls -la /usr
##RUN export PATH=$(pwd)/node_modules/.bin:$(pwd)/bin:$PATH
#RUN npm install
#
#COPY . .
#
#CMD ["npm", "run", "start.dev"]