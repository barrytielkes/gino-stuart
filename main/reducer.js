export default function reducer(state, action) {
	console.log('action', action);
	switch (action.type) {
		case 'SUPER_DISPATCH':
			console.log('SUPER_DISPATCH', action.playload);
			break;
	}
	return Object.assign({}, state, action);
}
