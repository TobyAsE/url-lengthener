FROM node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

CMD [ "npm", "start" ]