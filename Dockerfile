FROM node:16-slim

# for caching optimisations
COPY package*.json /
RUN yarn install
# required to serve the react app on the live server
RUN yarn install -g serve

COPY . /app
WORKDIR /app



ENV PATH=/node_modules/.bin:$PATH
ENV PORT=80
ENV HOST=0.0.0.0
ENV BROWSER='none'

RUN npm run build

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]