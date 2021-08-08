// document.body.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const collisionCanvas = document.getElementById('collision-canvas');
const collisionCanvasContext = collisionCanvas.getContext('2d');
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let animateId;
let gameSpeed = 1;
let lives = 3;

let ravens = [];
let explosions = [];
// const ravensColorsId = {};
let timeToNextRaven = 0;
let ravenInterval = 1 * 1000;
let lastTime = 0;
let score = 0;

class Raven {
	constructor() {
		this.spriteWidth = 271;
		this.spriteHeight = 194;
		this.sizeModifier = Math.random() * 0.6 + 0.4;
		this.width = this.spriteWidth * this.sizeModifier;
		this.height = this.spriteHeight * this.sizeModifier;
		this.x = canvas.width;
		this.y = Math.random() * (canvas.height - this.height);
		this.markForDeletion = false;
		this.image = new Image();
		this.image.src = './sprites/raven.png';
		this.frameX = 0;
		this.maxFrameX = 4;
		this.timeSinceFlap = 0;
		this.flapInterval = Math.random() * 100 + 25;
		this.directionX = Math.floor(this.flapInterval * 0.15) + 3;
		this.directionY = Math.floor(this.flapInterval * 0.15) - 5;
		this.randomColor = [
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
		];
		this.color = `rgb(${this.randomColor[0]}, ${this.randomColor[1]}, ${this.randomColor[2]})`;
	}

	draw = () => {
		collisionCanvasContext.fillStyle = this.color;
		collisionCanvasContext.fillRect(this.x, this.y, this.width, this.height);
		context.drawImage(
			this.image,
			this.frameX * this.spriteWidth,
			0,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y,
			this.width,
			this.height
		);
	};

	update = (deltaTime) => {
		if (this.y < 0 || this.y > canvas.height - this.height) {
			this.directionY *= -1;
		}

		this.x -= this.directionX * gameSpeed;
		this.y += this.directionY * gameSpeed;

		if (this.x < 0 - this.width) {
			this.markForDeletion = true;
			lives--;
		}

		this.timeSinceFlap += deltaTime * gameSpeed;

		if (this.timeSinceFlap > this.flapInterval) {
			if (this.frameX > this.maxFrameX) this.frameX = 0;
			else this.frameX++;

			this.timeSinceFlap = 0;
		}
	};
}

class Explosion {
	constructor(x, y, size, frameInterval) {
		this.spriteWidth = 200;
		this.spriteHeight = 179;
		this.x = x;
		this.y = y;
		this.size = size;
		this.image = new Image();
		this.image.src = './sprites/boom.png';
		this.frameX = 0;
		this.maxFrameX = 5;
		this.timeSinceLastFrame = 0;
		this.frameInterval = frameInterval;
		this.sound = new Audio();
		this.sound.src = './audio/Ice attack 2.wav';
		this.markForDeletion = false;
	}

	draw = () => {
		context.drawImage(
			this.image,
			this.frameX * this.spriteWidth,
			0,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y - this.size * 0.25,
			this.size,
			this.size
		);
	};

	update = (deltaTime) => {
		if (this.frameX === 0) this.sound.play();

		this.timeSinceLastFrame += deltaTime * gameSpeed;

		if (this.timeSinceLastFrame > this.frameInterval) {
			this.frameX++;
			this.timeSinceLastFrame = 0;
			if (this.frameX > this.maxFrameX) this.markForDeletion = true;
		}
	};
}

document.body.addEventListener('click', (event) => {
	const detectPixelColor = collisionCanvasContext.getImageData(
		event.x,
		event.y,
		1,
		1
	);

	const pixelColor = detectPixelColor.data;

	console.log('pixelColor', pixelColor);
	ravens.forEach((object) => {
		if (
			object.randomColor[0] === pixelColor[0] &&
			object.randomColor[1] === pixelColor[1] &&
			object.randomColor[2] === pixelColor[2]
		) {
			explosions.push(
				new Explosion(object.x, object.y, object.width, object.flapInterval)
			);
			object.markForDeletion = true;
			score++;
		}
	});
});

const drawScore = () => {
	const text = `Score: ${score}`;
	context.font = '50px Impact';

	context.fillStyle = 'black';
	context.fillText(text, 50, 75);

	context.fillStyle = 'white';
	context.fillText(text, 52.5, 77.5);
};

const drawLives = () => {
	const text = `Lives: ${lives}`;
	context.font = '50px Impact';

	context.fillStyle = 'black';
	context.fillText(text, 50, 125);

	context.fillStyle = 'white';
	context.fillText(text, 52.5, 127.5);
};

const drawGameOver = () => {
	const text = `Game Over`;
	const text2 = `Your Score: ${score}`;
	context.textAlign = 'center';

	context.font = '75px Impact';
	context.fillStyle = 'black';
	context.fillText(text, canvas.width * 0.5, canvas.height * 0.5);
	context.fillStyle = 'white';
	context.fillText(text, canvas.width * 0.5 - 5, canvas.height * 0.5 - 5);

	context.font = '50px Impact';
	context.fillStyle = 'black';
	context.fillText(text2, canvas.width * 0.5, canvas.height * 0.5 + 75);
	context.fillStyle = 'white';
	context.fillText(text2, canvas.width * 0.5 - 5, canvas.height * 0.5 - 5 + 75);
};

let deltaTime;
const animate = (timestamp) => {
	context.clearRect(0, 0, canvas.width, canvas.height);
	collisionCanvasContext.clearRect(0, 0, canvas.width, canvas.height);

	deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	timeToNextRaven += deltaTime;

	if (timeToNextRaven > ravenInterval) {
		ravens.push(new Raven());
		timeToNextRaven = 0;
		ravens.sort((a, b) => a.width - b.width);
	}

	drawScore();

	// [...ravens].forEach((object) => object.update());
	// [...ravens].forEach((object) => object.draw());
	// [...ravens].filter((object) => !object.markForDeletion)
	[...ravens, ...explosions].forEach((object) => {
		object.draw();
		object.update(deltaTime);
	});
	ravens = ravens.filter((object) => !object.markForDeletion);
	explosions = explosions.filter((object) => !object.markForDeletion);

	drawLives();

	if (lives <= 0) {
		drawGameOver();
		return cancelAnimationFrame(animateId);
	}
	animateId = requestAnimationFrame(animate);
};

animate(0);
// });
