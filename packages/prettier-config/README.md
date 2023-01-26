# prettier-config

Prettier config used at Axioned

## Usage

Install the package using `npm`

```sh
npm install --save-dev @github/prettier-config
```

Add the `prettier` key to your `package.json`

```diff
   "author": "Axioned (https://axioned.com)",
+  "prettier": "@github/prettier-config",
   "main": "index.js"
 ```

**OR**

Create a .prettierrc , .prettierrc.yaml , .prettierrc.yml or .prettierrc.json file and export a string.

"@axioned/prettier-config"

**OR**

Create a prettier.config.js or .prettierrc.js file and export an object.

module.exports = {
  ...require("@axioned/prettier-config"),
  // endOfLine: 'lf', // to overwrite the property
};

[Check out the `prettier` documentation for more info on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).