import React, { useState, useEffect } from 'react';
import Routes from './routes';
import FilterBar from './layouts/FilterBar'
import '../src/assets/style.css'

const App = () => {
  const[query, setQuery] = useState("");

  const getQuery = (word) => {
    setQuery(word);
    // console.log(query);
  }
  
  return (
    <div>
      <FilterBar queryCallback = {getQuery} pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <div id="page-wrap">
        <Routes query = {query}/>
      </div>
    </div>
  );
}

export default App;
