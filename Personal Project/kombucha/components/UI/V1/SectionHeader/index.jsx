import classes from './index.module.css';

const SectionHeader = ({ h2Text, pText }) => {
	return (
		<header className={classes.header}>
			<h2>{h2Text}</h2>
			<p>{pText}</p>
		</header>
	);
};

export default SectionHeader;
