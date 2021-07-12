const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g = 0.1;

const balls = []; // new Array();
const numberOfBalls = 25;

function Ball(radius, color) {
	this.radius = radius;
	this.color = color;
	this.x = Math.random() * canvas.width;
	this.y = Math.random() * (canvas.height / 5);
	this.vx = 200 + Math.random() * 50; // 2;
	this.vy = (Math.random() - 0.5) * 4; // 0;
	this.t0 = new Date().getTime();
	this.t1;
}
Ball.prototype.draw = function (context) {
	context.fillStyle = this.color;
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();
};
Ball.prototype.onEachStep = function () {
	this.vy += g;

	// We added three lines here. The first line gets the current time in milliseconds by invoking Date().getTime().
	// The second line works out the time elapsed dt (this notation will become clear in the next chapter) since the last time
	// the call to onEachStep() was made. Here t0 is a variable initialized to new Date().getTime() before the start of the
	// animation. The next line resets t0 so that it can be used for the next call.
	// You’ll see also that we modified the code that updates the ball’s position. We’re now adding an amount vx*dt to
	// the ball’s current position instead of vx, as before. What’s going on here? Well, this is the whole point of calculating
	// the elapsed time dt. You see, previously we were interpreting the velocity vx as pixels moved per frame (if using
	// requestAnimationFrame) or per tick (if using setInterval). In doing so, we were assuming that the frames or ticks
	// were of fixed duration, and that duration was just what we specified in the frame rate or timer delay parameter. As
	// long as those assumptions work, we can use frames or timer ticks as a good proxy for time, and thinking of velocity
	// in terms of pixels per frame or timer tick is a good idea. But what we’re saying is this: let’s get back to thinking about
	// velocity in the correct way, as pixels moved per second. Therefore, in dt seconds, the distance moved is vx*dt, so that
	// the new position is this:
	// ball.x += vx*dt;
	// The advantage of going back to the real meaning of velocity is that the motion is always computed correctly,
	// independently of the frame rate or timer tick rate. This technique will come in handy when we start looking at more
	// complex physics. But even with this simple example, you can see how the animation reflects real physics by varying
	// 	the value of ball.vx, and seeing how the ball moves exactly at the specified velocity in pixels per second.

	this.t1 = new Date().getTime(); // current time in milliseconds
	const dt = 0.001 * (this.t1 - this.t0); // time elapsed in seconds since last call
	this.t0 = this.t1; // reset t0

	this.x += this.vx * dt;
	// this.x += this.vx;
	this.y += this.vy;
	if (this.y > canvas.height - this.radius) {
		this.y = canvas.height - this.radius;
		this.vy *= -0.8;
	}
	if (this.x > canvas.width + this.radius) {
		this.x = -this.radius;
		this.vx = Math.random() * 5;
		this.vy = (Math.random() - 0.5) * 4;
	}
	if (this.x > 0) {
		this.x += this.x * 0.001;
	}
	this.draw(context);
};
const ball = new Ball(20, '#00f');
const animate = () => {
	let i;
	let animateId = undefined;
	let isCancelled = false;
	canvas.addEventListener('mouseenter', () => {
		!isCancelled ? cancelAnimationFrame(animateId) : null;
		isCancelled = true;
	});
	canvas.addEventListener('mousemove', () => {
		!isCancelled ? cancelAnimationFrame(animateId) : null;
		isCancelled = true;
	});
	canvas.addEventListener('mouseleave', () => {
		isCancelled ? playAnimation() : null;
		isCancelled = false;
	});
	const playAnimation = () => {
		// context.clearRect(0, 0, canvas.width, canvas.height);
		// •	 The createLinearGradient(x0, y0, x1, y1) method creates a linear gradient object, where
		// (x0, y0) is the start point and (x1, y1) is the end point of the gradient.

		// •	 The createRadialGradient(x0, y0, r0, x1, y1, r1) method creates a radial gradient
		// object, where (x0, y0) and r0 are the center and radius of the starting circle, and (x1, y1)
		// and r1 are the center and radius of the ending circle of the gradient.

		// •	 The Gradient.addColorStop(offset, color) method adds the specified color and offset
		// position in a canvas gradient object. The offset is a decimal number between 0 and 1, where 0
		// and 1 represent the start and end points in a gradient.
		const gradient = context.createLinearGradient(0, 0, 0, 500);
		gradient.addColorStop(0, '#ffffff');
		gradient.addColorStop(1, '#0000ff');
		context.fillStyle = gradient;
		context.fillRect(0, 0, 700, 500);
		// const gradient1 = context.createRadialGradient(350, 250, 5, 350, 250, 50);
		// gradient1.addColorStop(0, '#ffffff');
		// gradient1.addColorStop(1, '#ff0000');
		// context.fillStyle = gradient1;
		// context.arc(350, 250, 50, 0, 2 * Math.PI, true);
		context.fill();
		for (i = 0; i < numberOfBalls; i++) {
			balls[i].onEachStep();
		}
		// •	 The setTimeout(func,timeDelay) function will execute the specified function func() once
		// after a delay of timeDelay (in milliseconds).

		// •	 The setInterval(func,timeDelay) function will execute the specified function func()
		// repeatedly after successive delays of timeDelay (in milliseconds).

		// •	 The corresponding functions clearTimeout(timerId) and clearInterval(timerId) clear the
		// setTimeout() and setInterval() timers respectively, where timerId is a variable to which
		// they are assigned.

		// The generic syntax for the use of these functions is demonstrated here:
		// intervalID = setInterval(func,timeDelay);
		// function timeDelay(){
		// some code
		// }
		// clearInterval(intervalId);+

		// In recent years, a new API has emerged among web browsers, allowing developers to create HTML5 animations that
		// benefit from browser-based optimizations, allowing significant performance gains over the old setInterval() and
		// setTimeout() methods.

		// The function requestAnimationFrame(someFunction) calls the function someFunction() before redrawing the
		// browser screen. Some browser implementations also include a second parameter to specify the HTML5 element to
		// which the redrawing applies, for example requestAnimationFrame(someFunction, canvas).
		// To create an animation loop using requestAnimationFrame(), you just include it within the function that it calls!

		// Despite the superior performance of the requestAnimationFrame() function compared to setInterval() and
		// setTimeout(), it suffers from the limitation that there is no built-in way to control the frame rate. A simple trick to
		// constrain the frame rate is to nest the requestAnimationFrame() function within a setTimeout() function. In the
		// previous example, we can modify the animFrame() function to the following:
		// function animFrame(){
		// setTimeout(function() {
		// requestAnimationFrame(animFrame,canvas);
		// onEachStep();
		// }, 1000/60);
		// }

		// This of course does not guarantee that the frame rate will be exactly 60 fps. One of the main problems is that the
		// time interval between timer events actually includes the time it takes to execute all the code within the event handler
		// on top of the specified delay. If there is a lot of code in your event handler, it might mean your timer ticking rate is
		// substantially slower than you specified.
		animateId = requestAnimationFrame(playAnimation);
	};
	playAnimation();
};

const init = () => {
	let i, ball;
	for (i = 0; i < numberOfBalls; i++) {
		ball = new Ball(
			Math.floor(Math.random() * 20) + 10,
			`hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`
		);
		ball.x = Math.random() * canvas.width;
		ball.y = Math.random() * (canvas.height / 5);
		ball.vx = Math.random() * 5; // 2;
		ball.vy = (Math.random() - 0.5) * 4; // 0;
		ball.draw(context);
		balls.push(ball);
	}
	animate();
};

window.onload = init;
