# Build step #1: build the React front end
FROM node:16-alpine as build
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN yarn

COPY . .
RUN yarn build

# Build step #2: build an nginx container
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
