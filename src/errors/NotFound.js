class NotFound extends Error {
  constructor(message) {
    super();
    this.status = 404;
    this.details = [
      {
        path: ['Not Found'],
        message: `${message} Not Found`
      }
    ];
  }
}

module.exports = NotFound;
