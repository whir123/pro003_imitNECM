// Prettier（全称 Prettier - Code Formatter）是一个流行的自动代码格式化工具
// 支持 JavaScript、TypeScript、CSS、HTML、Markdown 等多种语言

// npm install prettier -D

module.exports = {
  useTabs: false, // 使用空格缩进
  tabWidth: 2, // 缩进空格数
  printWidth: 80, // 每行最大长度
  singleQuote: true, // 使用单引号
  trailingComma: 'all', // 多行对象/数组最后一项加逗号
  semi: true, // 语句末尾加分号
};

//设置里：Editor: Default Formatter --> Prettier - Code formatter
