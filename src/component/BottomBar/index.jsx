import React from 'react';
import {FlexContainer,FlexItem} from './../Flex';
import {History} from 'react-router';

export default React.createClass({
	mixins:[History],
	render(){
		const styles = require('./bar.scss');
		return (
			<FlexContainer className={styles.ctn}>
				<FlexItem>咨询</FlexItem>
				<FlexItem onClick={ ()=>this.history.pushState(null,'/address/list')}>通讯录</FlexItem>
				<FlexItem onClick={ ()=>this.history.pushState(null,'/monitor/list')}>监测</FlexItem>
				<FlexItem onClick={ ()=>this.history.pushState(null,'/me/index')}>我</FlexItem>
			</FlexContainer>
		)
	}
})