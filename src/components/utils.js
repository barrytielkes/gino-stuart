import history from './history';

export const getCurrentData = pages => {
	return pages ? pages[history.location.pathname.substr(1)] : null;
};
