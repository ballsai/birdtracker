import React, { useState, useEffect } from 'react';
import { 
    Marker, 
    InfoWindow,
    Polyline} from 'react-google-maps';
import polylineStyles from '../assets/polylineStyles'

const maps_icon = require('../assets/marker_icon.png');

const FilterContainer = (props) =>{

    const [filterBird, setFilterBird] = useState(props.birds);
    const [filterPaths, setFilterPaths] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const fetchFilterData = () =>{
        let newList = [];
        if(props.query != ""){
            newList = props.birds.filter(bird => bird.name.includes(props.query));
            setFilterBird(newList);
        } else {
            newList = props.birds;
            setFilterBird(props.birds);
        }
        newList.map(bird => {
            let paths = [];
            let color = polylineStyles[bird.id];
            bird.locations.map(location => {
                paths = [...paths, 
                    (({lat, lng})=>({lat, lng}))(location.coordinates)];
            });
            setFilterPaths(filterPaths=> [...filterPaths, {color, paths}]);
        });
    }

    useEffect(() => {

        setFilterPaths([]); // Initialize again, prevent append from previous list
        fetchFilterData();
        console.log(filterPaths);

    },[props.birds, props.query]); //Update when birds or query has changed

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
                    <p>ID: {selectedLocation.bird_id},DATE: 03/27/2020 04:04 AM</p>
                    <p>LOCATION: {selectedLocation.coordinates.lat}, {selectedLocation.coordinates.lat}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque diam magna, bibendum id sollicitudin a, 
                        facilisis eget libero. Nullam vestibulum mauris id 
                        facilisis pharetra. Quisque dolor purus, finibus sit 
                        amet bibendum at, ornare in lectus.
                    </p>
                </div>
                </InfoWindow>
            )}

            {filterPaths.map((path, index) => (
                <Polyline key = {index}
                    path = {path.paths}
                    options = {{
                        strokeColor: path.color,
                        strokeOpacity: 0.75,
                        strokeWeight: 2
                    }}
                />
            ))}
        </div>
    );
}

export default FilterContainer;