//var socket = io();
import {actionTypes} from 'constant';
import {routeActions} from 'react-router-redux'

export const doLogin = (e) => {
    e.preventDefault();

    return (dispatch, getState) => {
    	const state = getState();

        socket.emit('online', {
            ws: Math.random().toString(36),
            sender: state.user.name
        });
    }
}

export const doctorLogin = ()=>{
    return (dispatch, getState) => {
        dispatch({
            type:actionTypes['SET_USER_DATA'],
            payload:{
                usertype:'1'
            }
        });
        dispatch(routeActions.push('/monitor/list'))
    }
}

export const patientLogin = ()=>{
    return (dispatch, getState) => {
        dispatch({
            type:actionTypes['SET_USER_DATA'],
            payload:{
                usertype:'2'
            }
        });
        dispatch(routeActions.push('/monitor/detail'))
    }
}

export const updateUsername = (e)=>({
		type:actionTypes['SET_USER_NAME'],
		payload:e.target.value
	})

export const updatePassword = (e)=>({
		type:actionTypes['SET_USER_PASS_WORD'],
		payload:e.target.value
	})