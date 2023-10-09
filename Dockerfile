FROM node:14

WORKDIR /app

COPY package*.json ./
COPY app.js ./
COPY public/ ./public/

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
