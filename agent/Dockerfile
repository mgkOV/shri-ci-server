FROM node:12-alpine

RUN apk add --no-cache git

WORKDIR /usr/app

COPY ./ ./
RUN echo -e "{}" >> agent-conf.json
RUN npm ci

CMD ["npm", "start"]