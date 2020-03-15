import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

// const MapContainer = () =>{
//     const [birds, setBirds] = useState([]);

//     useEffect(() => {
//         async function fetchData(){
//             try{
//                 const res = await axios.get('/api/birds')
//                 setBirds(res.data)
//             } catch(error){
//                 console.error(error.message);
//             }
//         }
//         fetchData();
//     }, []);

//     return(
//         <ul>
//             { birds.map((bird, index)=> <li key={index.toString()}>{bird.bird_id}</li>) }
//         </ul>
//     );
        
// }

const Map = () => {
    const [birds, setBirds] = useState([]);

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
            defaultZoom={18} 
            defaultCenter={{lat:13.846246,lng:100.568640}} 
        >
            { birds.map((bird, index) => <Marker key = {index}
                position = {{lat: Number(bird.lat), lng:Number(bird.lng)}}
            />)}
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