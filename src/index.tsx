import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'normalize.css';
import './assets/css/index.less'

import App from '@/App';

// 希望用 @ 代表 src 目录
// 1.eject暴露出来 2.[craco]：create-react-app config
// npm install @craco/craco@alpha -D [alpha以支持新的脚手架]
// 创建 src/craco.config.js

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement,);
root.render(
  // 删掉严格模式了
  <HashRouter>
    <App />
  </HashRouter>,
  // HashRouter的特点：URL 会带一个 # ：路由匹配用的是 # 后面的部分，例如 /#/discover 对应路径 /discover
);
