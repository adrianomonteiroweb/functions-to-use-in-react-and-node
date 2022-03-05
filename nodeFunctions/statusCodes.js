// nesseário instalar o módulo 'http-status-codes'.
module.exports = {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
  OK,
  UNAUTHORIZED,
} = require('http-status-codes').StatusCodes;

// insira novos status caso precisar, sempre em maiúsculo, lembre-se disso.

// exemplo de uso:

const { OK } = require('../utils/statusCodesFunction');

response.status(OK).json();
