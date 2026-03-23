import rules from "./rules/index.js";

const plugin = {
  meta: {
    name: "@axioned/eslint-plugin",
    version: "0.0.1",
  },
  rules,
  configs: {},
};

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
