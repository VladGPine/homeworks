'use strict';
const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.wrap-btns button');
let count;

document.addEventListener('DOMContentLoaded', function() {
	let localCount = localStorage.getItem('count');
	if (localCount !== null) {
		count = parseInt(localCount);
	} else {
		count = 0;
		counter.textContent = count;
	}

});

function changeCount(event) {
	if (event.target.id == 'increment') {
		count += 1;
	} else if (event.target.id == 'decrement' && count > 0) {
		count -= 1;
	} else {
		count = 0;
	}
	counter.textContent = count;
	localStorage.setItem('count', count);
}

for (const button of buttons) {
	button.addEventListener('click', changeCount);
}