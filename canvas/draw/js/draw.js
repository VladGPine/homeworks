'use strict';
const canvas = document.getElementById('draw');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue_min = 0, hue_max = 359, hue = 0, hue_way = 0,
	thickness_min = 5, thickness_max = 100, thickness = 100, thickness_way = -1;
let drawing = false;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

window.addEventListener('resize', function(event) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

function getMousePos(canvas, evt) {
	let rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

function mouseMove(evt) {
	let mousePos = getMousePos(canvas, evt);
	ctx.lineTo(mousePos.x, mousePos.y);

	if (thickness == thickness_min) thickness_way = 1;
	else if (thickness == thickness_max) thickness_way = -1;
	thickness = thickness + thickness_way;
	ctx.lineWidth = thickness;

	if (hue_way) hue += 1;
	else hue -= 1;
	ctx.strokeStyle = 'hsl(' + hue + ',100%,50%)';
	ctx.stroke();
}

canvas.addEventListener('mousedown', function(evt) {
	hue_way = evt.shiftKey;
	let mousePos = getMousePos(canvas, evt);
	ctx.beginPath();
	ctx.moveTo(mousePos.x, mousePos.y);
	evt.preventDefault();
	canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function() {
	canvas.removeEventListener('mousemove', mouseMove, false);
}, false);

canvas.addEventListener('dblclick', function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mouseleave", (evt) => {
	canvas.removeEventListener('mousemove', mouseMove, false);
});