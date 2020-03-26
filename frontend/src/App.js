import React, { useState, useEffect } from 'react';
import Routes from './routes';
import '../src/assets/style.css'
import Sidebar from './layouts/Sidebar';

const App = () => {
  const[query, setQuery] = useState("");

  const requestQuery = (query) => {
    setQuery(query);
    // console.log(query);
  }
  return (
    <div>
      <div id="outer-container">
        <Sidebar requestQuery={requestQuery} pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <Routes passQuery = {query}/>
        </div>
      </div>
    </div>
  );
}

export default App;
