import antfu from "@antfu/eslint-config";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";

export default antfu({
  typescript: true,
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  plugins: {
    "@tanstack/query": tanstackQueryPlugin,
  },
  rules: { ...tanstackQueryPlugin.configs.recommended.rules },
});
