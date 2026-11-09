import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import vue from "eslint-plugin-vue"
import globals from "globals"
import vueParser from "vue-eslint-parser"

export default [
  {
    ignores: [
      ".nuxt/",
      ".output/",
      "dist/",
      "playwright-report/",
      "test-results/",
      "public/images/vendor/",
    ],
  },
  js.configs.recommended,
  ...typescriptEslint.configs["flat/recommended-type-checked"],
  ...vue.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.mts", "**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
        extraFileExtensions: [".vue"],
        project: [
          "./.nuxt/tsconfig.app.json",
          "./.nuxt/tsconfig.server.json",
          "./.nuxt/tsconfig.node.json",
          "./tests/tsconfig.json",
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-undef": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "array-simple",
          readonly: "array-simple",
        },
      ],
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-deprecated": 2,
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "e2e/**/*.ts", "playwright.config.ts"],
    ...typescriptEslint.configs["flat/disable-type-checked"],
    languageOptions: {
      parserOptions: {
        project: false,
      },
      globals: {
        ...globals.node,
      },
    },
  },
  prettierRecommended,
]
