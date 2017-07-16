import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

@firebaseConnect(['pages'])
@connect(({ firebase }) => {
	const d = dataToJS(firebase, 'pages');
	return {
		data: d ? d.contact : null,
	};
})
export default class Contact extends Component {
	render() {
		const { data } = this.props;
		console.log('%%%%%%%%pages', data);
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
