const SECTION = 'SECTION';
const SECTION_EMPTY = 'SECTION_EMPTY';
const SECTION_DEFAULT = 'SECTION_DEFAULT';

const MAIN_CONTAINER = 'MAIN_CONTAINER';
const MAIN_CONTAINER_EMPTY = 'MAIN_CONTAINER_EMPTY';
const MAIN_CONTAINER_DEFAULT = 'MAIN_CONTAINER_DEFAULT';

const ELEMENT = 'ELEMENT';
const ELEMENT_EMPTY = 'ELEMENT_EMPTY';
const ELEMENT_DEFAULT = 'ELEMENT_DEFAULT';
const ELEMENT_LIST = 'ELEMENT_LIST';

const BooksSection = {
	mainType: SECTION,
	types: [SECTION_DEFAULT],
	name: 'Books',
	path: 'Books',
	description: '',
	url: '',
	classes: ['main-section', 'Site'],
	items: [],
};

BooksSection.items.push({
	mainType: MAIN_CONTAINER,
	types: [MAIN_CONTAINER_DEFAULT],
	name: 'Physics For JavaScript Games, Animation, And Simulations',
	path: 'Physics For JavaScript Games, Animation, And Simulations',
	description: '',
	classes: [MAIN_CONTAINER_DEFAULT, 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_LIST],
			name: 'Part I',
			path: 'Part I',
			description: '',
			classes: [ELEMENT_LIST],
			items: [
				{
					mainType: ELEMENT,
					types: [ELEMENT_LIST],
					name: 'Chapter 1_ Introduction To Physics Programming',
					path: 'Chapter 1_ Introduction To Physics Programming',
					description: '',
					classes: [ELEMENT_LIST],
					items: [
						{
							mainType: ELEMENT,
							types: [ELEMENT_DEFAULT],
							name: '1- Gravity - Coding Up A Bouncing Ball In 2D',
							path: '1- Gravity - Coding Up A Bouncing Ball In 2D/index.html',
							description: '',
							classes: [ELEMENT_DEFAULT],
							tech: ['HTML', 'CSS', 'JavaScript'],
						},
					],
				},
				{
					mainType: ELEMENT,
					types: [ELEMENT_LIST],
					name: 'Chapter 2_ JavaScript And HTML5 Canvas Basics',
					path: 'Chapter 2_ JavaScript And HTML5 Canvas Basics',
					description: '',
					classes: [ELEMENT_LIST],
					items: [
						{
							mainType: ELEMENT,
							types: [ELEMENT_DEFAULT],
							name: '1- JavaScript Objects And Classes',
							path: '1- JavaScript Objects And Classes/index.html',
							description: '',
							classes: [ELEMENT_DEFAULT],
							tech: ['HTML', 'CSS', 'JavaScript'],
						},
					],
				},
			],
		},
	],
});
