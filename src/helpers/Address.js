/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const axios = require('axios');
const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');

async function findAdress(reqBody) {
  const arrayAdress = [];
  const { address } = reqBody;
  for (const item of address) {
    const { data } = await axios(`https://viacep.com.br/ws/${item.cep}/json/`).catch(() => {
      throw new BadRequest('The field cep is invalid');
    });
    if (data.erro) throw new NotFound(`cep: ${item.cep}`);
    arrayAdress.push({
      zipCode: item.cep,
      street: data.logradouro,
      complement: item.complement || data.complemento,
      district: data.bairro,
      number: item.number,
      city: data.localidade,
      state: data.uf,
      isFilial: item.isFilial
    });
  }
  return { ...reqBody, address: arrayAdress };
}

module.exports = findAdress;
