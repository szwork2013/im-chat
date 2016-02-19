import React from 'react';
import List from './list';
import Detail from './detail';

export default (props)=>{
	const p = _.omit(props,'children');
	return [<Detail {...p}/>,<List {...p}/>][p.user.usertype];
}