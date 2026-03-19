const UsersService = require('./users.class');

module.exports = function (app) {
  const db = app.get('knexClient');

  app.use('/users', new UsersService({ db }));

  const service = app.service('users');

  service.hooks({
    before: {
      all: [],
      find: [],
      get: [],
      create: [validateUser],
      update: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  });
};

function validateUser(context) {
  const { data } = context;
  if (!data.name || data.name.trim() === '') {
    throw new Error('Name is required');
  }
  if (!data.email || data.email.trim() === '') {
    throw new Error('Email is required');
  }
  if (!data.gender) {
    throw new Error('Gender is required');
  }
  return context;
}
