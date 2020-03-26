import React,{useState, useEffect} from 'react'
import {push as Menu} from 'react-burger-menu';
import SearchBar from './SearchBar'
import DatePicker from './DatePicker'

const Sidebar = ({requestQuery}) =>{
    
    const [isOpen, setIsOpen] = useState(false);

    const isMenuOpen = (state) =>{
        setIsOpen(state);
        console.log('state: ',state)
        console.log(isOpen)
    }

    useEffect(()=>{
        setIsOpen(isOpen)
    }, isOpen);

    return(  
        <Menu width={280} disableAutoFocus isOpen={isOpen}>
            <h6>FILTER DISPLAY</h6>
            <a className="menu-item">
                <SearchBar requestQuery={requestQuery} menuStateChange={isMenuOpen}/>
            </a>
            <h6 align="center">OR</h6>
            <a className="menu-item">
                <DatePicker/>
            </a>
            <p>_______________________________</p>
            <a className="menu-item" href="/">
                <h6>📄 EXPORT CSV</h6> 
            </a>

            <a className="menu-item" href="/burgers">
                <h6>📈 ANALYTICS</h6>
            </a>

            <a className="menu-item" href="/pizzas">
                <h6>😃 ABOUT ME</h6>
            </a>

            <a className="menu-item" href="/desserts">
                <h6>🤝 SPONSER</h6>
            </a>
        </Menu>
    );

}

export default Sidebar;