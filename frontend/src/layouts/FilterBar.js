import React,{useState} from 'react'
import {slide as Menu} from 'react-burger-menu';

const FilterBar = (props) =>{
    const [query, setQuery] = useState("");
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const handleChange = (event) =>{
        if(event.target.value != ""){
            setQuery(event.target.value);
           
        } else { 
            setQuery("");
            props.queryCallback("");
        }
        
    }

    const handleSubmit = (event) =>{
        props.queryCallback(query);
        event.preventDefault();
    }

    const handleReset = (event) =>{
        setQuery("");
        props.queryCallback("");
    }

    return(
        // <form onSubmit={handleSubmit}>
        //     filter: <input onChange={handleChange}/>
        //     <button >search</button> 
        //     <button onClick={handleReset}>x</button>
        // </form>
        <Menu {...props}>
            <a className="menu-item" href="/">
                หน้าแรก
            </a>

            <a className="menu-item" href="/burgers">
                ความเป็นมา
            </a>

            <a className="menu-item" href="/pizzas">
                ติดต่อเรา
            </a>

            <a className="menu-item" href="/desserts">
                สนับสนุน
            </a>
        </Menu>
    );

}

export default FilterBar;