FROM node:18 AS BUILDENV
WORKDIR /app/
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force && npm prune && npm install && ln -s /usr/bin/nodejs /usr/bin/node && npm run build && rm .npmrc


FROM nginx:1.20.2
COPY --from=BUILDENV /app/ttp-ui/build/ /usr/share/nginx/html/ttp-ui
RUN mkdir /usr/share/nginx/html/ttp-ui/globalConfig
COPY nginx.conf /etc/nginx/conf.d/default.conf
