import React from 'react';
import {Route, IndexRoute} from 'react-router';
import 'react-router-proxy-loader';
import App from './../modules/app';

// let App = require('./../modules/app');

import Login from 'react-router-proxy-loader!./../modules/login';
import Me from 'react-router-proxy-loader!./../modules/me';

// let Login = require('./../modules/login');

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="me" component={Me}/>
        <Route path="*" component={Login}/>
    </Route>
);
