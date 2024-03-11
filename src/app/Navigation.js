import * as React from 'react';

const navigationRef = React.createRef();

const Navigation = {
	ref: navigationRef,
	goTo: (viewName, props) => {
		navigationRef.current?.navigate(viewName, props);
	},
};

export default Navigation;
