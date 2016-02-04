import React from 'react';
import {Route, IndexRoute} from 'react-router';
import 'react-router-proxy-loader';
import App from './../modules/app';

// let App = require('./../modules/app');

// import Login from './../modules/login';

let Login = require('./../modules/login');

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="me" component={require('react-router-proxy-loader!./../modules/me')}/>
        <Route path="*" component={Login}/>
    </Route>
);
