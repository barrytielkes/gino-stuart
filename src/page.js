import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { getCurrentData } from './utils';
import Images from './images';

class Page extends Component {
	render() {
		const { pages } = this.props;
		const data = getCurrentData(pages);
		return (
			<div style={{ textAlign: 'center' }}>
				{data &&
					<div>
						<h1>
							{data.content.title}
						</h1>
						<p dangerouslySetInnerHTML={{ __html: data.content.body }} />
					</div>}
				<Images data={data} />
			</div>
		);
	}
}

export default compose(
	firebaseConnect([
		'pages', // { path: 'todos' } // object notation
	]),
	connect(({ firebase }) => ({
		// state.firebase
		pages: dataToJS(firebase, 'pages'),
	}))
)(Page);
