module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    jest: true,
    browser: true,
    node: true
  },
  ignorePatterns: ["scripts/*.js"],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.tsx', '**/*.test.ts'] }
    ],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': 'off',
    'no-multi-assign': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-shadow': 'off',
    'no-case-declarations': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/indent': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-cycle': 'off',
    'no-nested-ternary': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    indent: 'off',
    curly: 'error'
  }
};
