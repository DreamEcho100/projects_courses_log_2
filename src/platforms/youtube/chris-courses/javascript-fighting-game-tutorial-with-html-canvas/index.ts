const canvas = document.getElementsByTagName('canvas')[0];
if (!canvas) throw new Error('Can not find canvas');

const context = canvas.getContext('2d');
if (!context) throw new Error(' Can not find context');
