import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = css({ label: 'navigation', backgroundColor: 'green' });

export default class Navigation extends React.Component {
	gotoPage = () => {
		console.log('gotoPage'); ///, pageId);
	};

	render() {
		const { pages } = this.props;
		console.log('pages >>', pages);
		return (
			<div {...styles}>
				{pages &&
					Object.keys(pages).map(key => (
						<div key={key} onClick={this.gotoPage(key)}>{key}</div>
					))}
			</div>
		);
	}
}
