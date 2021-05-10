const itemsBuilder = ({ items = [], path }) => {
	let htmlTemplate = '';

	items.forEach((item) => {
		if (item.mainType.includes(CARD)) {
			if (item.types.includes(CARD_DEFAULT)) {
				htmlTemplate += `
        <h3 class='${CARD} ${CARD_DEFAULT} ${CARD}__header'>
          ${item.name}
        </h3>
        <div class='${CARD}__body'>`;

				htmlTemplate += itemsBuilder({
					items: item.items,
					path: `${path}/${item.path}`,
				});

				htmlTemplate += '</div>';
			}
		} else if (item.mainType.includes(ELEMENT)) {
			if (item.types.includes(ELEMENT_DEFAULT)) {
				htmlTemplate += `
        <a class='${ELEMENT} ${ELEMENT_DEFAULT}' href="${path}/${
					item.path ? item.path : 'index.html'
				}" target="_blank">
            ${item.name}
        </a>
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
    <section class="${SECTION} ${SECTION_DEFAULT} ${section.classes.join(
			' '
		)}"><h2 class='${SECTION}__header'>${section.name}</h2>
    <div class='${SECTION}__body'>'`;
		htmlTemplate += itemsBuilder({
			items: section.items,
			path: section.path,
		});
		htmlTemplate += `</div></section">`;
	}

	const mainElement = document.createElement('main');
	mainElement.innerHTML = htmlTemplate;
	document.body.prepend(mainElement);
};

sectionBuilder(TemplateSection);
