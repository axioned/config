# tailwind-config

Axioned's shared Tailwind config

## Installation

```sh
bun add -d @axioned/tailwind-config tailwindcss @tailwindcss/postcss postcss
```

## Usage

### PostCSS config

In your `postcss.config.ts`:

```ts
export { default } from "@axioned/tailwind-config/postcss.config";
```

### Default theme

Import the default theme in your global CSS file:

```css
@import "@axioned/tailwind-config/themes/default";
@import "tailwindcss";
```

The default theme provides CSS variables for colors, radius, shadows, spacing, and typography — with light and dark mode variants out of the box.
