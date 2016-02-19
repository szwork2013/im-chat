import React from 'react';
import List from './list';

export default (props)=>{
	const p = _.omit(props,'children');
	//return [<Detail {...p}/>,<List {...p}/>][p.user.usertype];
	return <List {...p}/>;
}