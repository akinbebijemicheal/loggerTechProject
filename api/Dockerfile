# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g ts-node
RUN npm install

# Copy rest of the application code
COPY . .

# Set environment variables
ENV PORT=8080

# Expose port
EXPOSE 8080

# Command to run the application
CMD ["ts-node/esm", "./src/index.ts"]
