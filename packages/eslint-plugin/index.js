import rules from "./rules/index.js";

const plugin = {
  meta: {
    name: "@axioned/eslint-plugin",
    version: "0.0.1",
  },
  rules,
  configs: {},
};

// Configs are assigned after plugin is defined so they can reference it.
// Consumers can use: plugin.configs.recommended  OR  import from "@axioned/eslint-plugin/configs/recommended"
Object.assign(plugin.configs, {
  recommended: {
    name: "@axioned/recommended",
    plugins: { "@axioned": plugin },
    rules: {
      "@axioned/no-console": "warn",
    },
  },
});

export default plugin;
