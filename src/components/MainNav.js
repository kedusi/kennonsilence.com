import { Fragment } from "react";
import { Link } from "react-router-dom";
import { sitemap } from "../sitemap";

const MainNav = () => {
    const navLinks = sitemap.reduce((prev, curr) => 
        curr.inNav ? prev.concat(<Link to={curr.url}>{curr.pageName}</Link>) : prev
    , []);

    return <Fragment>
        {navLinks}
    </Fragment>
};

export default MainNav;