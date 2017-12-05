var slider = document.getElementById('slider');
const images = [];
let img = 0;

images.push('i/airmax.png', 'i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png');

setInterval(() => {
	slider.src = images[img];
img === 4 ? img = 0 : img += 1;
}, 5000);