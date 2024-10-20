FROM node:20.11.1 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.24.0 AS final
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
