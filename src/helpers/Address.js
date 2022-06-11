const axios = require('axios');

async function findAdress(reqBody) {
  const arrayAdress = [];
  const { address } = reqBody;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of address) {
    // eslint-disable-next-line no-await-in-loop
    const { data } = await axios(`https://viacep.com.br/ws/${item.cep}/json/`);
    arrayAdress.push({
      zipCode: item.cep,
      street: data.logradouro,
      complement: item.complement || data.complemento,
      district: data.bairro,
      number: item.number,
      city: data.localidade,
      state: data.uf,
      isFilial: item.isFilial,
    });
  }
  return { ...reqBody, address: arrayAdress };
}

module.exports = findAdress;
