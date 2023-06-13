FROM node:latest
WORKDIR /Meschat_front

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]