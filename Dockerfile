# Build step #1: build the React front end
FROM node:16-alpine as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn

COPY . .
EXPOSE 5173
CMD ["yarn","dev"]
