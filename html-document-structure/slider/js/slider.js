'use strict';
let slides = document.querySelector('.slides');
let btns = document.getElementsByClassName('slider-nav')[0];
function clearCurrent() {
	for (let slide of slides.getElementsByClassName('slide')) {
		slide.classList.remove('slide-current');
	}
};
function getCurrent() {
	return slides.getElementsByClassName('slide-current')[0];
}
function setCurrent(item) {
	if (item) {
		item.classList.add('slide-current');
	}
}
function disableBtns() {
	let disablePrev = false,
		disableNext = false;
	if (!getCurrent().previousElementSibling) {
		disablePrev = true;
	}
	if (!getCurrent().nextElementSibling) {
		disableNext = true;
	}
	for (let btn of btns.children) {
		switch (btn.dataset.action) {
			case 'prev':
			case 'first':
				if (disablePrev) {
					btn.classList.add('disabled');
				} else {
					btn.classList.remove('disabled');
				}
				break;
			case 'next':
			case 'last':
				if (disableNext) {
					btn.classList.add('disabled');
				} else {
					btn.classList.remove('disabled');
				}
				break;
		}
	}
}

function changeSlide(eo) {
	if (eo.target.classList.contains('disabled')) {
		return;
	}
	let newCurrent;
	switch (eo.target.dataset.action) {
		case 'prev':
			newCurrent = getCurrent().previousElementSibling;
			break;
		case 'next':
			newCurrent = getCurrent().nextElementSibling;
			break;
		case 'first':
			newCurrent = slides.firstElementChild;
			break;
		case 'last':
			newCurrent = slides.lastElementChild;
			break;
	}
	clearCurrent();
	setCurrent(newCurrent);
	disableBtns();
}

setCurrent(slides.firstElementChild);
disableBtns();
btns.addEventListener('click', changeSlide);