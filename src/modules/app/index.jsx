import React from 'react';
import WeUI from 'react-weui';
import 'weui';
import './plus.js';
import './app.scss'

export default class App extends React.Component {
	render() {
        return this.props.children;
    }
}
