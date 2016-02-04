"use strict";
import {getModuleState} from 'redux-spliter';

export const thunk = store=>next=>action=> {
  return (typeof action === 'function') ? 
    action(store.dispatch, getModuleState(store.getState)) :
    next(action);
};

export const logger = store => next=>action=> {
  __DEV__ && console.log('%c dispatching:',"color: #03A9F4; font-weight: bold", action);
  return (
  	next(action)
  	,(__DEV__ && console.log('%c next state:',"color: #4CAF50; font-weight: bold", store.getState()))
  );
};