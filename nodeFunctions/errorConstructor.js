// retorne encapsulado uma resposta personalizada em sua requisição em caso de erros.
module.exports = (status, message) => { status, message };

// exemplo de uso:

const errorConstructor = require('../utils/errorConstructor');
const { CONFLICT } = require('../utils/statusCodesFunction');
const { noExist } = require('../utils/personalizedMessages');

if (!email) return errorConstructor(CONFLICT, noExist('Email'));

if (!user) throw errorConstructor(409, 'User does not exist');

// saída:
{
  status: 409,
  message: 'User does not exist',
}