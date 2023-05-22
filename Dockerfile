FROM node:18.16.0-alpine as buidler
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:1.9.15-alpine
COPY --from=buidler /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]