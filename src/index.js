import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { createStore } from 'redux';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './App';
import history from './history';
import { config } from './firebaseConfig';

const rootReducer = combineReducers({
	firebase: firebaseStateReducer,
	main: reducer,
});
// const store = createStore(rootReducer);

const createStoreWithFirebase = compose(
	reactReduxFirebase(config, {}) //, { userProfile: 'users' })
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
	document.getElementById('root')
);
