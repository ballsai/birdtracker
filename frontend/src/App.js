import React from 'react';
import Routes from './routes';
import NavMenu from './layouts/navbar';

const App = () => {
  return (
    <div>
      <NavMenu/>
      <Routes/>
    </div>
  );
}

export default App;
