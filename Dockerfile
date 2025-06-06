# Use a modern Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your Next.js app runs on (usually 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]
