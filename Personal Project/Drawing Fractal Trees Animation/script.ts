type TDrawTree = ({
	startX,
	startY,
	shapeLength,
	angle,
	branchWidth,
	color1,
	color2,
	curve,
	curve2,
	shapeLengthLimit,
}: {
	startX: number;
	startY: number;
	shapeLength: number;
	angle: number;
	branchWidth: number;
	color1: string | CanvasGradient | CanvasPattern;
	color2: string | CanvasGradient | CanvasPattern;
	curve: number;
	curve2: number;
	shapeLengthLimit: number;
}) => Promise<void>;

const generateRandomTreeBtn = document.getElementById('generate-tree-btn');
const canvas = <HTMLCanvasElement>document.getElementById('canvas1');
const context = canvas.getContext('2d');
if (context) {
	context.imageSmoothingEnabled = false;
}

canvas.width = 800;
canvas.height = 500;

const xdrawTree: TDrawTree = async ({
	startX,
	startY,
	shapeLength,
	angle,
	branchWidth,
	color1,
	color2,
	curve,
	curve2,
	shapeLengthLimit,
}) => {
	if (!context) return;

	context.beginPath();
	context.save();
	context.strokeStyle = color1;
	context.fillStyle = color2;

	context.shadowBlur = 15;
	context.shadowColor = 'rgba(0, 0, 0, 0.5)';

	context.lineWidth = branchWidth;
	context.translate(startX, startY);
	context.rotate((Math.PI / 180) * angle);
	context.moveTo(0, 0);

	if (angle > 0) {
		// context.bezierCurveTo(
		// 	20,
		// 	-shapeLength / 2,
		// 	20,
		// 	-shapeLength,
		// 	0,
		// 	-shapeLength /* * 1.12*/
		// );
		context.lineTo(0, -shapeLength);
	} else {
		// context.bezierCurveTo(
		// 	20,
		// 	-shapeLength / 2,
		// 	20,
		// 	-shapeLength,
		// 	0,
		// 	-shapeLength /* * 1.12*/
		// );
		context.lineTo(0, -shapeLength);
	}

	context.stroke();
	context.closePath();

	if (shapeLength < shapeLengthLimit) {
		context.beginPath();
		context.arc(0, -shapeLength, 15, 0, Math.PI / 2);
		context.fill();
		context.closePath();
		context.restore();
		return;
	}
	curve = Math.random() * 10 + 10;

	await drawTree({
		startX: 0,
		startY: -shapeLength,
		shapeLength: shapeLength * 0.75,
		angle: angle + curve,
		branchWidth: branchWidth * 0.65,
		color1: color1,
		color2: color2,
		curve,
		curve2,
		shapeLengthLimit,
	});
	await drawTree({
		startX: 0,
		startY: -shapeLength,
		shapeLength: shapeLength * 0.75,
		angle: angle - curve,
		branchWidth: branchWidth * 0.65,
		color1: color1,
		color2: color2,
		curve,
		curve2,
		shapeLengthLimit,
	});

	context.restore();
};
const drawTree: TDrawTree = async ({
	startX,
	startY,
	shapeLength,
	angle,
	branchWidth,
	color1,
	color2,
	curve,
	curve2,
	shapeLengthLimit,
}) => {
	if (!context) return;

	context.beginPath();
	// context.save();
	context.strokeStyle = color1;
	context.fillStyle = color2;

	context.shadowBlur = 15;
	context.shadowColor = 'rgba(0, 0, 0, 0.5)';

	context.lineWidth = branchWidth;
	context.lineTo(startX, startY);
	// context.rotate((Math.PI / 180) * angle);
	// context.moveTo(0, 0);
	// console.log('startY', startY);
	startX += Math.cos(angle) * shapeLength;
	startY += Math.sin(angle) * shapeLength;

	context.lineTo(startX, startY);
	// if (angle > 0) {
	// context.bezierCurveTo(
	// 	startX + 20,
	// 	startY - shapeLength / 2,
	// 	startX + 20,
	// 	startY - shapeLength,
	// 	startX + 0,
	// 	startY - shapeLength /* * 1.12*/
	// );
	// context.lineTo(startX, startY);
	// } else {
	// context.bezierCurveTo(
	// 	20,
	// 	-shapeLength / 2,
	// 	20,
	// 	-shapeLength,
	// 	0,
	// 	-shapeLength /* * 1.12*/
	// );
	// context.lineTo(startX, startY);
	// }

	context.stroke();
	context.closePath();

	if (shapeLength < shapeLengthLimit) {
		context.beginPath();
		context.arc(startX, startY, 15, 0, Math.PI / 2);
		context.fill();
		context.closePath();
		// context.restore();
		return;
	}
	curve = Math.random() * 10 + 10;

	await drawTree({
		startX,
		startY,
		shapeLength: shapeLength * 0.75,
		angle: angle + curve,
		branchWidth: branchWidth * 0.65,
		color1: color1,
		color2: color2,
		curve,
		curve2,
		shapeLengthLimit,
	});
	await drawTree({
		startX,
		startY,
		shapeLength: shapeLength * 0.75,
		angle: angle - curve,
		branchWidth: branchWidth * 0.65,
		color1: color1,
		color2: color2,
		curve,
		curve2,
		shapeLengthLimit,
	});

	// context.restore();
};

const generateRandomTree = () => {
	if (!context) return;

	context.clearRect(0, 0, canvas.width, canvas.height);

	const color1 = `#${Math.random().toString(16).slice(-6)}`;
	const color2 = `#${Math.random().toString(16).slice(-6)}`;

	if (generateRandomTreeBtn) {
		generateRandomTreeBtn.style.backgroundColor = color1;
		generateRandomTreeBtn.style.borderColor = color2;
	}

	const shapeLengthLimit = Math.random() * 10 + 5;

	drawTree({
		startX: canvas.width / 2,
		startY: canvas.height + 20,
		shapeLength: Math.floor(Math.random() * 20 + 100),
		angle: -Math.PI / 2, // 0,
		branchWidth: 4, // Math.random() * 70 + 1,
		color1,
		color2,
		curve: Math.random() * 10 + 10,
		curve2: Math.random() * 50 + 25,
		shapeLengthLimit: 3,
	});
};

setTimeout(() => generateRandomTree(), 10);

if (generateRandomTreeBtn)
	generateRandomTreeBtn.addEventListener('click', () => {
		setTimeout(() => generateRandomTree(), 10);
	});

// window.addEventListener('resize', () => {
// 	setTimeout(() => generateRandomTree(), 10);
// });

/*
// https://stackoverflow.com/questions/48545808/how-to-delay-drawing-a-recursive-function-with-settimeout
var canvas = document.getElementById('canvas_main');
    canvas.width  = 600;
    canvas.height = 600;
    var ctx = canvas.getContext('2d');

    function draw(x, y, len, ang, width){

        ctx.lineWidth = width;

        // draw the branch
        ctx.beginPath();
        ctx.lineTo(x, y);

        // get the end position
        x += Math.cos(ang) * len;
        y += Math.sin(ang) * len;

        ctx.lineTo(x, y);
        ctx.stroke();

        if (len > 10) {

          setTimeout(()=>{                
            draw(x , y , len * 0.8, ang - 0.2, width * 0.8);
          }, 300 + Math.random() * 100);
          setTimeout(()=>{
            draw(x , y , len * 0.8, ang + 0.2, width * 0.8);
          }, 300 + Math.random() * 100);
        }
    }
		*/
