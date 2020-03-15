import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import mapStyles from '../assets/mapStyles';

const Map = () => {
    const [birds, setBirds] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect( () => {
        async function fetchData(){
            try{
                const res = await axios.get('/api/birds');
                setBirds(res.data)
            }catch(error){
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    return(
        <GoogleMap 
            defaultZoom={15} 
            defaultCenter={{lat:13.846246,lng:100.568640}} 
            defaultOptions = {{styles: mapStyles}}
        >
            { birds.map((bird, index) => (
                <Marker key = {index}
                    position = {{
                        lat: Number(bird.lat), 
                        lng: Number(bird.lng)
                    }}
                    onClick = {()=>{
                        setSelectedLocation(bird);
                    }}
                    
                />
            ))}

            {selectedLocation && (
                <InfoWindow
                    position={{
                        lat: Number(selectedLocation.lat),
                        lng: Number(selectedLocation.lng)
                    }}
                    onCloseClick = {()=>{
                        setSelectedLocation(null);
                    }}
                >
                <div>
                    <p>{selectedLocation.lat} {selectedLocation.lng}</p>
                </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapContainer(){
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAD0zS55CxSt0oXdu8O230XgPF2_ZmKT7A`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
}