import { compose,createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [composeEnhancers(applyMiddleware(...middleware))];
const store = createStore(rootReducer, undefined, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
