import React from 'react';
import {Route, IndexRoute} from 'react-router';
//import 'react-router-proxy-loader';
import App from './../modules/app';
import NotFound from './../modules/app/404';
import Login from './../modules/login'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="monitor" component={require('./../modules/monitor')}>
        	<IndexRoute component={require('./../modules/monitor/adapter')}/>
          <Route path="detail" component={require('./../modules/monitor/detail')}/>
        	<Route path="body" component={require('./../modules/monitor/body-detail')}/>
        </Route>
        <Route path="me" component={require('./../modules/me')}>
          <IndexRoute component={require('./../modules/me/oprIndex')}/>
          <Route path="patient" component={require('./../modules/me/patientIndex')}/>
          <Route path="doctor" component={require('./../modules/me/doctorIndex')}/>
        </Route>
        <Route path="ask" component={require('./../modules/ask')}>
          <IndexRoute component={require('./../modules/ask/adapter')}/>
          <Route path="one" component={require('./../modules/ask/one')}/>
        </Route>
        <Route path="address" component={require('./../modules/address')}>
          <IndexRoute component={require('./../modules/address/addrList')}/>
        </Route>
        <Route path="record" component={require('./../modules/record')}>
          <IndexRoute component={require('./../modules/record/detail')}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
);
