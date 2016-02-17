import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';


@connect(
	state=>state,
	dispatch=>({actions:bindActionCreators(actions,dispatch)})
)
export default class Login extends React.Component {
	componentWillMount(){

	}
	render(){
		const {actions} = this.props;
		return <div>
			<div></div>
			<form onSubmit={actions.doLogin}>
				<input type="text" value={this.props.username} onChange={actions.updateUsername}/>
				<input type="password" value={this.props.password} onChange={actions.updatePassword}/>
				<input type="submit" value="提交"/>
			</form>
      <Link to="monitor">监测</Link>
		</div>
	}
}
