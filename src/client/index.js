import React from 'react'
import Root from './../routers/root.jsx';
import configureStore from 'configureStore';

export default (conf)=>{ 
	return <Root store={configureStore(conf)} createHistory={conf.createHistory}/> 
}

