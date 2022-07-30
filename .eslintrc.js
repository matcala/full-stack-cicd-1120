module.exports = {
   'env': {
      'browser': true,
      'commonjs': true,
      'es2021': true,
      'node': true,
      'cypress/globals': true
   },
   'extends': [
      'eslint:recommended',
      'plugin:react/recommended'
   ],
   'parserOptions': {
      'ecmaVersion': 12
   },
   'plugins': [
      'react', 'cypress'
   ],
   'rules': {
      'indent': [
         'error',
         3
      ],
      'linebreak-style': [
         'error',
         'unix'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'never'
      ],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
         'error', 'always'
      ],
      'arrow-spacing': [
         'error', { 'before': true, 'after': true }
      ],
      'no-console': 0,
      'react/prop-types': 0
   }
}
