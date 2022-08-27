module.exports = {
  schema: "./schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/.next/**",
  ],
  src: ".",
  language: "typescript",
};
