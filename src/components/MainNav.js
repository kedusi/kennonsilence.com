import { sitemap } from '../sitemap';
import Button from '../ui/Button';
import classes from './MainNav.module.css';

const MainNav = () => {
	const navLinks = sitemap.reduce(
		(prev, curr) =>
			curr.inNav
				? prev.concat(
						<Button
							link={curr.url}
							label={curr.pageName}
							color='#00f'
						/>
				  )
				: prev,
		[]
	);

	return <nav className={classes.nav}>{navLinks}</nav>;
};

export default MainNav;
