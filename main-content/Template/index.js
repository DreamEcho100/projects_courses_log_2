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

const TemplateSection = {
	mainType: SECTION,
	types: [SECTION_DEFAULT],
	name: 'Template',
	path: 'Testing',
	description: '',
	url: '', 
	classes: ['main-section', 'Site'],
	items: [],
};

TemplateSection.items.push({
	mainType: MAIN_CONTAINER,
	types: [MAIN_CONTAINER_DEFAULT],
	name: 'Testing || && <>',
	path: 'Testing',
	description: '',
	classes: [MAIN_CONTAINER_DEFAULT, 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_DEFAULT],
			name: '1 @#$%^&',
			// path: '1',
			// fileName: 'index.html',
			description: '1',
			tech: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			mainType: ELEMENT,
			types: [ELEMENT_DEFAULT],
			name: '2 @#$%^&',
			// path: '1',
			// fileName: 'index.html',
			description: '2',
			tech: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			mainType: ELEMENT,
			types: [ELEMENT_LIST],
			name: '3 @#$%^&',
			path: '3',
			description: '3',
			tech: ['HTML', 'CSS', 'JavaScript'],
			items: [
				{
					mainType: ELEMENT,
					types: [ELEMENT_DEFAULT],
					name: '3.1 @#$%^&',
					description: '3.1',
					tech: ['HTML', 'CSS', 'JavaScript'],
				},
				{
					mainType: ELEMENT,
					types: [ELEMENT_EMPTY],
					name: '',
					// path: '',
					description: '',
					tech: [],
				},
			]
		},
		{
			mainType: ELEMENT,
			types: [ELEMENT_EMPTY],
			name: '',
			// path: '',
			description: '',
			tech: [],
		},
	],
});

TemplateSection.items.push({
	mainType: MAIN_CONTAINER,
	types: [MAIN_CONTAINER_EMPTY],
	name: '',
	description: '',
	classes: ['MAIN_CONTAINER_EMPTY', 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_EMPTY],
			name: '',
			description: '',
			tech: [],
		},
	],
});
