const SECTION = 'SECTION';
const SECTION_EMPTY = 'SECTION_EMPTY';
const SECTION_DEFAULT = 'SECTION_DEFAULT';

const CARD = 'CARD';
const CARD_EMPTY = 'CARD_EMPTY';
const CARD_DEFAULT = 'CARD_DEFAULT';

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
	mainType: CARD,
	types: [CARD_DEFAULT],
	name: 'Testing || && <>',
	path: 'Testing',
	description: '',
	classes: [CARD_DEFAULT, 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_DEFAULT],
			name: '1 @#$%^&',
			// path: '1',
			// fileName: 'index.html',
			description: '1',
			difficulty: '',
			tech: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			mainType: ELEMENT,
			types: [ELEMENT_EMPTY],
			name: '',
			// path: '',
			description: '',
			difficulty: '',
			tech: [],
		},
	],
});

TemplateSection.items.push({
	mainType: CARD,
	types: [CARD_EMPTY],
	name: '',
	description: '',
	classes: ['CARD_EMPTY', 'spinningBackground1'],
	items: [
		{
			mainType: ELEMENT,
			types: [ELEMENT_EMPTY],
			name: '',
			description: '',
			difficulty: '',
			tech: [],
		},
	],
});
