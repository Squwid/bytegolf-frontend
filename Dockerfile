# Stage 1 - Build Frontend
FROM node:14.16.1-alpine3.12 as build

COPY . .

RUN npm install --silent
RUN npm run build

# Stage 2 - Host Frontend
FROM nginx:alpine
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /build/ /usr/share/nginx/html


ENV PORT 8080
ENV REACT_APP_BACKEND_URI=https://dev-api.byte.golf
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]