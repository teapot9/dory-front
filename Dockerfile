FROM node:16
RUN mkdir /build
WORKDIR /build
COPY . .
RUN npm install
ENV NODE_ENV=production
ENTRYPOINT npm run serve