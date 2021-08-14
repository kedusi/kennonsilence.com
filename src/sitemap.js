import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const sitemap = [
	{
		pageName: 'Home',
		pageComponent: <Home />,
		title: 'KennonSilence.com',
		url: '/',
		inNav: true,
	},
	{
		pageName: 'About',
		pageComponent: <About />,
		title: 'About Kennon',
		url: '/about',
		inNav: true,
	},
	{
		pageName: 'Projects',
		pageComponent: <Projects />,
		title: 'My Projects',
		url: '/projects',
		inNav: true,
	},
	{
		pageName: 'Contact',
		pageComponent: <Contact />,
		title: 'Contact Kennon',
		url: '/contact',
		inNav: true,
	},
];