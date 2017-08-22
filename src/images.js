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
	data: Object,
	// children?: Children,
};

export default class Images extends Component {
	props: Props;
	render() {
		const { data } = this.props;
		// const data = getCurrentData(pages);
		// console.log('!!!!!data.images');
		// if (data) {
		// }
		// const {data} = this.props;
		//return <div />;
		return (
			<div {...wrapperStyle}>
				{data &&
					Object.keys(data.images).map(key => {
						console.log('key', key, data.images[key]);
						return (
							<div {...imageStyle} key={key}>
								<img src={data.images[key]} />
							</div>
						);
					})}
			</div>
		);
	}
}
