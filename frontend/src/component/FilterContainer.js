import React, { useState, useEffect } from 'react';
import { GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker, 
    InfoWindow,
    Polyline} from 'react-google-maps';

const FilterContainer = (props) =>{

    const [query, setQuery] = useState("");
    const [filterBird, setFilterBird] = useState(props.birds);
    const [filterPath, setFilterPath] = useState(props.paths);

    useEffect(() => {

        setFilterBird(props.birds);
        setFilterPath(props.paths);

    }, [props.birds]);

    const handleChange = (event) => {
        let newList = [];

        if(event.target.value != ""){
            setQuery(event.target.value);
            newList = props.birds.filter(bird => bird.name.includes(query));
        } else {
            newList = props.birds
        }

        setFilterBird(newList);
    }

    return(
        <div>
            filter: <input onChange={handleChange}/>
            { filterBird.map(bird => (
                bird.tracks.map((track, index) => (
                    <Marker key={index} 
                        position = {track.coordinates}
                    />
                ))
            ))}
{/* 
            {filterPath.map((path, index) => (
                <Polyline key = {index}
                    path = {path}
                    options = {{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2
                    }}
                />
            ))} */}
        </div>
    );
}

export default FilterContainer;