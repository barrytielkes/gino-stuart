import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { createStore } from 'redux';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import history from './history';
import { config } from './firebaseConfig';
/*
// example:
config = {
	apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	authDomain: 'fb-db-name.firebaseapp.com',
	databaseURL: 'https://fb-db-name.firebaseio.com',
	projectId: 'fb-db-name',
	storageBucket: 'fb-db-name.appspot.com',
	messagingSenderId: '012345678910',
};
*/

const rootReducer = combineReducers({
	firebase: firebaseStateReducer,
});

const createStoreWithFirebase = compose(
	reactReduxFirebase(config, {}) //, { userProfile: 'users' })
)(createStore);

const initialState = { firebase: {} };

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
	document.getElementById('root')
);
