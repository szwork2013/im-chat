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
			className={cx(className,"flex-item-1","fa","item",{active:router.location.pathname === to})}
			onClick={()=>this.history.pushState(null,to)}
		><p>{text}</p></div>
	}
})

let tuple = {
	['/ask']:{
		usertype:"all",
		text:"咨询",
		className:"fa-commenting-o"
	},
	['/address']:{
		usertype:"1",
		text:"通讯录",
		className:"fa-industry"
	},
	['/record']:{
		usertype:"0",
		text:"记录",
		className:"fa-area-chart"
	},
	['/monitor']:{
		usertype:"all",
		text:"监测",
		className:"fa-compass"
	},
	['/me']:{
		usertype:"all",
		text:"我",
		className:"fa-user"
	}
}

export function rootName(router){
	let {location:{pathname}} = router;
	let arr = pathname.match(/(\/\w+)/g);
	if(arr.length >=2){
		return tuple[arr[0]].text;
	}else{
		return '';
	}
}

export default React.createClass({
	render(){
		const styles = require('./bar.scss');
		const cx = classNames.bind(styles);
		const {router,user} = this.props;

		let keys = Object.keys(tuple);
		return (
			<div className={styles.fix}>
				<div className={cx('ctn','flex-container')}>
					{
						keys.map(key=>{
							let conf = {key,to:key,router,...tuple[key]};
							return  (conf.usertype === user.usertype || conf.usertype === 'all') ? <BarItem {...conf}/> : null;
						},this)
					}
				</div>
			</div>
		)
	}
})