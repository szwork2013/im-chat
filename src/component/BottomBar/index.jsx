import React from 'react';
import classNames from 'classnames/bind';
import {History} from 'react-router';

let BarItem = React.createClass({
	mixins:[History],
	render(){
		const styles = require('./bar.scss');
		const cx = classNames.bind(styles);
		const { className,to,text,router } = this.props;
		return <div 
			className={cx(className,"flex-item-1",{active:router.location.pathname === to})}
			onClick={()=>this.history.pushState(null,to)}
		>{text}</div>
	}
})

export default React.createClass({
	render(){
		const styles = require('./bar.scss');
		const cx = classNames.bind(styles);
		const {router,user} = this.props;

		let html = null;
		if(user.usertype==='1'){
			html = <BarItem to="/address" text="通讯录" router={router}/>
		}else{
			html = <BarItem to="/record" text="记录" router={router}/>
		}
		return (
			<div className={cx('ctn','flex-container')}>
				<BarItem to="/ask" text="咨询" router={router}/>
				{html}
				<BarItem to="/monitor" text="监测" router={router}/>
				<BarItem to="/me" text="我" router={router}/>
			</div>
		)
	}
})