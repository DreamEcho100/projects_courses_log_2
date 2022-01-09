const outerSlider = document.querySelector('.slider');
const innerSlider = document.querySelector('.slider-inner');
const sliderMask = document.querySelector('.slider_mask');

const data = {
	sliderDragAnimationID: 0,
	isPointing: false,
	isDragging: false,
	oldXTranslate: 0,
	currXTranslate: 0,
	sliderXPos: 0,
	outerSliderCoordination: outerSlider.getBoundingClientRect(),
	innerSliderCoordination: innerSlider.getBoundingClientRect(),
	firstSliderCoordination: innerSlider.children[0]?.getBoundingClientRect(),
	lastSliderCoordination:
		innerSlider.children[
			innerSlider.children?.length - 1
		]?.getBoundingClientRect(),
};

const touchStart = (event) => {
	data.isPointing = true;
	data.oldXTranslate = getPositionX(event);
};

const touchEnd = (event) => {
	event.preventDefault();

	if (data.isDragging) {
		data.isPointing = false;
		data.isDragging = false;
		sliderMask.style.pointerEvents = 'none';
		sliderMask.style.cursor = 'grab';
		// innerSlider.style.cursor = 'grab';
		cancelAnimationFrame(data.sliderDragAnimationID);
	}
};

const touchMove = (event) => {
	event.preventDefault();
	if (
		!data.isPointing ||
		checkSliderBoundary(getPositionX(event) - data.oldXTranslate)
	)
		return;

	data.isDragging = true;
	sliderMask.style.pointerEvents = 'auto';
	sliderMask.style.cursor = 'grabbing';
	// innerSlider.style.cursor = 'grabbing';

	data.currXTranslate = getPositionX(event);

	data.sliderXPos += data.currXTranslate - data.oldXTranslate;

	data.sliderDragAnimationID = requestAnimationFrame(sliderDragAnimation);

	data.oldXTranslate = data.currXTranslate;
};

outerSlider.addEventListener('mousedown', touchStart);
outerSlider.addEventListener('mouseup', touchEnd);
outerSlider.addEventListener('mouseleave', touchEnd);
outerSlider.addEventListener('mousemove', touchMove);

outerSlider.addEventListener('touchstart', touchStart);
outerSlider.addEventListener('touchend', touchEnd);
outerSlider.addEventListener('touchend', touchEnd);
outerSlider.addEventListener('touchmove', touchMove);

sliderMask.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	event.stopPropagation();
	return false;
	// if (data.isDragging) {
	// }
});

// window.oncontextmenu = (event) => {
// 	if (data.isDragging) {
// 		event.preventDefault();
// 		event.stopPropagation();
// 		return false;
// 	}
// };

// ['contextmenu', 'mouseup', 'click'].forEach((item) => {
// 	outerSlider.addEventListener(item, (event) => {
// 		console.log('1', 1);
// 		console.log('data.isDragging', data.isDragging);
// 		if (data.isDragging) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 			console.log('2', 2);
// 			console.log('lol');
// 			return false;
// 		}
// 	});
// });

// innerSlider.addEventListener('mouseup', () => {
// 	console.log('data.isDragging', data.isDragging);
// 	console.log('lol');
// });

const getPositionX = (event) =>
	// event.pointerType === 'mouse' ? event.pageX : event.clientX;
	event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

const checkSliderBoundary = (num) => {
	data.outerSliderCoordination = outerSlider.getBoundingClientRect();

	if (num > 0) {
		data.firstSliderCoordination =
			innerSlider.children[0].getBoundingClientRect();

		if (
			data.firstSliderCoordination.left +
				data.firstSliderCoordination.width * 0.05 +
				num >
			data.outerSliderCoordination.right
		)
			return true;
	} else if (num < 0) {
		data.lastSliderCoordination =
			innerSlider.children[
				innerSlider.children.length - 1
			].getBoundingClientRect();

		if (
			data.lastSliderCoordination.right -
				data.lastSliderCoordination.width * 0.05 +
				num <
			data.outerSliderCoordination.left
		)
			return true;
	}

	return false;
};

const sliderDragAnimation = () => {
	setSliderPosition();
	if (data.isDragging) requestAnimationFrame(sliderDragAnimation);
};

const setSliderPosition = () => {
	innerSlider.style.transform = `translateX(${data.sliderXPos}px)`;
};

/*
const slider = document.querySelector('.slider-inner'),
	slides = Array.from(outerSlider.children);
let isDragging = false,
	startPos = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID,
	currentIndex = 0;
slides.forEach((slide, index) => {
	// const slideImage = slide.querySelector('i');
	// disable default image drag
	slide.isDragging = true;
	slide.addEventListener('dragstart', (e) => e.preventDefault());
	// touch events
	slide.addEventListener('touchstart', touchStart(index));
	slide.addEventListener('touchend', touchEnd);
	slide.addEventListener('touchmove', touchMove);
	// mouse events
	slide.addEventListener('mousedown', touchStart(index));
	slide.addEventListener('mouseup', touchEnd);
	slide.addEventListener('mousemove', touchMove);
	slide.addEventListener('mouseleave', touchEnd);
});
// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex);
// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
};
function getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
function touchStart(index) {
	return function (event) {
		currentIndex = index;
		startPos = getPositionX(event);
		isDragging = true;
		animationID = requestAnimationFrame(animation);
		outerSlider.classList.add('grabbing');
	};
}
function touchMove(event) {
	if (isDragging) {
		const currentPosition = getPositionX(event);
		currentTranslate = prevTranslate + currentPosition - startPos;
	}
}
function touchEnd() {
	cancelAnimationFrame(animationID);
	isDragging = false;
	const movedBy = currentTranslate - prevTranslate;
	// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
	// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
	setPositionByIndex();
	outerSlider.classList.remove('grabbing');
}
function animation() {
	setSliderPosition();
	if (isDragging) requestAnimationFrame(animation);
}
function setPositionByIndex() {
	currentTranslate = currentIndex * -window.innerWidth;
	prevTranslate = currentTranslate;
	setSliderPosition();
}
function setSliderPosition() {
	outerSlider.style.transform = `translateX(${currentTranslate}px)`;
}
*/
