import classes from './index.module.css';

import Button from '@/components/UI/V1/Button';

const Hero = () => {
	return (
		<section className={classes.Hero}>
			<div className={classes.imgHolder}>
				<img
					src={
						'images/KOMBUCHA - Blackberry . Raspberry & Elderflower Organic Sparkling Tea.png'
					}
					alt={
						'KOMBUCHA - Blackberry . Raspberry & Elderflower Organic Sparkling Tea'
					}
				/>
			</div>
			<div className={classes.textHolder}>
				<header className={classes.header}>
					<h1>
						<span>ORGANIC TEA</span>
						<br />
						<span>SPARKLING . TEA</span>
						<br />
						<span>KOMBUCHA</span>
					</h1>
				</header>
				<section className={classes.body}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						consequatur libero beatae at culpa adipisci amet architecto nostrum
						consectetur temporibus, impedit eligendi, cum voluptatum asperiores
						iure quia rerum minima hic.
					</p>
					<form className={classes.form}>
						<div className={classes.formControl}>
							<p>$ 89.99</p>
						</div>
						<Button>BUY NOW</Button>
					</form>
				</section>
				<footer>
					<ul className={classes.features}>
						<li>
							<header>INGREDIENTS</header>
							<section>
								<strong>100% Organic</strong>
							</section>
						</li>
						<li>
							<header>FLAVORS</header>
							<section>
								<strong>5 variants</strong>
							</section>
						</li>
						<li>
							<header>VOLUME</header>
							<section>
								<strong>465</strong>
							</section>
						</li>
					</ul>
				</footer>
			</div>
		</section>
	);
};

export default Hero;
