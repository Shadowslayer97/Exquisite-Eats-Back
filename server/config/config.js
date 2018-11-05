module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": "exquisite-eats-test",
    "host": process.env.DATABASE_HOST,
    "port":5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "srirang",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
