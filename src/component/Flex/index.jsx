import React from 'react';
import classNames from 'classnames/bind';

export const FlexContainer = (props={})=>{
	const styles = require('./flex.scss');
	const cx = classNames.bind(styles);
	return <div {...props} className={cx('cnt',props.className)}/>
}

export const FlexItem = (props={})=>{
	const styles = require('./flex.scss');
	const cx = classNames.bind(styles);
	return <div  {...props} className={cx(`itm`,props.className)}/>
}