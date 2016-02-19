import React from 'react';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import BottomBar from 'bottomBar'
import classNames from 'classnames/bind';

let ChatOne = (props)=>{
	const styles = require('./ask.scss');
	const cx = classNames.bind(styles);
	
	return <div className={cx('one','flex-container')}>
		<div className={styles.left}>
			{ props.self || <img className={styles.head} src={props.head}/> }
		</div>
		<div className={cx('flex-item-1','middle',{self:props.self})}>
			{props.children}
		</div>
		<div className={styles.right}>
			{ props.self && <img className={styles.head} src={props.head}/> }
		</div>
	</div>
}

export default React.createClass({
	render(){

	const styles = require('./ask.scss');
	const cx = classNames.bind(styles);

	const hdpng = require('./../../assets/head.png');
	const hdpng2 = require('./../../assets/head2.png');

		return (
			<div>
				<Hd>
			        <HdLeft>返回</HdLeft>
			        <HdMiddle>用户名</HdMiddle>
			        <HdRight>图标</HdRight>
		      	</Hd>
		      	<div className={styles['chat-wrap']}>
		      		<ChatOne head={hdpng}>
	      				Clear up the coupling between History and Router with simpler APIs.
		      		</ChatOne>
		      		<ChatOne head={hdpng2} self={true}>
		      			Provide cleaner integrations with other libraries like Redux, Relay, Async Props etc.
		      		</ChatOne>		      		
		      		<ChatOne head={hdpng}>
	      				中文
		      		</ChatOne>
		      	</div>
		      	<div className={styles['input-area']}>
		      		<form onSubmit={(e)=>{e.preventDefault()}}>
		      			<input type="text" className={styles.input} contenteditorable={true}/>
		      		</form>
		      	</div>
			</div>
		)
	}
})