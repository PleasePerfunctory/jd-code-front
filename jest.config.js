module.exports = {
  testEnvironment: "jodom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/**/*.spec.js", "**/__tests__/**/*.spec.hs"],
  moduleNameMapper: {
    "^main(.*)$": "<rootDir>/src$1",
  },
};
