import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/HomePage/Homepage';

const DefaultRouter = () => {
    return (
        <Switch>
            <Route path="/">
                <Homepage/>
            </Route>
        </Switch>
    );
};

export default DefaultRouter;