module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ["node_modules", "dist", ".eslintrc.js", "jest.config.js"],
  plugins: ["@typescript-eslint/eslint-plugin", "import-helpers"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "max-len": ["error", { code: 100, ignoreStrings: true }],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "type",
          ["module", "/^@/"],
          [
            "/^@/shared/domain/",
            "/^@/shared/application/",
            "/^@/shared/infra/",
            "/^@/shared/presentation/",
            "/^@/shared/main/",
            "/^@/domain/",
            "/^@/application/",
            "/^@/infra/",
            "/^@/presentation/",
            "/^@/main/",
          ],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "desc", caseInsensitive: false },
      },
    ],
  },
};
