import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Disable unescaped entities rule for Hebrew content
      "react/no-unescaped-entities": "off",
      // Disable img element warning since we intentionally use img tags
      "@next/next/no-img-element": "off",
      // Allow require() in scripts directory
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

export default eslintConfig;
