import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { createStore } from 'redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
// import App from "./app";
import Home from './home';
import Photos from './photos';
import Contact from './contact';

const rootReducer = combineReducers({
	firebase: firebaseStateReducer,
	main: reducer
});
// const store = createStore(rootReducer);

const config = {
	apiKey: 'AIzaSyDzNaH1lnZEzY8n-2OCilsIId09T4SwpR0',
	authDomain: 'gino-stuart.firebaseapp.com',
	databaseURL: 'https://gino-stuart.firebaseio.com',
	projectId: 'gino-stuart',
	storageBucket: 'gino-stuart.appspot.com',
	messagingSenderId: '978832448706'
};
const createStoreWithFirebase = compose(
	reactReduxFirebase(config, {}) //, { userProfile: 'users' })
)(createStore);

const initialState = { main: { test: 'van barry2' } };

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/photos/" component={Photos} />
				<Route path="/contact/" component={Contact} />
				<Route component={NoMatch} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

const NoMatch = ({ location }) => (
	<div>404, page not found, Maggie maybe ate it.</div>
);

//setTimeout(() => {
//	store.dispatch({
//		type: 'ADD_USER',
//		user: { name: 'Dan' }
//	});
//}, 5000);

// firebase
//flow erin
// build process
