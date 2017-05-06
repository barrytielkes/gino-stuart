import React from "react";
import ReactDOM from "react-dom";

// import { combineReducers } from "redux";
import { createStore } from "redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "./reducer";
// import App from "./app";
import Home from "./home";
import Photos from "./photos";
import Contact from "./contact";

const store = createStore(reducer);

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
	document.getElementById("root")
);

const NoMatch = ({ location }) => (
	<div>404, page not found, Maggie maybe ate it.</div>
);

setTimeout(() => {
	store.dispatch({
		type: "ADD_USER",
		user: { name: "Dan" }
	});
}, 5000);

// reducer erin
// router erin
// glamor
// firebase
//flow erin
