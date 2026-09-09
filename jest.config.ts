import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Specifies that we are using ts-jest for TypeScript
  testEnvironment: "node", // Specifies the test environment (e.g., jsdom or node)
  roots: ["<rootDir>/tests"], // Specifies the root directory for Jest to look for test files
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^util/(.*)$": "<rootDir>/src/util/$1",
  },
  verbose: true, // Enables verbose output during testing
  clearMocks: true,
  coverageReporters: ["text", "html", "lcov"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/util/logger.ts",
    "!<rootDir>/src/config/**/*.ts",
    "<rootDir>/model/**/*.ts",
  ], // Specifies the files to collect coverage from
  collectCoverage: true, // Enables code coverage collection
  coverageDirectory: "coverage", // Specifies the directory to output coverage files
  coverageThreshold: {
    // Specifies the coverage threshold levels
    global: {
      functions: 80,
      statements: 75,
    },
  },
};
export default config;
