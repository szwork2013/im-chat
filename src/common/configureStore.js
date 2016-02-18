import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './rootReducer';
import {thunk,logger} from 'middlewares';
import {syncHistory} from 'react-router-redux';
import routes from './../routers/router.jsx';

function configureStore(conf) {
    const {createHistory,initialState = {},debug = false} = conf;
    const history = createHistory();
    const middleware = applyMiddleware(thunk,syncHistory(history),logger);
    const store = createStore(rootReducer, initialState, middleware)
    return store;
};
export default configureStore;