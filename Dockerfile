FROM node:22-alpine
WORKDIR /srv/app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
