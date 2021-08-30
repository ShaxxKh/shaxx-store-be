export default {
  clearMocks: true,
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleNameMapper: {
    "^@libs/(.*)$": "<rootDir>/libs/$1"
  },
  preset: 'ts-jest',
  rootDir: "./src", // зависит от того где тесты либо в отдельной папке "тесты" на уровне срси либо в папке "срси"
 };