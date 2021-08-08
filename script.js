const itemsBuilder = ({ items = [], path }) => {
	let htmlTemplate = '';

	items.forEach((item) => {
		if (item.mainType.includes(MAIN_CONTAINER)) {
			if (item.types.includes(MAIN_CONTAINER_DEFAULT)) {
				htmlTemplate += `
        <h3 class='${item.mainType} ${item.types.join(
					' '
				)} ${MAIN_CONTAINER}__HEADER'>
          <strong>
          	${item.name}
          </strong>
        </h3>
        <ul class='${MAIN_CONTAINER}__BODY'>`;

				htmlTemplate += itemsBuilder({
					items: item.items,
					path: `${path}/${item.path}`,
				});

				htmlTemplate += '</ul>';
			} else if (item.types.includes(MAIN_CONTAINER_EMPTY)) {
				htmlTemplate += `
        <h3 class='${item.mainType} ${item.types.join(
					' '
				)} ${MAIN_CONTAINER}__HEADER'>
          <strong>
						empty${item.name ? ` - ${item.name}` : ''}
					</strong>
        </h3>
        <ul class='${MAIN_CONTAINER}__BODY'>`;

				htmlTemplate += itemsBuilder({
					items: item.items,
				});

				htmlTemplate += '</ul>';
			}
		} else if (item.mainType.includes(ELEMENT)) {
			if (item.types.includes(ELEMENT_DEFAULT)) {
				htmlTemplate += `
				<li class='${item.mainType} ${item.types.join(' ')}}'>
					<a href='${path}/${item.path ? item.path : 'index.html'}' target='_blank'>
							${item.name}
					</a>
				</li>
      `;
			} else if (item.types.includes(ELEMENT_LIST)) {
				htmlTemplate += `
        <h3 class='${item.mainType} ${item.types.join(' ')} ${ELEMENT}__HEADER'>
          <strong>_</strong>${item.name}
        </h3>
        <ul class='${ELEMENT_LIST}__BODY'>`;

				htmlTemplate += itemsBuilder({
					items: item.items,
					path: `${path}/${item.path}`,
				});

				htmlTemplate += '</ul>';
			} else if (item.types.includes(ELEMENT_EMPTY)) {
				htmlTemplate += `
				<li class='${item.mainType} ${item.types.join(' ')}'>
          <em>
						none${item.name ? ` - ${item.name}` : ''}
          </em>
				</li>
      `;
			}
		}
	});

	return htmlTemplate;
};

const sectionBuilder = (section) => {
	let htmlTemplate = '';

	if (section.types.includes(SECTION_DEFAULT)) {
		htmlTemplate += `
    <section class='${section.mainType} ${section.types.join(
			' '
		)} ${section.classes.join(' ')}'>
		<strong>
			<h2 class='${SECTION}__HEADER'>${section.name}</h2>
		</strong>
    <div class='${SECTION}__BODY spinningBackground1'>`;
		htmlTemplate += itemsBuilder({
			items: section.items,
			path: section.path,
		});
		htmlTemplate += `</div></section>`;
	}

	const mainElement = document.createElement('main');
	mainElement.innerHTML = htmlTemplate;
	document.body.append(mainElement);
};

class hslArray {
	constructor(obj) {
		this.array = [];
		this.rounds = obj.rounds;
		this.startPos = obj.startPos;
		this.arrayHandler();
	}

	arrayHandler = () => {
		let i;
		const rounds = this.rounds;
		let deg;
		let startPos = this.startPos;
		const array = this.array;
		let endPos;

		for (i = 0; i < rounds.length; i++) {
			deg = 360 * rounds[i];
			startPos = parseFloat(
				array[array.length - 1] ? array[array.length - 1] : this.startPos
			);
			endPos = deg + startPos;
			if (rounds[i] > 0) {
				while (startPos < endPos) {
					startPos += Math.random();
					array.push(`hsl(${startPos.toFixed(2)}, 100%, 50%)`);
				}
			} else if (rounds[i] < 0) {
				while (startPos > endPos) {
					startPos -= Math.random();
					array.push(`hsl(${startPos.toFixed(2)}, 100%, 50%)`);
				}
			}
		}
	};
}

class spinningBackground {
	constructor({ arrayOfhslArries, degStart, elementsArray }) {
		this.array = [];
		this.degStart = degStart;
		this.elementsArray = elementsArray;
		this.arrayOfhslArries = arrayOfhslArries;
		this.degArray = [];
		this.length = Math.min(
			...this.arrayOfhslArries.map((obj) => obj.array.length)
		);
		this.cssVariable;

		this.handDeg();

		this.backgroundImageList();

		this.setCssVariable();

		this.setCssVariableToElements();

		this.spin();
	}

	backgroundImageList = () => {
		let i;
		const length = this.length;
		const degArray = this.degArray;
		const arrayOfhslArries = this.arrayOfhslArries;
		let backgroundImagString = '';

		for (i = 0; i < length; i++) {
			backgroundImagString = '';
			backgroundImagString = `linear-gradient(${degArray[i]}deg,`;

			arrayOfhslArries.forEach((item, index) => {
				if (index === arrayOfhslArries.length - 1) {
					backgroundImagString += ` ${item.array[i]}`;
					return;
				}

				backgroundImagString += ` ${item.array[i]}, `;
			});

			backgroundImagString += ')';

			this.array.push(backgroundImagString);
		}
	};

	handDeg = () => {
		let deg = this.degStart;
		const arrayOfhslArries = this.arrayOfhslArries;
		const length = this.length;
		const degArray = this.degArray;
		let i;

		for (i = 0; i < length; i++) {
			deg += Math.random();
			degArray.push(deg);
		}
	};

	setCssVariable = () => {
		let tempCssVariable;

		do {
			tempCssVariable = `--${Math.floor(Math.random() * 10 ** 15).toString(
				36
			)}`;
		} while (getComputedStyle(document.body).getPropertyValue(tempCssVariable));

		this.cssVariable = tempCssVariable;

		document.body.style.setProperty(this.cssVariable, this.array[0]);
	};

	setCssVariableToElements = () => {
		this.elementsArray.forEach((element) => {
			element.style.background = `var(${this.cssVariable})`;
		});
	};

	spin = () => {
		let counter = 0;
		let direction = 1;
		const length = this.length - 1;

		// setInterval(() => {
		// 	document.body.style.setProperty(this.cssVariable, this.array[counter]);
		// 	counter += direction;
		// 	if (
		// 		(counter === length && direction === 1) ||
		// 		(counter === 0 && direction === -1)
		// 	) {
		// 		direction *= -1;
		// 	}
		// }, 5);

		const animate = () => {
			document.body.style.setProperty(this.cssVariable, this.array[counter]);
			counter += direction;
			if (
				(counter === length && direction === 1) ||
				(counter === 0 && direction === -1)
			) {
				direction *= -1;
			}

			requestAnimationFrame(animate);
		};

		animate();
	};
}

sectionBuilder(BooksSection);
sectionBuilder(YoutubeSection);

const spinningBackground1 = new spinningBackground({
	arrayOfhslArries: [
		new hslArray({
			rounds: [-3, -3, 4, -2, 4, -2, 5, 3],
			startPos:
				Math.floor(Math.random() * 360) * (Math.random() < 0.5 ? -1 : 1),
		}),
		new hslArray({
			rounds: [4.5, -1, 1.25, -2.5, 1.35, -1.69, 1.74, -3.51],
			startPos:
				Math.floor(Math.random() * 360) * (Math.random() < 0.5 ? -1 : 1),
		}),
		new hslArray({
			rounds: [3, 3, -2, 4, -2, 4, -3, 2],
			startPos:
				Math.floor(Math.random() * 360) * (Math.random() < 0.5 ? -1 : 1),
		}),
	],
	degStart: parseFloat((Math.random() * 360).toFixed(2)),
	elementsArray: [...document.querySelectorAll('.spinningBackground1')],
});
