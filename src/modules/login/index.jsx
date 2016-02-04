import React from 'react';
import {Link} from 'react-router';

let view = React.createClass({
	displayName:'login',
	render(){
		return <div>hello world<Link to='/me'>asdfsdfdf</Link></div>
	}
})

module.exports = view;