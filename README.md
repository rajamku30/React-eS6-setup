# SVB TMS-Frontend

* Description.

* The folder contain TMS-Frontend related files.


.babelrc
---------
{
    "presets": [
        "@babel/preset-env",
        [
           "@babel/preset-react",
           {
               "runtime": "automatic"
           }
        ]
    ]

    
}

.eslintrc.js
-------------
module.exports = {
//   parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
}

.prettierrc.js
----------------
module.exports = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto',
}

