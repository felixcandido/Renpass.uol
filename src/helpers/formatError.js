function formatError(error) {
  try {
    return {
      errors: error.details.map((detail) => ({
        name: detail.path.join(''),
        description: detail.message,
      })),
    };
  } catch {
    return null;
  }
}

module.exports = formatError;
