import React from 'react';
import {Route, IndexRoute} from 'react-router';
import 'react-router-proxy-loader';
import App from './../modules/app';
import Login from 'react-router-proxy-loader!./../modules/login'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="monitor" component={require('react-router-proxy-loader!./../modules/monitor')}>
        	<IndexRoute component={require('react-router-proxy-loader!./../modules/monitor/menu')}/>
        	<Route path="list" component={require('react-router-proxy-loader!./../modules/monitor/list')}/>
        	<Route path="detail" component={require('react-router-proxy-loader!./../modules/monitor/detail')}/>
        	<Route path="doctor" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        	<Route path="patient" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        </Route>
        <Route path="me" component={require('react-router-proxy-loader!./../modules/me')}>
          <Route path="index" component={require('react-router-proxy-loader!./../modules/me/oprIndex')}/>
          <Route path="patient" component={require('react-router-proxy-loader!./../modules/me/patientIndex')}/>
          <Route path="doctor" component={require('react-router-proxy-loader!./../modules/me/doctorIndex')}/>
        </Route>
        <Route path="ask" component={require('react-router-proxy-loader!./../modules/ask')}>
          <Route path="patient" component={require('react-router-proxy-loader!./../modules/monitor/doctorMain')}/>
        </Route>
        <Route path="address" component={require('react-router-proxy-loader!./../modules/address')}>
          <Route path="list" component={require('react-router-proxy-loader!./../modules/address/addrList')}/>
        </Route>
        <Route path="*" component={Login}/>
    </Route>
);
