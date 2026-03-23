# @axioned/config — Agent Reference

Shared configuration packages for all Axioned projects. Published to npm under the `@axioned` scope.

## Packages

| Package | npm | Purpose |
|---------|-----|---------|
| `packages/prettier-config` | `@axioned/prettier-config` | Prettier config with import sorting and Tailwind class ordering |
| `packages/tailwindcss-config` | `@axioned/tailwind-config` | Tailwind v4 base theme and PostCSS config |
| `packages/eslint-plugin` | `@axioned/eslint-plugin` | ESLint plugin with custom rules and shared configs |

## ESLint Plugin — Config

One config: `plugin.configs.recommended`. Contains custom rules, conventions, and security rules.

### Consuming in a project

```ts
// eslint.config.ts
import axioned from "@axioned/eslint-plugin";

export default [axioned.configs.recommended];
```

## Development

### Adding a new ESLint rule

1. Create `packages/eslint-plugin/rules/my-rule.js` — see `rules/no-console.js` as reference
2. Register in `packages/eslint-plugin/rules/index.js`
3. Enable in the appropriate config in `packages/eslint-plugin/index.js`

### Adding a new config

1. Create `packages/eslint-plugin/configs/my-config.js`
2. Import and register in `packages/eslint-plugin/index.js`
3. Auto-exported via the `"./configs/*"` wildcard in `package.json`

## Workspace commands

```bash
bun install       # install all dependencies
bun run build     # build all packages (turbo)
bun run format    # check formatting
bun run lint      # lint all packages
```
