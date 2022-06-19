class BadRequest extends Error {
  constructor(message) {
    super();
    this.status = 400;
    this.details = [
      {
        path: ['Bad Request'],
        message: `${message}`,
      },
    ];
  }
}

module.exports = BadRequest;
