import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { getCurrentData } from './utils';

@firebaseConnect(['pages'])
@connect(({ firebase }) => {
	const pages = dataToJS(firebase, 'pages');
	return {
		pages: pages,
	};
})
export default class Page extends Component {
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
						<p>
							{data.content.body}
						</p>
					</div>}
			</div>
		);
	}
}
