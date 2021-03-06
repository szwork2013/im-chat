var { combineReducers } = require('redux');
var { createReducer } = require('redux-spliter');
import {actionTypes} from 'constant';
import {routeReducer} from 'react-router-redux';

export default combineReducers({
	router:routeReducer,
	user:createReducer({
		usertype:'0' // 1医生  0患者
	},{
		[actionTypes.SET_USER_DATA](state,action){
			return action.payload
		}
	}),
	myrouter:createReducer({},{
		[actionTypes.ROUTE_SET](state,action){
			return action.payload
		}
	})
})