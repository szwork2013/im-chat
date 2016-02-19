/*
  it will be the entry of webpack
*/
import React from 'react';
import {render} from 'react-dom';
import { createHashHistory } from 'history';
import Client from '.';

if(window.plus || __DEV__ ){
	plusReady();
}else{
	document.addEventListener('plusready',plusReady,false);
}

function plusReady(){
	if(__DEV__){
		try{
			init();
		}catch(e){
			alert(e);
		}
	}else{
		init();
	}
}

function init(){
	render(<Client createHistory={createHashHistory}/>,document.getElementById('app-view'));
}