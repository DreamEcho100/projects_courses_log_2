import MainHeader from './MainHeader';
// import MainIntro from './MainIntro';

const Layout = ({ children }) => {
	return (
		<>
			<MainHeader />
			{children}
			{/* <MainIntro /> */}
		</>
	);
};

export default Layout;
