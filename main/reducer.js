const initialState = { test: 'van barry' };

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SUPER_DISPATCH':
			console.log('SUPER_DISPATCH', action.playload);
			break;
	}
	return Object.assign({}, state, action);
}
