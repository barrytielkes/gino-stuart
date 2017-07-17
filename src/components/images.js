import React, { Component } from 'react';
import type { Children } from 'react';
import { css } from 'glamor';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { getCurrentData } from './utils';

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

@firebaseConnect(['pages'])
@connect(({ firebase }) => {
	const pages = dataToJS(firebase, 'pages');
	return {
		pages: pages,
	};
})
export default class Images extends Component {
	props: Props;
	render() {
		const { pages } = this.props;
		const data = getCurrentData(pages);
		if (data) {
			console.log('data.images', Object.keys(data.images));
		}
		// const {data} = this.props;
		//return <div />;
		return (
			<div {...wrapperStyle}>
				{data &&
					Object.keys(data.images).forEach(key => {
						console.log('key', key, data.images[key]);
						return (
							<div {...imageStyle}>
								<img src={data.images[key]} />
							</div>
						);
					})}
			</div>
		);
	}
}
