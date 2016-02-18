import React from 'react';
import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,ButtonArea, Button} from 'react-weui';
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
		const styles = require('./login.scss');
		const {actions} = this.props;
		return <div>
			<div></div>
			<form onSubmit={actions.doLogin}>
				<Cells>
					<CellsTitle>请登录</CellsTitle>
					<Cell>
						<CellBody>
						用户名
						<input className={styles.input} type="text" value={this.props.username} onChange={actions.updateUsername}/>
						</CellBody>
					</Cell>				
					<Cell>
						<CellBody>
						密　码
						<input className={styles.input} type="password" value={this.props.password} onChange={actions.updatePassword}/>
						</CellBody>
					</Cell>
				</Cells>
				<ButtonArea>
					<Button type="primary">提交</Button>
				</ButtonArea>
			</form>
			<Cells access>
				<Cell onClick={actions.doctorLogin}><CellBody>医生登录</CellBody><CellFooter/></Cell>
				<Cell onClick={actions.patientLogin}><CellBody>患者登录</CellBody><CellFooter/></Cell>
			</Cells>
		</div>
	}
}
