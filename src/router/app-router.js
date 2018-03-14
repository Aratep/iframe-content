import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../components/login/Login';
import Registration from '../components/registration/Registration';
import Reset from '../components/reset/Reset';

export const AppRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/reset" component={Reset}/>
        </Switch>
    </div>
)