import React from 'react';
import {bindActionCreators} from 'redux';
import './plus.js';

export default class app extends React.Component {
	render() {
        return this.props.children;
    }
}