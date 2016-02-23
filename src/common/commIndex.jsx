import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


export default (actions)=>{
	@connect(
		state=>state,
		dispatch=>({actions:bindActionCreators(actions,dispatch)})
	)
	class Index extends React.Component {
	  render() {
	  	const {children,...others} = this.props;
	    return React.cloneElement(this.props.children, others);
	  }
	}

	return Index;
}