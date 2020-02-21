import React from 'react';

import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
	<div>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main>
			{props.children}
		</main>
	</div>
);

export default layout;