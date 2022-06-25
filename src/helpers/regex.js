const regex = {
  cpfRegex: /\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  cepRegex: /([\d]{2})\.?([\d]{3})-?([\d]{3})$/,
  cnpjRegex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
};

module.exports = regex;
