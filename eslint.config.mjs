// ESLint 是一个流行的 JavaScript/TypeScript 代码检查和自动修复工具
// 用于发现和修复代码中的语法错误、风格问题和潜在 bug，帮助团队统一代码规范

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier"; // 引入 Prettier 配置

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: [
      "js/recommended",
      "plugin:prettier/recommended", // 添加 Prettier 推荐配置
    ],
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { 
    files: ["**/*.json"],
    plugins: { json }, language: "json/json",
    extends: ["json/recommended"] 
  },
  prettier, // 应用 Prettier 的配置（关闭冲突的 ESLint 规则）
]);

// ESLint：主要进行代码质量检查（如变量未使用、错误的语法等），但也包含一些格式化规则（如缩进、引号等）。
// Prettier：专注于代码格式化（如换行、缩进、分号等），不关心代码逻辑问题。
// 如果 ESLint 和 Prettier 的格式化规则不一致（比如 ESLint 要求单引号，Prettier 强制双引号），它们可能会互相覆盖对方的修改，导致代码无法稳定格式化。

// npm install --save-dev eslint-plugin-prettier eslint-config-prettier
// eslint-plugin-prettier：让 Prettier 作为 ESLint 的一个插件运行
// eslint-config-prettier：关闭 ESLint 中与 Prettier 冲突的规则