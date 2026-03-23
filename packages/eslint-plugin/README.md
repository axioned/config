# eslint-plugin

Axioned's shared ESLint plugin

## Installation

```sh
bun add -d @axioned/eslint-plugin eslint
```

## Usage

In your `eslint.config.ts`:

```ts
import axioned from "@axioned/eslint-plugin";

export default [axioned.configs.recommended];
```
