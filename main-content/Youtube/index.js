// const SECTION = 'SECTION';
// const SECTION_EMPTY = 'SECTION_EMPTY';
// const SECTION_DEFAULT = 'SECTION_DEFAULT';

// const MAIN_CONTAINER = 'MAIN_CONTAINER';
// const MAIN_CONTAINER_EMPTY = 'MAIN_CONTAINER_EMPTY';
// const MAIN_CONTAINER_DEFAULT = 'MAIN_CONTAINER_DEFAULT';

// const ELEMENT = 'ELEMENT';
// const ELEMENT_DEFAULT = 'ELEMENT_EMPTY';
// const ELEMENT_DEFAULT = 'ELEMENT_DEFAULT';
// const ELEMENT_LIST = 'ELEMENT_LIST';

const YoutubeSection = {
	mainType: SECTION,
	types: [SECTION_DEFAULT],
	name: 'Youtube',
	path: 'Youtube',
	description: '',
	url: '',
	classes: ['main-section', 'Site'],
	items: [],
};

YoutubeSection.items.push({
	mainType: MAIN_CONTAINER,
	types: [MAIN_CONTAINER_DEFAULT],
	name: 'Conor Bailey',
	path: 'Conor Bailey',
	description: '',
	classes: [MAIN_CONTAINER_DEFAULT, 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_DEFAULT],
			name: 'Vanilla JavaScript: Create A Draggable Slider',
			path: 'Vanilla JavaScript - Create A Draggable Slider',
			description: '',
			classes: [ELEMENT_DEFAULT],
		},
	],
});

YoutubeSection.items.push({
	mainType: MAIN_CONTAINER,
	types: [MAIN_CONTAINER_DEFAULT],
	name: 'Franks Laboratory',
	path: 'Franks Laboratory',
	description: '',
	classes: [MAIN_CONTAINER_DEFAULT, 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_DEFAULT],
			name: '2D Game - 1',
			path: '2D Game - 1',
			description: '',
			classes: [ELEMENT_DEFAULT],
		},
	],
});
