export default function reducer(state, action) {
	if (action.data) {
		// console.log('action', action.data);
		return Object.assign({}, state, { db: action.data });
	} else {
		// ui changes:
		switch (action.type) {
			case 'SUPER_DISPATCH':
				console.log('SUPER_DISPATCH', action.playload);
				break;
		}
	}

	return Object.assign({}, state, action);
}
