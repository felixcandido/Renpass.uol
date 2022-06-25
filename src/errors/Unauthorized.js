class Unauthorized extends Error {
  constructor(message) {
    super();
    this.status = 401;
    this.details = [
      {
        path: ['Unauthorized'],
        message: `${message}`
      }
    ];
  }
}

module.exports = Unauthorized;
