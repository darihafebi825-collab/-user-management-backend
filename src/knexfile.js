module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'user_management',
      user: 'postgres',
      password: 'Ask@1970'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
