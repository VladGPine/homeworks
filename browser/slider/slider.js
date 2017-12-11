const slider = document.getElementById('slider');
const images = [
	'i/airmax.png',
	'i/airmax-jump.png',
	'i/airmax-on-foot.png',
	'i/airmax-playground.png',
	'i/airmax-top-view.png'
];
let img = 0;

setInterval(() => {
	slider.src = images[img];
		if (img < images.length) img +=1;
		if (img === images.length) img = 0;
}, 5000);
