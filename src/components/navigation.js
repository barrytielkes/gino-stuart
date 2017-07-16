import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

const styles = css({ label: 'navigation', color: 'black' });

const itemStyle = css({
	label: 'nav-item',
	cursor: 'pointer',
	display: 'inline-block',
	padding: '10px',
});

export default class Navigation extends React.Component {
	render() {
		const { pages } = this.props;
		return (
			<div {...styles}>
				{pages &&
					Object.keys(pages).map(key =>
						<Link key={key} {...itemStyle} to={pages[key].path}>
							{pages[key].button}
						</Link>,
					)}
			</div>
		);
	}
}
// activeStyle={{ textDecoration: 'underline' }}
