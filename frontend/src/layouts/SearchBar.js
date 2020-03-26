import React, {useState, useEffect} from 'react';
import ReactSearchBox from 'react-search-box';

const SearchBar = (props) => {

  const [query, setQuery] = useState("");

  const handleChange = (event) =>{
      if(event.target.value != ""){
          props.requestQuery(event.target.value);
      }else props.requestQuery("");
  }
  
  const handleSubmit = (event) =>{
      event.preventDefault();
      props.menuStateChange(false);
  }

  const handleReset = (event) =>{
      props.requestQuery("");
  }
  
  return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="ID or name" />
            <input type="reset" /*defaultValue="Reset"*/ onClick={handleReset}/>  
        </form>
    );
}

export default SearchBar;