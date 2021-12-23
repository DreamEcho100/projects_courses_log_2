const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let oldXPos = 0;
let currXPos = 0;
let sliderXPos = 0;

slider.addEventListener(
	/*'mousedown'*/ 'pointerdown' /*'touchstart'*/,
	(event) => {
		pressed = true;
		oldXPos = getPositionX(event);
		slider.style.cursor = 'grabbing';
	}
);

slider.addEventListener(/*'mouseup'*/ 'pointerup' /*'touchend'*/, (event) => {
	slider.style.cursor = 'grab';
});

window.addEventListener(/*'mouseup'*/ 'pointerup' /*'touchend'*/, (event) => {
	pressed = false;
	slider.style.cursor = 'grab';
});
slider.addEventListener(
	/*'mousemove'*/ 'pointermove' /*'touchmove'*/,
	(event) => {
		event.preventDefault();
		if (!pressed || checkSliderBoundary(getPositionX(event) - oldXPos)) return;

		currXPos = getPositionX(event);

		sliderXPos += currXPos - oldXPos;

		innerSlider.style.transform = `translateX(${sliderXPos}px)`;

		oldXPos = currXPos;
	}
);

const getPositionX = (event) =>
	event.pointerType === 'mouse' ? event.pageX : event.clientX;

let outerSliderCoordination;
let innerSliderCoordination;

const checkSliderBoundary = (num) => {
	outerSliderCoordination = slider.getBoundingClientRect();
	innerSliderCoordination =
		innerSlider.children[
			innerSlider.children.length - 1
		].getBoundingClientRect();

	if (
		(num < 0 &&
			innerSliderCoordination.left +
				innerSliderCoordination.width * 0.95 +
				num <
				outerSliderCoordination.left) ||
		(num > 0 &&
			innerSliderCoordination.x + num >
				outerSliderCoordination.right - outerSliderCoordination.width * 0.05) // Right boundary Check
	) {
		return true;
	}

	return false;
};
