import classes from './index.module.css';

const Button = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	);
};

export default Button;
