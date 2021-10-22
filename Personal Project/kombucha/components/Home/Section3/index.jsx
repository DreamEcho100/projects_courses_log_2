import classes from './index.module.css';

import ProductData from './ProductData.json';

import Product from './Product';
import SectionHeader from '@/components/UI/V1/SectionHeader';

const Section3 = () => {
	return (
		<section className={classes.section3}>
			<SectionHeader
				h2Text='Arie Kombucha'
				pText="We loved designing this entire series of labels for Singapore based Arie Kombucha. The label' s philosophy concerning fresh and energetic ingredients was key when creating this lively and colorful universe."
			/>
			{ProductData.products.map((product) => (
				<Product {...product} />
			))}
		</section>
	);
};

export default Section3;
