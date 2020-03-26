import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MapContainer from './component/MapContainer';

const Routes = ({passQuery}) => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' render = {(props) => 
                    <MapContainer {...props} passQuery={passQuery}/>} 
                />
            </Switch>
        </Router>
    );
}

export default Routes;