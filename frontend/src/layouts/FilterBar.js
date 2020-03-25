import React, { useState, useEffect } from 'react';


const FilterBar = (props) =>{
    const [query, setQuery] = useState("");

    const handleChange = (event) =>{
        if(event.target.value != ""){
            setQuery(event.target.value);
        } else setQuery("");
    }

    const handleClick = (event) =>{
        props.queryCallback(query);
        event.preventDefault();
    }

    const handleReset = (event) =>{
        setQuery("");
        props.queryCallback("");
    }

    return(
        <div>
            filter: <input onChange={handleChange}/>
            <button onClick={handleClick}>search</button> 
            <button onClick={handleReset}>x</button>
        </div>
    );

}

export default FilterBar;