# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g ts-node nodemon
RUN npm install
RUN npm install typescript


# Copy rest of the application code
COPY . .

# Set environment variables
ENV PORT=3000

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["node ts-node", "src/index.ts"]
