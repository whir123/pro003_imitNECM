import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
// 希望用 @ 代表 src 目录
// 1.eject暴露出来 2.[craco]：create-react-app config
// npm install @craco/craco@alpha -D [alpha以支持新的脚手架]
// 创建 src/craco.config.js

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // 删掉严格模式了
  <App />,
);
