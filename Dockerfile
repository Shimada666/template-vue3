FROM node:12-slim AS build
WORKDIR /app
COPY . /app
ENV NPM_REGISTRY https://registry.npm.taobao.org
RUN yarn --registry=$NPM_REGISTRY && yarn build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]