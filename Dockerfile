FROM node:18 AS BUILDENV
WORKDIR /app/ttp-ui/
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force && npm prune && npm install && ln -s /usr/bin/nodejs /usr/bin/node && npm run build && rm .npmrc

FROM nginx:1.20.2
COPY --from=BUILDENV /app/ttp-ui/build/ /usr/share/nginx/html/ttp-ui
COPY --from=BUILDENV /app/ttp-ui/ttpui_entrypoint.sh /docker-entrypoint.d
RUN chmod +x /docker-entrypoint.d/ttpui_entrypoint.sh
RUN mkdir -p /usr/share/nginx/html/ttp-ui/globalConfig
RUN true
COPY nginx.conf /etc/nginx/conf.d/default.conf
