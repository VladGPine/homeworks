const slider = document.getElementById('currentPhoto');
const images = [
	'i/breuer-building.jpg',
	'i/guggenheim-museum.jpg',
	'i/headquarters.jpg',
	'i/IAC.jpg',
	'i/new-museum.jpg'
];
let img = 0;

const nextImg = document.getElementById('nextPhoto');
const prevImg = document.getElementById('prevPhoto');

nextImg.onclick = function () {
	slider.src = images[img];
	if (img < images.length) img++;
	if (img === images.length) img = 0;
};

prevImg.onclick = function () {
	slider.src = images[img];
	if (img === 0) img = images.length - 1;
	if (img < images.length) img--;


};