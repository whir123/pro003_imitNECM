import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './router';

function App() {
  const discover = useRoutes(routes);
  return (
    <div className='App'>
      {/* <Router path='/路径' element={组件}/> */}
      {/* <Router path='/路径' element={组件}/> */}
      {/* <Router path='/路径' element={组件}/> */}
      {/* <Router path='/路径' element={组件}/> */}
      {/* 路由统一配置到配置文件： router/index.tsx */}
      {discover}
    </div>
  )
}

export default App;
