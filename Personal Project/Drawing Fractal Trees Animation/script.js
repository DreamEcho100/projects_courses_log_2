var generateRandomTreeBtn = document.getElementById('generate-tree-btn');
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
if (context) {
    context.imageSmoothingEnabled = false;
}
canvas.width = 800;
canvas.height = 500;
var drawTree = function (_a) {
    var startX = _a.startX, startY = _a.startY, shapeLength = _a.shapeLength, angle = _a.angle, branchWidth = _a.branchWidth, color1 = _a.color1, color2 = _a.color2, curve = _a.curve, curve2 = _a.curve2, shapeLengthLimit = _a.shapeLengthLimit;
    if (!context)
        return;
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
        context.bezierCurveTo(20, -shapeLength / 2, 20, -shapeLength, 0, -shapeLength /* * 1.12*/);
    }
    else {
        context.bezierCurveTo(20, -shapeLength / 2, 20, -shapeLength, 0, -shapeLength /* * 1.12*/);
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
    drawTree({
        startX: 0,
        startY: -shapeLength,
        shapeLength: shapeLength * 0.75,
        angle: angle + curve,
        branchWidth: branchWidth * 0.65,
        color1: color1,
        color2: color2,
        curve: curve,
        curve2: curve2,
        shapeLengthLimit: shapeLengthLimit
    });
    drawTree({
        startX: 0,
        startY: -shapeLength,
        shapeLength: shapeLength * 0.75,
        angle: angle - curve,
        branchWidth: branchWidth * 0.65,
        color1: color1,
        color2: color2,
        curve: curve,
        curve2: curve2,
        shapeLengthLimit: shapeLengthLimit
    });
    context.restore();
};
var generateRandomTree = function () {
    if (!context)
        return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    var color1 = "#".concat(Math.random().toString(16).slice(-6));
    var color2 = "#".concat(Math.random().toString(16).slice(-6));
    if (generateRandomTreeBtn) {
        generateRandomTreeBtn.style.backgroundColor = color1;
        generateRandomTreeBtn.style.borderColor = color2;
    }
    var shapeLengthLimit = Math.random() * 10 + 5;
    drawTree({
        startX: canvas.width / 2,
        startY: canvas.height + 20,
        shapeLength: Math.floor(Math.random() * 20 + 100),
        angle: 0,
        branchWidth: Math.random() * 70 + 1,
        color1: color1,
        color2: color2,
        curve: Math.random() * 10 + 10,
        curve2: Math.random() * 50 + 25,
        shapeLengthLimit: 3
    });
};
setTimeout(function () { return generateRandomTree(); }, 10);
if (generateRandomTreeBtn)
    generateRandomTreeBtn.addEventListener('click', function () {
        setTimeout(function () { return generateRandomTree(); }, 10);
    });
// window.addEventListener('resize', () => {
// 	setTimeout(() => generateRandomTree(), 10);
// });
