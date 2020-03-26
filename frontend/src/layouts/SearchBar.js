import React, {useState, useEffect} from 'react';

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
  
  return(
        <div className="input-group input-group-sm" onSubmit={handleSubmit}>
            <input className="form-control" type="search"
                placeholder="Start to filter... e.g.(ID, name)"
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;