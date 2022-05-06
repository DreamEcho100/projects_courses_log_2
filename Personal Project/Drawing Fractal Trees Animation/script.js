var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var generateRandomTreeBtn = document.getElementById('generate-tree-btn');
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
if (context) {
    context.imageSmoothingEnabled = false;
}
canvas.width = 800;
canvas.height = 500;
var xdrawTree = function (_a) {
    var startX = _a.startX, startY = _a.startY, shapeLength = _a.shapeLength, angle = _a.angle, branchWidth = _a.branchWidth, color1 = _a.color1, color2 = _a.color2, curve = _a.curve, curve2 = _a.curve2, shapeLengthLimit = _a.shapeLengthLimit;
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!context)
                        return [2 /*return*/];
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
                    }
                    else {
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
                        return [2 /*return*/];
                    }
                    curve = Math.random() * 10 + 10;
                    return [4 /*yield*/, drawTree({
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
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, drawTree({
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
                        })];
                case 2:
                    _b.sent();
                    context.restore();
                    return [2 /*return*/];
            }
        });
    });
};
var drawTree = function (_a) {
    var startX = _a.startX, startY = _a.startY, shapeLength = _a.shapeLength, angle = _a.angle, branchWidth = _a.branchWidth, color1 = _a.color1, color2 = _a.color2, curve = _a.curve, curve2 = _a.curve2, shapeLengthLimit = _a.shapeLengthLimit;
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!context)
                        return [2 /*return*/];
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
                        return [2 /*return*/];
                    }
                    curve = Math.random() * 10 + 10;
                    return [4 /*yield*/, drawTree({
                            startX: startX,
                            startY: startY,
                            shapeLength: shapeLength * 0.75,
                            angle: angle + curve,
                            branchWidth: branchWidth * 0.65,
                            color1: color1,
                            color2: color2,
                            curve: curve,
                            curve2: curve2,
                            shapeLengthLimit: shapeLengthLimit
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, drawTree({
                            startX: startX,
                            startY: startY,
                            shapeLength: shapeLength * 0.75,
                            angle: angle - curve,
                            branchWidth: branchWidth * 0.65,
                            color1: color1,
                            color2: color2,
                            curve: curve,
                            curve2: curve2,
                            shapeLengthLimit: shapeLengthLimit
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
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
        angle: -Math.PI / 2,
        branchWidth: 4,
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
