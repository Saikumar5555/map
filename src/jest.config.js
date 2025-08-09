module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!leaflet)',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};