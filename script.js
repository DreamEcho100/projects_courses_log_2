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
