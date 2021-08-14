import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import { sitemap } from './sitemap';

function App() {
	const routes = sitemap.reduce((prev, curr) => 
		curr.inNav ? prev.concat(<Route path={curr.url} exact>{curr.pageComponent}</Route>) : prev
	, []);

	return (
		<Layout>
			<Switch>
				{routes}
			</Switch>
		</Layout>
	);
}

export default App;
