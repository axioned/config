# prettier-config

Axioned's shared Prettier config

## Installation

```sh
bun add -d @axioned/prettier-config prettier
```

## Usage

### Recommended — `package.json` field

Add a `prettier` key to your `package.json`:

```json
{
  "prettier": "@axioned/prettier-config"
}
```

### Extending the config

To override specific options, create a `prettier.config.mjs` at your project root:

```js
import axionedPrettier from "@axioned/prettier-config";

/** @type {import("prettier").Config} */
const config = {
  ...axionedPrettier,
  // your overrides here
};

export default config;
```

### Format scripts

```json
{
  "scripts": {
    "format": "prettier --check .",
    "format:fix": "prettier --write ."
  }
}
```
