module.exports = {
  preset: "ts-jest",
  setupFiles: ["./tests/unit/jest-setup.js"],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',  // <-- (1)
  },
  transformIgnorePatterns: [
    'node_modules/(?!(vuetify)/)',  // <-- (2)
  ],
};
