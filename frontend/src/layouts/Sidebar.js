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
        <Menu disableAutoFocus isOpen={isOpen}>
            <h5>Filter</h5>
            <a className="menu-item">
                <SearchBar requestQuery={requestQuery} menuStateChange={isMenuOpen}/>
            </a>
            <h6>Or filter by date</h6>
            <a className="menu-item">
                <DatePicker/>
            </a>

            <a className="menu-item" href="/">
                Export 🥰
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

export default Sidebar;