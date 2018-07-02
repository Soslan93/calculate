FROM node:7

WORKDIR /var/www/html
COPY package.json /var/www/html
RUN npm install
COPY . /var/www/html

#RUN apt-get update
#RUN apt-get install -y nodejs
#RUN apt-get install -y npm


EXPOSE 8082

CMD ["npm", "run", "start"]