import { Link } from "react-router-dom";
import classes from './Button.module.css';

const Button = (props) => {
	const button = (
		<button className={classes.button} style={{ color: props.color, borderColor: props.color }}>
			{props.label}
		</button>
	);

	return (
        <Link to={props.link}>{button}</Link>
	);
};

export default Button;
