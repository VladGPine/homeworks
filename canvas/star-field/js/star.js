'use strict';
const canvas = document.getElementById('starfield');
canvas.width = 800;
canvas.height = 800;
let context = canvas.getContext('2d');
let colorArray = ['#ffffff', '#ffe9c4', '#d4fbff'];

function generateSky() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);
	let countStars = getRandomArbitrary(200, 400);
	for (let i = 0; i < countStars; i++) {
		let r = getRandomArbitrary(0, 1.1);
		let color = colorArray[getRandomArbitrary(0, 2)];
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let opacity = Math.random() * (1 - 0.8) + 0.8;
		context.beginPath();
		context.fillStyle = color;
		context.globalAlpha = opacity;
		context.arc(x, y, r, 0, Math.PI * 2, false);
		context.fill();
		context.closePath();
	}
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

canvas.addEventListener('click', generateSky);