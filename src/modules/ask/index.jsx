import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';

@connect(
	state=>state,
	dispatch=>({actions:bindActionCreators(actions,dispatch)})
)
export default class Ask extends React.Component {
  render() {
    return React.cloneElement(this.props.children, {..._.omit(this.props,'children')});
  }
}
