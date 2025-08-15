// craco 允许在不弹出（eject）项目的情况下 自定义和扩展 create-react-app（CRA）的配置
// 比如 webpack、babel、eslint 等

// 引入 Node.js 的 path 模块，用于处理文件和目录路径
const path = require('path');
const CracoLessPlugin = require('craco-less'); // 通过这个插件，它会在 webpack 配置里自动添加对 .less 文件的解析规则（loader）

// 定义一个 resolve 函数，传入相对路径 dir，返回以当前文件夹为起点的绝对路径
const resolve = (dir) => path.resolve(__dirname, dir);

// 导出 craco 的配置对象
// 配置 webpack 的 alias（路径别名）：
// 这样在项目中可以用 @ 代表 src 目录，方便引入文件
// 如 import xxx from '@/components/xxx'
// 这边配置完 去 tsconfig.json 配置
module.exports = {
  plugins:[{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
};
