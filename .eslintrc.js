module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": "off",
    "indent": [
      "warn",
      2
    ],
    "max-len": [
      "warn",
      { "code": 110 },
      { "tabWidth": 4 },
      { "ignoreUrls": true }
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
