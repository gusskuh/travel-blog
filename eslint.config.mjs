import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
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
