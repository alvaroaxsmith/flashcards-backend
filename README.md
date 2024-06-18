# Flashcards Backend

This is the backend for the flashcards web application, built using NestJS. The backend uses PostgreSQL as the database.

## Table of Contents

- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Docker and Docker Compose installed
- Node.js and npm installed

### Clone the Repository

```bash
git clone https://github.com/yourusername/flashcards-backend.git
cd flashcards-backend
```

### Install Dependencies

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following content:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=yourusername
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=flashcardsdb
```

## Running the Application

### Using Docker Compose

Start the backend and database using Docker Compose:

```bash
docker-compose up --build
```

### Without Docker

1. Start the PostgreSQL database on your local machine and ensure it matches the configuration in the `.env` file.

2. Run migrations and seed data:

```bash
npm run migration:run
npm run seed:run
```

3. Start the backend:

```bash
npm run start:dev
```

## API Documentation

The API documentation is available via Swagger. Once the backend is running, you can access it at:

```
http://localhost:3000/api
```

## Testing

To run the backend tests, use:

```bash
npm run test
```

## Project Structure

- `src/app.module.ts`: Main application module.
- `src/entities`: Entity definitions.
- `src/flashcards`: Flashcards module, including controllers, services, and repositories.
- `src/seeds`: Seed scripts for database seeding.
- `src/migrations`: Database migration files.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with a descriptive message.
4. Push your changes to your fork.
5. Create a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
