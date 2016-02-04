import React,{ Component } from  'react';
import { Router } from 'react-router';
import {Provider} from 'react-redux';
import routes from './router';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <Router history={this.props.createHistory()}>
                        {routes}
                    </Router>
                </Provider>
            </div>
        );
    }
}
