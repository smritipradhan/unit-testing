module.exports = {
  rootDir: "./",
  moduleFileExtensions: ["js", "jsx"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/styleMock.js",
    "^axios$": require.resolve("axios"),
  },
  testEnvironment: "jsdom",
};
