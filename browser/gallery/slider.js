var slider = document.getElementById('currentPhoto');
const images = [];
let img = 0;

images.push('i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg');

setInterval(() => {
	slider.src = images[img];
	img === 4 ? img = 0 : img += 1;
}, 5000);

var nextImg = document.getElementById('nextPhoto');
var prevImg = document.getElementById('prevPhoto');

nextImg.onclick = function () {
	slider.src = images[img];
	img === 4 ? img = 0 : img += 1;

};

prevImg.onclick = function () {
	slider.src = images[img];
	img === 0 ? img = 4 : img -= 1;

};