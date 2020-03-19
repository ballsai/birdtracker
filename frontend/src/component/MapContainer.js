import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
        Marker, 
        InfoWindow,
        Polyline} from 'react-google-maps';
import mapStyles from '../assets/mapStyles';

const Map = () => {
    const [birds, setBirds] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect( () => {
        async function fetchData(){
            try{
                const birds = await axios.get('/api/birds');
                setBirds(birds.data)  
                let test = []  
                birds.data.map(bird => {
                    let newCoordinates = [];
                    bird.tracks.map(track => {
                        newCoordinates.push((({lat, lng})=>({lat, lng}))(track.coordinates));
                    })
                    setCoordinates(coordinates => [...coordinates, newCoordinates]);
                });
                

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
            { birds.map( bird => (
                bird.tracks.map((track, index) => (
                    <Marker key={index} 
                        position = {track.coordinates}

                        onClick = {() => {
                            setSelectedPosition(track)
                        }}

                    />
                ))
            ))}

            {selectedPosition && (
                <InfoWindow
                    position={
                       selectedPosition.coordinates
                    }
                    onCloseClick = {()=>{
                        setSelectedPosition(null);
                    }}
                >
                <div>
                <p>{selectedPosition.coordinates.lat} {selectedPosition.coordinates.lat}</p>
                </div>
                </InfoWindow>
            )}

            {coordinates.map((path, index) => (
                <Polyline key = {index}
                    path = {path}
                    options = {{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2
                    }}
                />
            ))}

            {/* <Polyline 
                path = {coordinates}
                options = {{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2
                }}
            />             */}
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