import React from 'react';
import List from './list';
import One from './one'

export default (props)=>{
	const p = _.omit(props,'children');
	return [<One {...p}/>,<List {...p}/>][p.user.usertype];
}