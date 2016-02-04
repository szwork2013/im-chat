import React from 'react';
import {Link} from 'react-router';

let view = React.createClass({
	displayName:'login',
	componentWillMount(){
		var socket = io();
		console.log(io);
		socket.emit('myevent',{
			sender:'12fbbb',
			receiver:'124',
			content:Math.random().toString()
		});
	},
	render(){
		return <div>
		hello world
		<Link to='/me'>asdfsdfdf</Link>
		</div>
	}
})

module.exports = view;