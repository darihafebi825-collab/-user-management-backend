# User Management Backend

FeathersJS REST API with PostgreSQL database for User Management Dashboard.

## Prerequisites
- Node.js v16+
- PostgreSQL installed and running

## Installation

### 1. Clone the repository
\```bash
git clone https://github.com/darihafebi825-collab/-user-management-backend.git
cd user-management-backend
\```

### 2. Install dependencies
\```bash
npm install
\```

### 3. Configure environment
Create a `.env` file in the root folder:
\```
PORT=3030
DB_HOST=localhost
DB_PORT=5433
DB_NAME=user_management
DB_USER=postgres
DB_PASSWORD=your_password
\```

### 4. Create the database
\```bash
psql -U postgres -p 5433 -c "CREATE DATABASE user_management;"
\```

### 5. Run migrations
\```bash
npm run migrate
\```

### 6. Start the server
\```bash
npm run dev
\```
Server runs at: `http://localhost:3030`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all active users |
| POST | /users | Create a new user |
| PATCH | /users/:id | Update or soft delete user |

## Tech Stack
- Node.js
- FeathersJS
- Knex.js
- PostgreSQL
## License
This project was built as part of an internship task at **Tranzmeo IT Solutions Pvt. Ltd.**  
© 2026 Tranzmeo IT Solutions Pvt. Ltd. All rights reserved.
