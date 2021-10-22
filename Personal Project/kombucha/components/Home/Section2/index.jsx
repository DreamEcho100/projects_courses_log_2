import classes from './index.module.css';

import Button from '@/components/UI/V1/Button';
import SectionHeader from '@/components/UI/V1/SectionHeader';

const Section2 = () => {
	return (
		<section className={classes.section2}>
			<SectionHeader
				h2Text='100% Authentic Product'
				pText='And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy.'
			/>
			<main className={classes.features}>
				<section>
					<header className={classes.imgHolder}>
						<img src='images/star badge.png' alt='' />
					</header>
					<section className={classes.textHolder}>
						<p>100% Genuine</p>
						<p>Product Guarantee</p>
					</section>
				</section>
				<section>
					<header className={classes.imgHolder}>
						<img src='images/van.png' alt='' />
					</header>
					<section className={classes.textHolder}>
						<p>Grunted On Time</p>
						<p>Delivery</p>
					</section>
				</section>
				<section>
					<header className={classes.imgHolder}>
						<img src='images/money return.png' alt='' />
					</header>
					<section className={classes.textHolder}>
						<p>100% Return</p>
						<p>Guarantee {'&'} Exchange</p>
					</section>
				</section>
				<section>
					<header className={classes.imgHolder}>
						<img src='images/person female.png' alt='' />
					</header>
					<section className={classes.textHolder}>
						<p>24 x7 Customer</p>
						<p>Support</p>
					</section>
				</section>
			</main>
			<footer>
				<Button>EXPLORE MORE</Button>
			</footer>
		</section>
	);
};

export default Section2;
