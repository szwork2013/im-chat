import React from 'react';
import {Msg} from 'react-weui';

export default React.createClass({
	render(){
		return <Msg type="warn" title="找不到页面" description="你访问的页面不存在"
			buttons={[{label:'返回',onClick:()=>history.back()}]}
		/>
	}
});