import React, { useEffect } from 'react'

import './App.css'
import Routes from './router/Routes'
import Layout from './views/layout/Layout'

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes/>
      </Layout>
    </div>
  );
}

export default App;
