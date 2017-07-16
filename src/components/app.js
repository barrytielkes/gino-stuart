import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { css } from 'glamor';
import Home from './home';
import Bio from './bio';
import Shows from './shows';
import Contact from './contact';
import Navigation from './navigation';
import Images from './images';

import {
	firebaseConnect,
	isLoaded,
	isEmpty,
	dataToJS,
} from 'react-redux-firebase';

const logoStyle = css({
	marginTop: '20px',
	marginBottom: '10px',
	maxWidth: '300px',
});

@firebaseConnect(['pages'])
@connect(({ firebase }) => ({
	pages: dataToJS(firebase, 'pages'),
}))
export default class App extends Component {
	test = () => {
		console.log('test');
	};

	render() {
		const { pages } = this.props;
		//console.log('>>>>>>>>>>>>>>>> pages', pages);
		return (
			<div style={{ textAlign: 'center' }}>
				<Link to="/">
					<img {...logoStyle} src={'/logo.png'} />
				</Link>
				<Navigation pages={pages} />
				<Route exact path="/" component={Home} />
				<Route path="/shows/" component={Shows} />
				<Route path="/bio/" component={Bio} />
				<Route path="/contact/" component={Contact} />
				<Images />
			</div>
		);
	}
}

// const mapStateToProps = ({ main }) => {
// console.log('--mapStateToProps >', main, Object.assign({}, main.pages));
// return { pages: Object.assign({}, main.pages) };
// };

// export default connect(mapStateToProps)(App);
