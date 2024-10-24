FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install a lightweight static file server to serve the dist folder
RUN npm install -g serve

# Expose port 2222
EXPOSE 2222

# Serve the app on port 2222
CMD ["serve", "-s", "dist", "-l", "2222"]
