export default function reducer(state, action) {
	//if (action.data) {
	// console.log('reducer A');
	// console.log('action', action.data);
	//	return Object.assign({}, state, { pages: action.data });
	//} else {
	// ui changes:
	/*switch (action.type) {
		case 'SET_PAGE':
			console.log('SET_PAGE', action.playload);

			break;
	}*/
	//}

	// console.log('reducer B');
	return Object.assign({}, state, action);
}
