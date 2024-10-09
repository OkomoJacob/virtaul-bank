FROM node:22-alpine

# Setup the working directory in th container
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all the content of the loacl drectory to the working directory
COPY . .

# EXPOSE 3000

# Start the app in development mode
CMD [ "npm", "start" ]