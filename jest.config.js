module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!src/models'],
  coverageProvider: 'v8',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
  ],
};
