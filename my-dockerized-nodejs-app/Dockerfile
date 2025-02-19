FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for backend
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY backend/ .

# Copy frontend files
COPY frontend/ ./frontend

# Copy database initialization script
COPY database/init.sql ./database

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]