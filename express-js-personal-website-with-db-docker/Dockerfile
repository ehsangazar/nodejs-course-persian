FROM node:current-alpine

RUN mkdir -p /app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE 3000 9229

WORKDIR /app

HEALTHCHECK --interval=15s --timeout=10s --retries=5 --start-period=30s CMD node ./healthcheck.js

COPY package*.json .
RUN chmod 777 -R /app
RUN npm install --quiet --no-progress && npm cache clean --force

COPY . .

CMD ["node", "index.js"]