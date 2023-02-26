# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /nota

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies in the container
RUN npm ci

# Copy the rest of the app's files to the container
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]