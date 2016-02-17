//var socket = io();

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

export const updateUsername = (e)=>({
		type:'SET_USER_NAME',
		payload:e.target.value
	})

export const updatePassword = (e)=>({
		type:'SET_USER_PASS_WORD',
		payload:e.target.value
	})