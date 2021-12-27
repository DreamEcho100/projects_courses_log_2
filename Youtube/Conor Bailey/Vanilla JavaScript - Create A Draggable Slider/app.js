const outerSlider = document.querySelector('.slider');
const innerSlider = document.querySelector('.slider-inner');

let sliderDragAnimationID;
let isDragging = false;
let oldXTranslate = 0;
let currXTranslate = 0;
let sliderXPos = 0;

let outerSliderCoordination;
let firstSliderCoordination;
let lastSliderCoordination;

const touchStart = (event) => {
	isDragging = true;
	oldXTranslate = getPositionX(event);
	outerSlider.style.cursor = 'grabbing';
};

const touchEnd = () => {
	isDragging = false;
	outerSlider.style.cursor = 'grab';
	cancelAnimationFrame(sliderDragAnimationID);
};

const touchMove = (event) => {
	event.preventDefault();
	if (!isDragging || checkSliderBoundary(getPositionX(event) - oldXTranslate))
		return;

	currXTranslate = getPositionX(event);

	sliderXPos += currXTranslate - oldXTranslate;

	sliderDragAnimationID = requestAnimationFrame(sliderDragAnimation);

	oldXTranslate = currXTranslate;
};

outerSlider.addEventListener(
	// 'pointerdown'
	// 'touchstart'
	'mousedown',
	touchStart
);
outerSlider.addEventListener(
	// 'pointerup'
	// 'touchend'
	'mouseup',
	touchEnd
);
outerSlider.addEventListener(
	// 'pointerleave'
	// 'touchend'
	'mouseleave',
	touchEnd
);
outerSlider.addEventListener(
	// 'pointermove'
	// 'touchmove'
	'mousemove',
	touchMove
);

outerSlider.addEventListener('touchstart', touchStart);
outerSlider.addEventListener('touchend', touchEnd);
outerSlider.addEventListener('touchend', touchEnd);
outerSlider.addEventListener('touchmove', touchMove);

const getPositionX = (event) =>
	// event.pointerType === 'mouse' ? event.pageX : event.clientX;
	event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

const checkSliderBoundary = (num) => {
	outerSliderCoordination = outerSlider.getBoundingClientRect();

	if (num > 0) {
		firstSliderCoordination = innerSlider.children[0].getBoundingClientRect();

		if (
			firstSliderCoordination.left +
				firstSliderCoordination.width * 0.05 +
				num >
			outerSliderCoordination.right
		)
			return true;
	} else if (num < 0) {
		lastSliderCoordination =
			innerSlider.children[
				innerSlider.children.length - 1
			].getBoundingClientRect();

		if (
			lastSliderCoordination.right - lastSliderCoordination.width * 0.05 + num <
			outerSliderCoordination.left
		)
			return true;
	}

	return false;
};

const sliderDragAnimation = () => {
	setSliderPosition();
	if (isDragging) requestAnimationFrame(sliderDragAnimation);
};

const setSliderPosition = () => {
	innerSlider.style.transform = `translateX(${sliderXPos}px)`;
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
