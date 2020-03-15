import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapContainer = () =>{
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const res = await axios.get('/api/birds')
                setBirds(res.data)
            } catch(error){
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    return(
        <ul>
            { birds.map((bird, index)=> <li key={bird.bird_id.toString()}>{bird.bird_id}</li>) }
        </ul>
    );
        
}

export default MapContainer;