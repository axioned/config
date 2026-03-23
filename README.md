# config

Shared configuration packages for Axioned projects.

| Package | Version |
|---------|---------|
| [`@axioned/prettier-config`](./packages/prettier-config) | [![npm](https://img.shields.io/npm/v/@axioned/prettier-config)](https://www.npmjs.com/package/@axioned/prettier-config) |
| [`@axioned/tailwind-config`](./packages/tailwindcss-config) | [![npm](https://img.shields.io/npm/v/@axioned/tailwind-config)](https://www.npmjs.com/package/@axioned/tailwind-config) |
| [`@axioned/eslint-plugin`](./packages/eslint-plugin) | [![npm](https://img.shields.io/npm/v/@axioned/eslint-plugin)](https://www.npmjs.com/package/@axioned/eslint-plugin) |

## Publishing an update

1. Make your changes
2. `bun changeset` — select which packages changed and bump type
3. Commit everything including the generated changeset file, push, merge to `main`
4. Action opens a Version PR automatically
5. Merge the Version PR → Action publishes to npm

## Adding a new package

1. Create `packages/my-package/` with `package.json`, entry point, and README
2. `bun install` — workspace picks it up automatically
3. `bun changeset` — select the new package, pick `minor` for first release
4. Commit, push, merge to `main` → Action opens a Version PR → merge it → published
5. Go to `npmjs.com/package/@axioned/my-package` → Settings → Trusted Publishers → add `axioned / config / release.yml`

> Step 5 can only be done after the package is published for the first time.
