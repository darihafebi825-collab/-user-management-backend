require('dotenv').config();
const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const cors = require('cors');
const knex = require('knex');
const usersService = require('./services/users/users.service');

const app = express(feathers());

// Database connecting
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5433,
    database: 'user_management',
    user: 'postgres',
    password: 'Ask@1970'
  }
});


app.set('knexClient', db);

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure REST transport
app.configure(express.rest());

// Register services
app.configure(usersService);

// Error handler
app.use(express.errorHandler());

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`FeathersJS server running on http://localhost:${PORT}`);
});

module.exports = app;
