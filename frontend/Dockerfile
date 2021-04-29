FROM node:latest
WORKDIR /data/
ARG API_URL                      
ENV API_URL=$VUE_APP_BACKEND_URL 
RUN npm
EXPOSE 8080

CMD ["npm", "serve"]