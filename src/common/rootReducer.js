var { combineReducers } = require('redux');
var { createReducer } = require('redux-spliter');
import {actionTypes} from 'constant';
import {routeReducer} from 'react-router-redux';

export default combineReducers({
	router:routeReducer,
	user:createReducer({},{
		[actionTypes.SET_USER_DATA](state,action){
			return action.payload
		}
	})
})