/**
 * Example rule: disallow console.log (allow warn/error).
 *
 * Replace or add rules here. Each file exports a single ESLint rule object.
 * See: https://eslint.org/docs/latest/extend/custom-rules
 */

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow console.log; use console.warn or console.error instead",
      recommended: true,
    },
    messages: {
      noConsoleLog: "Unexpected console.log. Use console.warn or console.error.",
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "Identifier" &&
          node.object.name === "console" &&
          node.property.type === "Identifier" &&
          node.property.name === "log"
        ) {
          context.report({ node, messageId: "noConsoleLog" });
        }
      },
    };
  },
};

export default rule;
