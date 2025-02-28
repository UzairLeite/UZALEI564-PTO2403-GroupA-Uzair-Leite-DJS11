import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore specific directories
  { ignores: ['dist', 'node_modules'] },

  // Base configuration for JavaScript and TypeScript
  {
    extends: [
      js.configs.recommended, // ESLint recommended rules
      ...tseslint.configs.recommended, // TypeScript recommended rules
    ],
    files: ['**/*.{ts,tsx}'], // Apply to TypeScript files
    languageOptions: {
      ecmaVersion: 2022, // Use the latest ECMAScript version
      sourceType: 'module', // Use ES modules
      globals: {
        ...globals.browser, // Browser global variables (e.g., `window`, `document`)
        ...globals.node, // Node.js global variables (e.g., `process`, `require`)
      },
    },
    plugins: {
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow constant exports
      ],
      // Additional custom rules
      'no-console': 'warn', // Warn on `console` statements
      'no-unused-vars': 'warn', // Warn on unused variables
      'react-hooks/exhaustive-deps': 'warn', // Warn on missing dependencies in `useEffect`
    },
  },

  // Additional configuration for React files
  {
    files: ['**/*.{jsx,tsx}'], // Apply to JSX/TSX files
    rules: {
      'react/jsx-uses-react': 'error', // Prevent React from being marked as unused
      'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being marked as unused
    },
  }
);