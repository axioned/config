# @axioned/prettier-config

## 1.1.2

### Patch Changes

- Add TypeScript type declarations, align package descriptions, and add READMEs

## 1.1.1

### Patch Changes

- Change printWidth from 120 to 80

## 1.1.0

### Minor Changes

- Migrate all packages to ESM and bun. Add Tailwind v4 config and ESLint plugin.

  - prettier-config: migrate to ESM, add import sorting and Tailwind class ordering plugins, move prettier to peerDependencies
  - tailwind-config: rewrite for Tailwind v4, add default theme and PostCSS config
  - eslint-plugin: new package with recommended config (no-console rule)
