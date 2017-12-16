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
	if (img === (images.length - 1)) {
		img = 0;
	} else {
		img++;
	};
	slider.src = images[img];
};

prevImg.onclick = function () {
	if (img === 0) {
		img = images.length - 1;
	} else {
		img--;
	}
	slider.src = images[img];

};