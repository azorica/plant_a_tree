import { defineConfig } from 'eslint-define-config';
import vuePlugin from 'eslint-plugin-vue';
import importPlugin from 'eslint-plugin-import';
import vueParser from 'vue-eslint-parser';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      vue: vuePlugin,
      import: importPlugin,
    },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      indent: ['error', 2, {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
        MemberExpression: 'off',
      }],
      'comma-dangle': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
      }],
      'sort-imports': ['error', { ignoreCase: true }],
      'template-curly-spacing': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: 5 }],
      'vue/attributes-order': ['error', {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'EVENTS',
          'CONTENT',
          'GLOBAL',
          'OTHER_ATTR',
        ],
      }],
      'vue/order-in-components': ['error', {
        order: [
          'el',
          'name',
          ['template', 'render', 'renderError'],
          ['parent', 'functional', 'delimiters', 'comments'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          ['directives', 'filters'],
          'components',
        ],
      }],
    },
    ignores: [
      'node_modules/',
      'dist/',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
]);