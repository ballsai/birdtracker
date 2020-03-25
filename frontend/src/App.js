import React, { useState, useEffect } from 'react';
import Routes from './routes';
import FilterBar from './layouts/FilterBar'

const App = () => {
  const[query, setQuery] = useState("");

  const getQuery = (word) => {
    setQuery(word);
    // console.log(query);
  }
  
  return (
    <div>
      <FilterBar queryCallback = {getQuery}/>
      <Routes query = {query}/>
    </div>
  );
}

export default App;
