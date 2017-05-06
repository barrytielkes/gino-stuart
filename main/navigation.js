import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { css } from 'glamor';
import {
	firebaseConnect,
	isLoaded,
	isEmpty,
	dataToJS
} from 'react-redux-firebase';
const styles = css({ backgroundColor: 'green' });

// { path: '/pages' } // object notation
// Connect pages prop to firebase pages
@firebaseConnect(['/'])
@connect(({ firebase }) => ({
	db: dataToJS(firebase, '/')
}))
export default class Navigation extends React.Component {
	render() {
		console.log('pages', this.props);
		return <div {...styles}>Nav</div>;
	}
}

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*export default compose(
	firebaseConnect(['/pages']),
	connect(({ firebase }) => ({ pages: dataToJS(firebase, '/pages') }))
)(Navigation);
*/
