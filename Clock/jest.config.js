module.exports = {
  verbose: true,
  projects: ['<rootDir>'],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__',
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
