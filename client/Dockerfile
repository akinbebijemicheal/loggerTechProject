# Use official Node.js image as base
FROM node:14

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Serve the React application using a static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
