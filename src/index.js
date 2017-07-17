import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { createStore } from 'redux';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/app';
import history from './components/history';

const rootReducer = combineReducers({
	firebase: firebaseStateReducer,
	main: reducer,
});
// const store = createStore(rootReducer);

const config = {
	apiKey: 'AIzaSyDzNaH1lnZEzY8n-2OCilsIId09T4SwpR0',
	authDomain: 'gino-stuart.firebaseapp.com',
	databaseURL: 'https://gino-stuart.firebaseio.com',
	projectId: 'gino-stuart',
	storageBucket: 'gino-stuart.appspot.com',
	messagingSenderId: '978832448706',
};
const createStoreWithFirebase = compose(
	reactReduxFirebase(config, {}), //, { userProfile: 'users' })
)(createStore);

const initialState = { main: {}, firebase: {} };

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route path="*" component={App} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
