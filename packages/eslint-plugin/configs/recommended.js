/**
 * Re-exports the recommended config for named-import convenience:
 *   import recommended from "@axioned/eslint-plugin/configs/recommended";
 *
 * The config is defined in index.js (so the plugin self-reference works cleanly).
 */
import plugin from "../index.js";

export default plugin.configs.recommended;
