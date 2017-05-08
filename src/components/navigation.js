import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = css({ backgroundColor: 'green' });

export default class Navigation extends React.Component {
	render() {
		console.log('pages >>', this.props.pages);
		return <div {...styles}>Nav</div>;
	}
}
