FROM node:16.14-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . /app/

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]
