
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/_Test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '/dist/',
    ],
};