const solarSystemData = {
	name: 'Solar System',
	planets: [
		{
			name: 'Mercury',
			main_image: {
				alt: 'mercury planet',
				src: 'img/1- Mercury.png',
			},
			description:
				"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.\nFrom the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter\nDespite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.\nBecause of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset.",
			extra_info: {
				length_of_year: '88 Earth Days',
				moons: 0,
				mean_radius: '2,439.7±1.0 km || 0.3829 Earths',
				volume: '6.083×10<sup>10</sup> km3 || 0.056 Earths',
				mass: '3.3011×10<sup>23</sup> kg || 0.055 Earths',
				mean_density: '5.427 g/cm<sup>3</sup>',
				surface_gravity: '3.7 m/s<sup>2</sup>|| 0.38 g',
			},
			useful_links: [
				{
					title: 'MERCURY',
					href: 'https://solarsystem.nasa.gov/planets/mercury/overview/',
				},
				{
					title: 'Mercury (planet)',
					href: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
				},
			],
		},
		{
			name: 'Venus',
			main_image: {
				alt: 'venus planet',
				src: 'img/2- Venus.png',
			},
			description:
				"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.\nVenus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active.\nVenus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter a mile below the ocean on Earth.\nAnother big difference from Earth – Venus rotates on its axis backward, compared to most of the other planets in the solar system. This means that, on Venus, the Sun rises in the west and sets in the east, opposite to what we experience on Earth. (It’s not the only planet in our solar system with such an oddball rotation – Uranus spins on its side.)\nVenus was the first planet to be explored by a spacecraft – NASA’s Mariner 2 successfully flew by and scanned the cloud-covered world on Dec. 14, 1962. Since then, numerous spacecraft from the U.S. and other space agencies have explored Venus, including NASA’s Magellan, which mapped the planet's surface with radar. Soviet spacecraft made the most successful landings on the surface of Venus to date, but they didn’t survive long due to the extreme heat and crushing pressure. An American probe, one of NASA's Pioneer Venus Multiprobes, survived for about an hour after impacting the surface in 1978.\nMore recent Venus missions include ESA’s Venus Express (which orbited from 2006 until 2016) and Japan’s Akatsuki Venus Climate Orbiter (orbiting since 2016). NASA’s Parker Solar Probe has made multiple flybys of Venus, and on July 11, 2020, the probe came within 516 miles of the surface.\nIn June 2021 three new missions to Venus were announced:\nOn June 2, 2021, NASA announced it had selected two new missions to Venus as part of the agency’s Discovery Program. The missions are expected to launch in the 2028-2030 timeframe.\nOn June 10, 2021, the European Space Agency (ESA) announced the selection of EnVision to make detailed observations of Venus. As a key partner in the mission, NASA is providing the Synthetic Aperture Radar, called VenSAR, to make high-resolution measurements of the planet’s surface features.",
			extra_info: {
				length_of_year: '225 Earth Days',
				moons: 0,
				mean_radius: '6,051.8±1.0 km || 0.9499 Earths',
				volume: '9.2843×10<sup>11</sup> km3 ||0.857 Earths',
				mass: '4.8675×10<sup>24</sup> kg ||0.815 Earths',
				mean_density: '5.243 g/cm<sup>3</sup>',
				surface_gravity: '8.87 m/s<sup>2</sup>|| 0.904 g',
			},
			useful_links: [
				{
					title: 'VENUS',
					href: 'https://solarsystem.nasa.gov/planets/venus/overview/',
				},
				{
					title: 'Venus (planet)',
					src: 'https://en.wikipedia.org/wiki/Venus',
				},
			],
		},
		{
			name: 'Earth',
			main_image: {
				alt: 'earth planet',
				src: 'img/3- Earth.png',
			},
			description:
				'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.\nWhile Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.\nThe name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',
			extra_info: {
				length_of_year: '365 Earth Days',
				moons: 1,
				mean_radius: '6371.0 km (3958.8 mi)',
				volume: '1.08321×10<sup>12</sup> km3 (2.59876×10<sup>11</sup> cu mi)',
				mass: '5.97237×10<sup>24</sup> kg (1.31668×10<sup>25</sup> lb)',
				mean_density: '5.514 g/cm<sup>3</sup>(0.1992 lb/cu in)[',
				surface_gravity:
					'9.80665 m/s<sup>2</sup>(1 g; 32.1740 ft/s<sup>2</sup>)',
			},
			useful_links: [
				{
					title: 'Earth',
					href: 'https://solarsystem.nasa.gov/planets/earth/overview/',
				},
				{
					title: 'Earth (planet)',
					src: 'https://en.wikipedia.org/wiki/Earth',
				},
			],
		},
		{
			name: 'Mars',
			main_image: {
				alt: 'mars planet',
				src: 'img/4- Mars.png',
			},
			description:
				"​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.\nMars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.\nNASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars.\nPerseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to the belly of Perseverance.\nPerseverance is one of three spacecraft that arrived at Mars in 2021. The Hope orbiter from the United Arab Emirates arrived on Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021, and includes an orbiter, a lander, and a rover. Europa and India also have spacecraft studying Mars from orbit.\nIn May 2021, China became the second nation to ever land successfully on Mars when its Zhurong Mars rover touched down.\nAn international fleet of eight orbiters is studying the Red Planet from above including three NASA orbiters: 2001 Mars Odyssey, Mars Reconnaissance Orbiter, and MAVEN.\nThese robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
			extra_info: {
				length_of_year: '687 Earth Days',
				moons: 2,
				mean_radius: '3389.5 ± 0.2 km ||(2106.1 ± 0.1 mi)',
				volume: '1.63118×10<sup>11</sup> km3 || (0.151 Earths)',
				mass: '6.4171×10<sup>23</sup> kg || (0.107 Earths)',
				mean_density: '3.9335 g/cm<sup>3</sup>|| (0.1421 lb/cu in)',
				surface_gravity:
					'3.72076 m/s<sup>2</sup>|| (12.2072 ft/s<sup>2;</sup> 0.3794 g)',
			},
			useful_links: [
				{
					title: 'MARS',
					href: 'https://solarsystem.nasa.gov/planets/mars/overview/',
				},
				{
					title: 'Mars (planet)',
					src: 'https://en.wikipedia.org/wiki/Mars',
				},
			],
		},
		{
			name: 'Jupiter',
			main_image: {
				alt: ' planet',
				src: 'img/5- Jupiter.png',
			},
			description:
				"Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.\nFifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.\nJupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.\nOne spacecraft – NASA's Juno orbiter – is currently exploring this giant world.",
			extra_info: {
				length_of_year: '4333 Earth Days',
				moons: 79,
				mean_radius: '69,911 km (43,441 mi)',
				volume:
					'1.4313×10<sup>15</sup> km3 (3.434×10<sup>14</sup> cu mi) || 1,321 Earths',
				mass: '1.8982×10<sup>27</sup> kg (4.1848×10<sup>27</sup> lb) || 317.8 Earths || 1/1047 Sun',
				mean_density: '1,326 kg/m<sup>3</sup>(2,235 lb/cu yd)',
				surface_gravity:
					'24.79 m/s<sup>2</sup>(81.3 ft/s<sup>2</sup>) || 2.528 g',
			},
			useful_links: [
				{
					title: 'JUPITER',
					href: 'https://solarsystem.nasa.gov/planets/jupiter/overview/',
				},
				{
					title: 'Jupiter (planet)',
					src: 'https://en.wikipedia.org/wiki/Jupiter',
				},
			],
		},
		{
			name: 'Saturn',
			main_image: {
				alt: ' planet',
				src: 'img/6- Saturn.png',
			},
			description:
				"Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.\nAdorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.\nLike fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
			extra_info: {
				length_of_year: '10759 Earth Days',
				moons: 62,
				mean_radius: '58,232 km (36,184 mi)',
				volume: '8.2713×10<sup>14</sup> km3 (1.9844×10<sup>14</sup> cu mi)',
				mass: '5.6834×10<sup>26</sup> kg || 95.159 Earths',
				mean_density:
					'0.687 g/cm<sup>3</sup>(0.0248 lb/cu in) (less than water)',
				surface_gravity:
					'10.44 m/s<sup>2</sup>(34.3 ft/s<sup>2</sup>)|| 1.065 g',
			},
			useful_links: [
				{
					title: 'SATURN',
					href: 'https://solarsystem.nasa.gov/planets/saturn/overview/',
				},
				{
					title: 'Saturn (planet)',
					src: 'https://en.wikipedia.org/wiki/Saturn',
				},
			],
		},
		{
			name: 'Uranus',
			main_image: {
				alt: ' planet',
				src: 'img/7- Uranus.png',
			},
			description:
				"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.\nIt was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​",
			extra_info: {
				length_of_year: '30687 Earth Days',
				moons: 27,
				mean_radius: '25,362±7 km',
				volume: '6.833×10<sup>13</sup> km<sup>3</sup>|| 63.086 Earths',
				mass: '(8.6810±0.0013)×10<sup>25</sup> kg || 14.536 Earths',
				mean_density: '1.27 g/cm',
				surface_gravity: '',
			},
			useful_links: [
				{
					title: 'URANUS',
					href: 'https://solarsystem.nasa.gov/planets/uranus/overview/',
				},
				{
					title: 'URANUS (planet)',
					src: 'https://en.wikipedia.org/wiki/Uranus',
				},
			],
		},
		{
			name: 'Neptune',
			main_image: {
				alt: ' planet',
				src: 'img/8- Neptune.png',
			},
			description:
				"Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.\nMore than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.\nNASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.",
			extra_info: {
				length_of_year: ' Earth Days',
				moons: '',
				mean_radius: '24,622±19 km',
				volume: '6.253×10<sup>13</sup> km<sup>3[</sup> || 57.74 Earths',
				mass: '1.02413×10<sup>26</sup> kg || 17.147 Earths || 5.15×10<sup>−5</sup> Suns',
				mean_density: '1.638 g/cm',
				surface_gravity: '11.15 m/s<sup>2</sup>|| 1.14 g',
			},
			useful_links: [
				{
					title: 'NEPTUNE',
					href: 'https://solarsystem.nasa.gov/planets/neptune/overview/',
				},
				{
					title: 'Neptune',
					src: 'https://en.wikipedia.org/wiki/Neptune',
				},
			],
		},
	],
};
