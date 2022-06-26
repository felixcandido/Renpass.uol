module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!src/models'],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['src/docs'],
  testMatch: ['**/__tests__/**/*.test.js?(x)']
};
