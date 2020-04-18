import React from 'react';

import Layout from './views/layout/Layout'
import Routes from './router/Routes'

function App() {
  return (
    <div className="App">
    <Layout>
      <Routes/>
    </Layout>
    </div>
  );
}

export default App
