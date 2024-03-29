module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": 0,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
