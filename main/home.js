import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = css({ textAlign: 'center', backgroundColor: 'red' });

class Home extends React.Component {
	render() {
		console.log('Home', this.props.state);
		//setTimeout(this.props.dispatchSomething, 10000);
		return (
			<div {...styles}>
				<h1>Home, ja ja dit is home.....</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		state
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatchSomething: () => {
			dispatch({
				type: 'SUPER_DISPATCH',
				payload: {
					bla: 'blabla'
				}
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
