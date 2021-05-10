/*
const itemsBuilder = ({ items = [], path }) => {
	let htmlTemplate = '';

	items.forEach((item) => {
		if (item.mainType.includes(MAIN_CONTAINER)) {
			if (item.types.includes(MAIN_CONTAINER_DEFAULT)) {
				htmlTemplate += `
        <h3 class='${item.mainType} ${item.types.join(' ')} ${MAIN_CONTAINER}__HEADER'>
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
        <h3 class='${item.mainType} ${item.types.join(' ')} ${MAIN_CONTAINER}__HEADER'>
          <strong>
						empty${item.name ? ` - ${item.name}` : ""}
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
					<a href='${path}/${
						item.path ? item.path : 'index.html'
					}' target='_blank'>
							${item.name}
					</a>
				</li>
      `;
			} else if (item.types.includes(ELEMENT_LIST)) {
				htmlTemplate += `
        <h4 class='${item.mainType} ${item.types.join(' ')} ${ELEMENT}__HEADER'>
          ${item.name}
        </h4>
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
						none${item.name ? ` - ${item.name}` : ""}
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
    <section class='${section.mainType} ${section.types.join(' ')} ${section.classes.join(
			' '
		)}'>
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
	document.body.prepend(mainElement);
};

sectionBuilder(TemplateSection);
*/

const list = [];
const rounds = [1, -1, 1];

for(let i = 0; i < rounds.length; i++) {
  const deg = 360 * rounds[i];
  let startPos = parseFloat(list[list.length -1] ? list[list.length -1] : 0);
  let endPos = deg + startPos;
  if(rounds[i] > 0) {
    while (startPos < endPos) {
      startPos += Math.random();
      list.push(`hsl(${Math.floor(startPos)}, 100%, 50%)`);
    }
  } else if (rounds[i] < 0) {
    while (startPos > endPos) {
      startPos -= Math.random();
      list.push(`hsl(${Math.floor(startPos)}, 100%, 50%)`);
    }
  }
}

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
		
		for(i = 0; i < rounds.length; i++) {
			deg = 360 * rounds[i];
			startPos = parseFloat(array[array.length -1] ? array[array.length -1] : this.startPos);
			endPos = deg + startPos;
			if(rounds[i] > 0) {
				while (startPos < endPos) {
					startPos += Math.random();
					array.push(`hsl(${(startPos).toFixed(2)}, 100%, 50%)`);
				}
			} else if (rounds[i] < 0) {
				while (startPos > endPos) {
					startPos -= Math.random();
					array.push(`hsl(${(startPos).toFixed(2)}, 100%, 50%)`);
				}
			}
		}
	}
}

class spinningBackground {
	constructor(arrayOfhslArray) {
		this.array = [];
		this.arrayOfhslArray = arrayOfhslArray;
		this.length = Math.min(...this.arrayOfhslArray.map(obj => obj.array.length));

		this.backgroundImageList();
	}
	
	backgroundImageList = () => {
		let i;
		const length = this.length
		const arrayOfhslArray = this.arrayOfhslArray;
		let backgroundImagString = '';

			for(i = 0; i < length; i++) {
			backgroundImagString = '';
				backgroundImagString = 'linear-gradient(45deg,';

				arrayOfhslArray.forEach((item, index) => {
					if(index === arrayOfhslArray.length - 1) {
						backgroundImagString += ` ${item.array[i]}`;
						return;
					}
					
					backgroundImagString += ` ${item.array[i]}, `;
				});
				
				backgroundImagString += ')';
				
				this.array.push(backgroundImagString);
			}
		
	}
}

const spinningBackground1 = new spinningBackground(
	[
		new hslArray({rounds: [1.25, -1.5, 1.5, -1.25], startPos: 0}),
		new hslArray({rounds: [1.5, -1, 1.25, -0.5], startPos: 180}),
		new hslArray({rounds: [-1.5, 1.5, -1.25, 0.75], startPos: -180}),
	]
);

console.table(spinningBackground1);