import React from 'react';
import {Route, IndexRoute} from 'react-router';
import 'react-router-proxy-loader';
import App from './../modules/app';

// let App = require('./../modules/app');

import Monitor from 'react-router-proxy-loader!./../modules/monitor';
import Login from 'react-router-proxy-loader!./../modules/login';
import Me from 'react-router-proxy-loader!./../modules/me';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="monitor" component={Monitor}>
        	<IndexRoute component={require('react-router-proxy-loader!./../modules/monitor/menu')}/>
        	<Route path="doctor" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        	<Route path="detail" component={require('react-router-proxy-loader!./../modules/monitor/detail')}/>
        	<Route path="doctor" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        	<Route path="patient" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        </Route>
        <Route path="me" component={Me}>
          <Route path="patient" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        </Route>
        <Route path="*" component={Login}/>
    </Route>
);
