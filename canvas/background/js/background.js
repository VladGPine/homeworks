'use strict';
const canvas = document.getElementById('wall');
canvas.width = 800;
canvas.height = 800;
let ctx = canvas.getContext('2d');
let circles = [];
let crosses = [];
let count = getRandomInt(50, 200);

function nextPoint(x, y, time) {
	return {
		x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
		y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
	};
}

function nextPoint2(x, y, time) {
	return {
		x: x + Math.sin((x + (time / 10)) / 100) * 5,
		y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
	}
}

function generateCircle() {
	let func = getRandomInt(0, 2);
	let size = getRandomArbitrary(0.1, 0.6);
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let circle = {x: x, y: y, size: size, func: func};
	circles.push(circle);
}

function drawCircle(x, y, size, func) {
	let lineWidth = 5 * size;
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = 'white';
	let newCoordinate = {};
	if (func == 0) {
		newCoordinate = nextPoint(x, y, Date.now());
	}else{
		newCoordinate = nextPoint2(x, y, Date.now());
	}
	ctx.beginPath();
	ctx.arc(newCoordinate.x, newCoordinate.y, 12 * size, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.closePath();
}

function generateCross() {
	let func = getRandomInt(0, 2);
	let size = getRandomArbitrary(0.1, 0.6);
	let lineWidth = 5 * size;
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let angle = getRandomInt(0, 360);
	let cross = {x: x, y: y, size: size, angle: angle, func: func};
	crosses.push(cross);
}

function drawCross(x, y, size, angle, func) {
	let lineWidth = 5 * size;
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = 'white';
	let newCoordinate = {};
	if (func == 0) {
		newCoordinate = nextPoint(x, y, Date.now());
	}else{
		newCoordinate = nextPoint2(x, y, Date.now());
	}
	ctx.beginPath();
	ctx.translate(newCoordinate.x, newCoordinate.y);
	ctx.rotate(angle);
	ctx.moveTo( - 10 * size, 0);
	ctx.lineTo( + 10 * size, 0);
	ctx.moveTo(0,  + 10 * size);
	ctx.lineTo(0,  - 10 * size);
	ctx.stroke();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < count; i++) {
	generateCircle();
	generateCross();
}

var timerId = setInterval( function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let circle of circles) {
		drawCircle(circle.x, circle.y, circle.size, circle.func);
	}
	for (let cross of crosses) {
		drawCross(cross.x, cross.y, cross.size, cross.angle, cross.func);
	}
}, 200);