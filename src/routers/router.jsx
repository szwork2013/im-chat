import React from 'react';
import {Route, IndexRoute} from 'react-router';
import 'react-router-proxy-loader';
import App from './../modules/app';
import NotFound from './../modules/app/404';
import Login from 'react-router-proxy-loader!./../modules/login'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="monitor" component={require('react-router-proxy-loader!./../modules/monitor')}>
        	<IndexRoute component={require('react-router-proxy-loader?name=monitor!./../modules/monitor/adapter')}/>
        	<Route path="detail" component={require('react-router-proxy-loader?name=monitor!./../modules/monitor/detail')}/>
        </Route>
        <Route path="me" component={require('react-router-proxy-loader!./../modules/me')}>
          <IndexRoute component={require('react-router-proxy-loader?name=me!./../modules/me/oprIndex')}/>
          <Route path="patient" component={require('react-router-proxy-loader?name=me!./../modules/me/patientIndex')}/>
          <Route path="doctor" component={require('react-router-proxy-loader?name=me!./../modules/me/doctorIndex')}/>
        </Route>
        <Route path="ask" component={require('react-router-proxy-loader!./../modules/ask')}>
          <IndexRoute component={require('react-router-proxy-loader?name=ask!./../modules/ask/adapter')}/>
          <Route path="one" component={require('react-router-proxy-loader?name=ask!./../modules/ask/one')}/>
        </Route>
        <Route path="address" component={require('react-router-proxy-loader!./../modules/address')}>
          <IndexRoute component={require('react-router-proxy-loader?name=address!./../modules/address/addrList')}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
);
