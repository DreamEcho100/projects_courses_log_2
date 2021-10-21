import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faShoppingCart,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';

import classes from './index.module.css';

const NavList = () => (
	<ul>
		<li>
			<a href='#'>products</a>
		</li>
		<li>
			<a href='#'>story</a>
		</li>
		<li>
			<a href='#'>manufacturing</a>
		</li>
		<li>
			<a href='#'>packaging</a>
		</li>
	</ul>
);

const NavOnBiggerScreens = ({
	showNavOnSmallScreens,
	setShowNavOnSmallScreens,
}) => {
	const [removeSideNav, setRemoveSideNav] = useState(!showNavOnSmallScreens);

	const handleClick = (event) => {
		event.stopPropagation();

		if (event.target.classList.contains('modal-close')) {
			setShowNavOnSmallScreens(false);
		}
	};

	useEffect(
		() => setRemoveSideNav(!showNavOnSmallScreens),
		[showNavOnSmallScreens]
	);

	return (
		<nav
			className={`modal-close ${classes.sideMenu} ${
				showNavOnSmallScreens ? classes.active : ''
			}
			${removeSideNav ? classes.inactive : ''}
			`}
			onClick={handleClick}
		>
			<NavList />
		</nav>
	);
};

const MainHeader = () => {
	const [showNavOnSmallScreens, setShowNavOnSmallScreens] = useState(false);

	return (
		<header className={classes.header}>
			<a href='/' className={classes.logo}>
				KOMBUCHA
			</a>
			<nav className={classes.navOnBiggerScreens}>
				<NavList />
			</nav>
			{/* {showNavOnSmallScreens && (
				<nav className={classes.navOnSmallerScreens}>
					<NavList />
				</nav>
			)} */}
			<NavOnBiggerScreens
				showNavOnSmallScreens={showNavOnSmallScreens}
				setShowNavOnSmallScreens={setShowNavOnSmallScreens}
			/>
			<div className={`${classes.items} buttons-holder`}>
				<button
					className={classes.showSideNavButton}
					title='Click To Show Side Navbar'
					onClick={() => setShowNavOnSmallScreens(!showNavOnSmallScreens)}
					className={`${classes.menuToggleButton} ${
						showNavOnSmallScreens ? classes.active : ''
					}`}
				>
					<span className={`${classes['line-1']} ${classes['line']}`}></span>
					<span className={`${classes['line-2']} ${classes['line']}`}></span>
					<span className={`${classes['line-3']} ${classes['line']}`}></span>
				</button>
				<button title='search'>
					<FontAwesomeIcon icon={faSearch} />
				</button>
				<button title='shopping cart'>
					<FontAwesomeIcon icon={faShoppingCart} />
				</button>
				<button title='profile'>
					<FontAwesomeIcon icon={faUser} />
				</button>
			</div>
		</header>
	);
};

export default MainHeader;
