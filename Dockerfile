FROM node:20-alpine
WORKDIR /srv/app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]
