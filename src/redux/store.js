import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

//middleWare для подключения redux dev tools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

 //preloadedState начальные данные для store, createStore() -создает сторб аргументы - корневой редьюсер
 const configureStore = preloadedState => createStore(
     reducer,
     preloadedState,
     composeEnhancers(applyMiddleware(sagaMiddleware)),
 );

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;

