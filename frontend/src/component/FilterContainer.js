import React, { useState, useEffect } from 'react';
import { 
    Marker, 
    InfoWindow,
    Polyline} from 'react-google-maps';

const maps_icon = require('../assets/marker_icon.png');

const FilterContainer = (props) =>{

    const [filterBird, setFilterBird] = useState(props.birds);
    const [filterPaths, setFilterPaths] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const filterData = () =>{
        let newList = [];
        if(props.query != ""){
            newList = props.birds.filter(bird => bird.name.includes(props.query));
            setFilterBird(newList);
        } else {
            newList = props.birds;
            setFilterBird(props.birds);
        }
        
        newList.map(bird => {
            let newLocations = [];
            bird.locations.map(location => {
                newLocations = [...newLocations, 
                    (({lat, lng})=>({lat, lng}))(location.coordinates)];
            });
            setFilterPaths(filterPaths=> [...filterPaths, newLocations]);
        });
    }

    useEffect(() => {

        setFilterPaths([]); // Initialize again, prevent append from previous list
        filterData();

        console.log(filterPaths);

    },[props.birds, props.query]); //Update when birds or query change

    return(
        <div>
            { filterBird.map(bird => (
                bird.locations.map((location, index) => (
                    <Marker key={index} 
                        position = {location.coordinates}
                        icon = {{
                            url: maps_icon,
                            scaleSize: new window.google.maps.Size(8, 8)
                        }}

                        onClick = {() => {
                            setSelectedLocation(location);
                        }}
                    />
                ))
            ))}

            { selectedLocation && (
                <InfoWindow
                    position={
                       selectedLocation.coordinates
                    }
                    onCloseClick = {()=>{
                        setSelectedLocation(null);
                    }}
                >
                <div>
                <h3>Bird's ID: {selectedLocation.bird_id}</h3>
                <h3>{selectedLocation.coordinates.lat}, {selectedLocation.coordinates.lat}</h3>
                </div>
                </InfoWindow>
            )}

            {filterPaths.map((path, index) => (
                <Polyline key = {index}
                    path = {path}
                    options = {{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2
                    }}
                />
            ))}
        </div>
    );
}

export default FilterContainer;