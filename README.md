# Flashcards Backend

This is the backend for the flashcards web application, built using NestJS. The backend uses PostgreSQL as the database.

## Table of Contents

- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Flashcards Backend Architecture Guide](#flashcards-backend-architecture-guide)
  - [Entities Layer](#entities-layer)
  - [DTOs Layer](#dtos-layer)
  - [Repositories Layer](#repositories-layer)
  - [Services Layer](#services-layer)
  - [Controllers Layer](#controllers-layer)
  - [Modules Layer](#modules-layer)
  - [Main Application Module](#main-application-module)
  - [Migrations Layer](#migrations-layer)
  - [Seeds Layer](#seeds-layer)
  - [Factories Layer](#factories-layer)
  - [Docker/Docker Compose](#dockerdocker-compose)
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

# Flashcards Backend Architecture Guide

## Detailed Explanation

### Entities Layer

Entities represent the core data structure of the application, directly mapping to the database tables. Each entity is a class decorated with `@Entity` and contains properties representing the columns of the table.

**Location**: `src/entities`

**Example**:
- `Flashcard` entity represents the flashcards in the system.
- `Deck` entity represents the collections of flashcards.

### DTOs Layer

DTOs (Data Transfer Objects) are used to define the structure of the data sent to and received from the API. They are simple classes that use decorators from the `class-validator` library to enforce data validation rules.

**Location**: `src/flashcards/dtos`

**Example**:
- `CreateFlashcardDto` is used when creating a new flashcard.
- `UpdateFlashcardDto` is used when updating an existing flashcard.

### Repositories Layer

Repositories encapsulate the data access logic, providing methods to interact with the database. They extend the TypeORM `Repository` class and can include custom query methods specific to the application's needs.

**Location**: `src/flashcards/repositories`

**Example**:
- `FlashcardsRepository` contains methods for querying and manipulating `Flashcard` entities in the database.

### Services Layer

Services contain the business logic and coordinate between repositories and controllers. They use dependency injection to access repositories and perform operations like creating, reading, updating, and deleting data.

**Location**: `src/flashcards`

**Example**:
- `FlashcardsService` handles the business logic for managing flashcards, such as creating, updating, and retrieving flashcards.

### Controllers Layer

Controllers define the API endpoints and handle HTTP requests. They use decorators from the `@nestjs/common` module to define routes and HTTP methods. Controllers delegate the actual processing to services.

**Location**: `src/flashcards`

**Example**:
- `FlashcardsController` defines endpoints for creating, updating, and retrieving flashcards.

### Modules Layer

Modules group related components together, making the application modular and easier to maintain. Each module imports necessary components and exports them if needed by other modules. Modules also configure dependency injection for their components.

**Location**: `src/flashcards`

**Example**:
- `FlashcardsModule` groups the controllers, services, and repositories related to flashcards.

### Main Application Module

The main application module (`AppModule`) initializes the application. It imports other modules and sets up global configurations like database connections using `TypeOrmModule` and environment configurations using `ConfigModule`.

**Location**: `src/app.module.ts`

### Migrations Layer

Migrations manage database schema changes, allowing you to evolve the database schema over time. Migration files are created using TypeORM CLI and define changes such as creating, altering, or dropping tables and columns.

**Location**: `src/migrations`

**Example**:
- `CreateFlashcardsTable` migration file defines the schema for the `flashcards` table.
- `CreateDecksTable` migration file defines the schema for the `decks` table.

### Seeds Layer

Seeds populate the database with initial data. Seed scripts are used to insert predefined data into the database, which is useful for setting up initial application state or for testing purposes.

**Location**: `src/seeds`

**Example**:
- `InitialSeeder` script inserts initial data into the `flashcards` and `decks` tables.

### Factories Layer

Factories are used to generate bulk data for testing or seeding. Factory scripts define how to create entities with random or predefined data, making it easier to populate the database with meaningful data for development and testing.

**Location**: `src/factories`

**Example**:
- `FlashcardFactory` defines how to create flashcards with random data.
- `DeckFactory` defines how to create decks with random data.

### Docker/Docker Compose

Docker and Docker Compose are used to containerize the application and manage dependencies. Dockerfiles define the environment and dependencies for individual services, while Docker Compose files define and run multi-container Docker applications, orchestrating the services together.

**Location**: Root directory

**Example**:
- `Dockerfile` defines the environment and dependencies for the backend service.
- `docker-compose.yml` defines the services, networks, and volumes for the application, orchestrating the backend service and the PostgreSQL database.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with a descriptive message.
4. Push your changes to your fork.
5. Create a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
