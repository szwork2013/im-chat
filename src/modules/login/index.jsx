import React from 'react';
import {Link} from 'react-router';
var socket = io();

let view = React.createClass({
	displayName:'login',
	getInitialState(){
		return {
			msg:''
		}
	},
	componentWillMount(){
		socket.on('online',data=>{
			this.setState({
				msg:data.unread
			})
		})
	},
	online(){
		socket.emit('online',{
			ws:Math.random().toString(36),
			sender:'12fbbb'
		});
	},
	offline(){
		socket.emit('offline',{
			ws:Math.random().toString(36),
			sender:'12fbbb'
		});
	},
	sendMsg(){
		socket.emit('msg:send',{
			ws:Math.random().toString(36),
			sender:'12fbbb',
			receiver:'124',
			content:this.state.msg
		});
	},
	updateMsg(e){
		this.setState({
			msg:e.target.value
		})
	},
	render(){
		return <div>
			<textarea value={this.state.msg} onChange={this.updateMsg}></textarea>
			<input type="button" value="online" onClick={this.online}/>
			<input type="button" value="offline" onClick={this.offline}/>
			<input type="button" value="sendmsg" onClick={this.sendMsg}/>
		</div>
	}
})

module.exports = view;