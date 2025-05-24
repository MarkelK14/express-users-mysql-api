# Express Users API

A simple and efficient API REST for user CRUD operations, built with Express and MySQL. This template uses middlewares and provides a clean starting point for backend projects that need basic user management and database integration.

## Index
- [Express Users API](#express-users-api)
  - [Index](#index)
  - [Features](#features)
  - [Used Technologies](#used-technologies)
  - [Swagger Documentation](#swagger-documentation)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Configuration](#environment-configuration)
    - [Running the App](#running-the-app)
      - [Start the server](#start-the-server)
      - [Development mode](#development-mode)
    - [Project Structure](#project-structure)
    - [API Endpoints](#api-endpoints)
    - [Scripts](#scripts)
    - [Contributing](#contributing)
    - [License](#license)

## Features
- User CRUD operations (Create, Read, Update, Delete)
- Express.js API REST
- MySQL integration (database connection required)
- Modular architecture (controllers, models, routes, middlewares)
- Environment variable support via `.env`
- CORS enabled
- Error handling and 404 responses
- Nodemon for development
- OpenAPI (Swagger) documentation available
- Biome for linting and formatting

## Used Technologies
- **Node.js & Express:** To create the server and define the routes.
- **MySQL:** As the database management system.
- **dotenv:** To manage environment variables.
- **CORS:** To allow requests from different origins.
- **Nodemon:** To automatically reload the server during development.

## Swagger Documentation

You can find the OpenAPI (Swagger) documentation for this API in the [`swagger.yaml`](./swagger.yaml) file at the root of this project. This file describes all available endpoints, request/response formats, and data models for the Users API. You can visualize and interact with the API using tools like [Swagger Editor](https://editor.swagger.io/) or [Swagger UI](https://swagger.io/tools/swagger-ui/).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) database

### Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:MarkelK14/express-users-api.git
   ```
2. Change to the project directory:
   ```sh
   cd <project-name>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Environment Configuration
1. Copy the example environment file and fill in your values:
   ```sh
   cp .env.example .env
   ```
2. Edit `.env` with your database credentials and desired port. For example:
   ```env
   PORT=3000
   NODE_ENV=development
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_PORT=3306
   DB_NAME=your_database
   ```
> [!NOTE]
> The MySQL connection is handled in `src/config/db.js`. Make sure your environment variables are set correctly in your `.env` file.

### Running the App

#### Start the server

Start the server by running:
```sh
npm start
```
The server will run on the port specified in your `.env` file (default: 3000).

#### Development mode

To start the server in development mode with nodemon, which will automatically restart the server on file changes, run:
```sh
npm run dev
```

### Project Structure
```
express-users-api/
├── index.js                # Entry point
├── src/
│   ├── app.js              # Express app setup
│   ├── config/
│   │   └── db.js           # MySQL connection setup
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Database models
│   └── routes/             # API routes
├── .env.example            # Example environment variables
├── package.json            # Project metadata and scripts
├── README.md               # Project documentation
├── swagger.yaml            # OpenAPI documentation
└── ...
```

### API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|-------------------|
| GET    | /api/            | List all users    |
| GET    | /api/:userId     | Get user by ID    |
| POST   | /api/            | Create new user   |
| PUT    | /api/:userId     | Update user by ID |
| DELETE | /api/:userId     | Delete user by ID |

### Scripts
- `npm start`    - Start the server
- `npm run dev`  - Start the server in development mode with nodemon (auto-reloads on changes)
- `npm run lint` - Lint the codebase using Biome
- `npm run format` - Format the codebase using Biome

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements, bug fixes, or new features. Make sure to follow the project's code style and best practices.

### License
This project is licensed under the MIT License. See the LICENSE file for details.