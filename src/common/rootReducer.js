
var { combineReducers } = require('redux');
var { addReducerPrefix } = require('redux-spliter');
var asyncReducers = {};

export function registerAsyncReducers(newAsyncReducers, prefix) {
	if(prefix){
		newAsyncReducers = addReducerPrefix(newAsyncReducers, prefix);
	}
    asyncReducers = {...asyncReducers, ...newAsyncReducers};
}

export function getCurrReducers(){
	return combineReducers(asyncReducers);
};

export function applyCombineReducer(store, newAsyncReducers, prefix){
    registerAsyncReducers(newAsyncReducers, prefix);
    store.replaceReducer(getCurrReducers());
}
