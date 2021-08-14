import { Fragment } from 'react';
import MainNav from '../components/MainNav';

const Layout = (props) => {
	return (
		<Fragment>
			<MainNav />
			{props.children}
		</Fragment>
	);
};

export default Layout;
