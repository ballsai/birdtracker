import React, { useState, useEffect } from 'react';
import { 
    Marker, 
    InfoWindow,
    Polyline} from 'react-google-maps';

const FilterContainer = (props) =>{

    const [filterBird, setFilterBird] = useState(props.birds);
    const [filterPaths, setFilterPaths] = useState([]);

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

        setFilterPaths([]); // prevent append from previous list
        filterData();

        console.log(filterPaths);

    },[props.birds, props.query]);

    return(
        <div>
            { filterBird.map(bird => (
                bird.locations.map((location, index) => (
                    <Marker key={index} 
                        position = {location.coordinates}
                    />
                ))
            ))}

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