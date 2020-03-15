import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MapContainer from './component/MapContainer';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={MapContainer} />
            </Switch>
        </Router>
    );
}

export default Routes;