class Conflict extends Error {
  constructor(message) {
    super();
    this.status = 400;
    this.details = [
      {
        path: ['conflict'],
        message: `${message}`,
      },
    ];
  }
}

module.exports = Conflict;
