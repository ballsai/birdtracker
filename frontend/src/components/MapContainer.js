import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
       } from 'react-google-maps';
import mapStyles from '../assets/mapStyles';
import FilterContainer from './FilterContainer';
require('dotenv').config();


const Map = ({passQuery}) => {
    const [birds, setBirds] = useState([]);

    const fetchData = async() =>{
        try{
            const req = await axios.get('/api/birds');
            setBirds(req.data);
        }catch(error){
            console.error(error.message);
        }
    }

    useEffect( () => {
        fetchData();
        // console.log('parent\'s component')        
    }, []);

    return(
        <GoogleMap 
            defaultZoom={12} 
            defaultCenter={{lat:13.846246,lng:100.568640}} 
            defaultOptions = {{ styles: mapStyles, 
                                mapTypeControl: false,
                                streetViewControl: false,
                                fullscreenControl: false,
                                scaleControl: true}}
        >
            <FilterContainer birds={birds} query={passQuery}/>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const MapContainer = ({passQuery}) => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            passQuery = {passQuery}
          />
        </div>
      );
}

export default MapContainer;