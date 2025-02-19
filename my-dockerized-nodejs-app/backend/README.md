# Backend Node.js Application

This is the backend part of the Node.js application, which is built using Express.js. The application is structured to handle user authentication and management, along with serving views using Jade (Pug) templates.

## Project Structure

- **app.js**: Main entry point for the application, sets up the Express server and middleware.
- **bin/www**: Contains server startup logic, including port normalization and error handling.
- **models/user.js**: Defines the user model, likely using a database ORM or schema definition.
- **routes/**: Contains route definitions for the application.
  - **index.js**: Main routes for the application.
  - **users.js**: Routes related to user operations.
- **views/**: Contains view templates using Jade (Pug).
  - **error.jade**: Error view template.
  - **index.jade**: Main index view template.
  - **layout.jade**: Layout template for the application.
  - **login.jade**: Login view template.
  - **register.jade**: Registration view template.
- **package.json**: Configuration file for the backend application, including dependencies and scripts.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-dockerized-nodejs-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

## Docker Setup

To run the application in a Docker container, ensure you have Docker and Docker Compose installed. You can build and run the application using the following commands:

1. **Build the Docker image**:
   ```
   docker-compose build
   ```

2. **Run the application**:
   ```
   docker-compose up
   ```

## Database Initialization

The database can be initialized using the SQL commands provided in the `database/init.sql` file. Make sure to configure your database connection in the application before running the initialization script.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.