import {createStore,applyMiddleware,compose} from 'redux';
import {registerAsyncReducers,getCurrReducers} from './rootReducer';
import {thunk,logger} from 'middlewares';
import {syncHistory, routeReducer} from 'react-router-redux';
import routes from './../routers/router.jsx';

function configureStore(conf) {
    const {createHistory,initialState = {},debug = false} = conf;
    const history = createHistory();
    const middleware = applyMiddleware(thunk,syncHistory(history),logger);
    registerAsyncReducers({router:routeReducer});
    const reducers = getCurrReducers();
    const store = createStore(reducers, initialState, middleware)
    return store;
};
export default configureStore;