import React, { Component } from 'react';
import type { Children } from 'react';
import { css } from 'glamor';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

const wrapperStyle = css({
	label: 'imagesWrapper',
});

const imageStyle = css({
	label: 'image',
});

type Props = {
	data: Array<String>,
	children?: Children,
};

@firebaseConnect(['main'])
@connect(({ firebase }) => {
	const d = dataToJS(firebase, 'main');
	console.log('images', d, firebase);
	return {};
	return {
		data: d ? d.bio : null,
	};
})
export default class Images extends Component {
	props: Props;
	render() {
		// const {data} = this.props;
		return <div />;
		/*return (
			<div {...wrapperStyle}>
				{data.forEach(image => <div {...imageStyle}><img src={image}></div>)}
			</div>
		);*/
	}
}
