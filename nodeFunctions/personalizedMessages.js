// mensagens personalizadas para montar respostas mais rápido

module.exports = {
  errorServer: 'Internal Server Error',
  exists: (exists) => `${exists} already exists`,
  notExist: (noExist) => `${noExist} does not exist`,
  invalidPasswordEmail: 'Email or password invalid',
  notFound:  (item) => `${item} not found`,
  unauthorized: 'Unauthorized'
};

// exemplo de uso:

const { exists } = require('../utils/personalizedMessages');

response.status(CONFLICT).json({ message: exists });
