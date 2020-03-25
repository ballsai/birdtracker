import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MapContainer from './component/MapContainer';

const Routes = ({query}) => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' render = {(props) => <MapContainer {...props} query={query}/>} />
            </Switch>
        </Router>
    );
}

export default Routes;