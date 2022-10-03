const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '@/icons/(.*)$': '<rootDir>/src/icons/$1',
    '@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '@/types/(.*)$': '<rootDir>/src/types/$1',
    '@/modules/(.*)$': '<rootDir>/src/modules/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
