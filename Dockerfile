FROM node AS BUILDENV
WORKDIR /app
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force && npm prune && npm install && ln -s /usr/bin/nodejs /usr/bin/node && npm run build
