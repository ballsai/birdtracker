import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
       } from 'react-google-maps';
import mapStyles from '../assets/mapStyles';
import FilterContainer from './FilterContainer';

const Map = ({query}) => {
    const [birds, setBirds] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [locations, setLocations] = useState([]);

    const fetchData = async() =>{
        try{
            const req = await axios.get('/api/birds');
            setBirds(req.data);
            // req.data.map(bird => {
            //     let newLocations = [];
            //     bird.locations.map(location => {
            //         newLocations = [...newLocations, 
            //             (({lat, lng})=>({lat, lng}))(location.coordinates)];
            //     });
            //     setLocations(locations => [...locations, newLocations]);
            // });
        
        }catch(error){
            console.error(error.message);
        }
    }

    useEffect( () => {
        fetchData();
        console.log('parent\'s component')        
    }, []);

    return(
        <GoogleMap 
            defaultZoom={15} 
            defaultCenter={{lat:13.846246,lng:100.568640}} 
            defaultOptions = {{styles: mapStyles}}
        >
            <FilterContainer birds={birds} query={query}/>

            {/* { birds.map( bird => (
                bird.locations.map((location, index) => (
                    <Marker key={index} 
                        position = {location.coordinates}

                        onClick = {() => {
                            setSelectedPosition(location)
                        }}

                    />
                ))
            ))} */}

            {/* {selectedPosition && (
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
            )} */}

            {/* {coordinates.map((path, index) => (
                <Polyline key = {index}
                    path = {path}
                    options = {{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2
                    }}
                />
            ))} */}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const MapContainer = ({query}) => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAD0zS55CxSt0oXdu8O230XgPF2_ZmKT7A`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            query = {query}
          />
        </div>
      );
}

export default MapContainer;