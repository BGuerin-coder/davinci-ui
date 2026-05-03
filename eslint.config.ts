import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,cjs}"],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: config.files || ["**/*.{ts,mts,cts}"],
  })),
  ...pluginVue.configs["flat/essential"].map((config) => ({
    ...config,
    files: config.files || ["**/*.vue"],
    languageOptions: {
      ...config.languageOptions,
      globals: globals.browser,
      parserOptions: { parser: tseslint.parser },
    },
  })),
  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    rules: {
      ...css.configs.recommended.rules,
      "css/no-invalid-properties": ["error", { allowUnknownVariables: true }],
      "css/use-baseline": ["error", { available: "newly" }],
    },
  },
]);
