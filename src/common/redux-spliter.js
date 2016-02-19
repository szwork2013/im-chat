const prefixType = '__';
const initAction = '@@reduxSpliter/INITIALIZE'
/**
 * @param key
 * @param prefix
 * @returns {*}
 */
function addPrefix(key, prefix) {
    return `${prefix}${prefixType}${key}`;
}

const removePrefix = (key)=> {
    let arr = key.split(prefixType);
    return arr[arr.length - 1];
};

const getPrefix = (key)=> {
    let arr = key.split(prefixType);
    return arr[0];
};

/**
 *
 * @param arrActionType
 * @param prefix
 * @returns {*|{}}
 */
export function createActionTypes(arrActionType, prefix) {
    return arrActionType.reduce((acc, constant) => {
        acc[`${constant}`] = `${prefix}${prefixType}${constant}`;
        return acc;
    }, {});
}

/**
 * {list:reducerFunc}   'DEMO'   ====>  {DEMO__list:reducer}
 *
 * @param state
 * @param prefix
 * @returns
 */
export function addReducerPrefix(state, prefix) {
    if (!state instanceof Object) return console.info('state is not a object');

    let obj = {};
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            obj[`${prefix}${prefixType}${key}`] = state[key];
        }
    }
    return obj;
}

//todo
/**
 * {DEMO__list:reducer}   'DEMO'   ===>  {list:reducerFunc}
 * @param state
 * @param prefix
 * @returns {{}}
 */
export function removeReducerPrefix(state, prefix) {
    let obj = {};
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            let arrKey = key.split(prefixType);
            if (arrKey[0] === prefix) obj[arrKey[1]] = state[key];
        }
    }
    return obj;
}

/**
 *
 * @param initialState
 * @param handlers
 * @returns {Function}
 */
export const createReducer = (initialState, handlers, prefix)=>  (state = initialState, action)=> {
    if (handlers[action.type] instanceof Function) {
        return handlers[action.type](state, action);
    } else if (removePrefix(action.type) === 'INITIALIZE') {
        //var data = _props$data === undefined ? {} : _props$data;   babel
        return getPrefix(action.type) === prefix ? initialState : {};
    } else {
        return state;
    }
};

export const getModuleState = getState => prefix => { return prefix ? removeReducerPrefix(getState(), prefix) : getState() }