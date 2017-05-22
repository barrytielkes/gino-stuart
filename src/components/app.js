import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from './home';
import Photos from './photos';
import Contact from './contact';
import Navigation from './navigation';

import {
	firebaseConnect,
	isLoaded,
	isEmpty,
	dataToJS
} from 'react-redux-firebase';

@firebaseConnect(['/'])
@connect(({ firebase }) => ({
	db: dataToJS(firebase, '/')
}))
class App extends Component {
	test = () => {
		console.log('test');
	};

	render() {
		const { _db } = this.props;
		console.log('this.props <<', this.props);
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Hello World</h1>
				<Navigation pages={_db ? _db.pages : null} />
				<Route exact path="/" component={Home} />
				<Route path="/photos/" component={Photos} />
				<Route path="/contact/" component={Contact} />
			</div>
		);
	}
}

const mapStateToProps = ({ main }) => {
	console.log('mapStateToProps >', Object.assign({}, main.db));
	return { _db: Object.assign({}, main.db) };
};

export default connect(mapStateToProps)(App);
