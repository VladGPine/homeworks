'use strict';

let url = 'https://neto-api.herokuapp.com/plane/';
const selectAirbus = document.getElementById('acSelect');
const seatMapDiv = document.getElementById('seatMapDiv');
const seatMapTitle = document.getElementById('seatMapTitle');
const btnSetFull = document.getElementById('btnSetFull');
const btnSeatMap = document.getElementById('btnSeatMap');
const btnSetEmpty = document.getElementById('btnSetEmpty');
const totalPax = document.getElementById('totalPax');
const totalAdult = document.getElementById('totalAdult');
const totalHalf = document.getElementById('totalHalf');
let numAdult = 0;
let numHalf = 0;
let changeSelect = true;
let letters4 = null;
let letters6 = null;

init();

selectAirbus.addEventListener('change', (event) => {
	changeSelect = true;
});

btnSeatMap.addEventListener('click', (event) => {
	event.preventDefault();
	if (!changeSelect) {
		return false;
	}

	fetch(url + selectAirbus.value).then((data) => {
		return data.json();
	})
		.then((data) => {
			letters4 = data.letters4;
			letters6 = data.letters6;
			console.log(data);

			let fragment = document.createDocumentFragment();
			seatMapTitle.innerText = `${data.title} (${data.passengers} пассажиров)`;
			let scheme = data.scheme;
			let numRow = 1;
			scheme.forEach((countSeats) => {
				fragment.appendChild(rowSeats(numRow, countSeats));
				numRow++;
			});
			clearNode(seatMapDiv);
			seatMapDiv.appendChild(fragment);
			changeSelect = false;
			enableButtons();
			numHalf = 0;
			numAdult = 0;
			calcCount();
		});
});

function el(type, className) {
	let element = document.createElement(type);
	if (className) {
		element.className = className;
	}
	return element;
}
function seat(name) {
	let seat = el('div', 'col-xs-4 seat');
	let span = el('span', 'seat-label');
	span.innerText = name;
	seat.appendChild(span);
	return seat;
}
function noSeat() {
	let seat = el('div', 'col-xs-4 no-seat');
	return seat;
}
function rowSeats(numberRow, countSeats) {
	let div = el('div', 'row seating-row text-center');
	let header = el('div', 'col-xs-1 row-number');
	let h2 = el('h2');
	h2.innerText = numberRow;
	header.appendChild(h2);
	div.appendChild(header);

	let groupSeats = el('div', 'col-xs-5');
	let indexSeats = 0;
	for (let i=0; i<6;i++) {
		let currentSeat = null;
		if (countSeats == 0) {
			currentSeat = noSeat();
		}
		if (countSeats == 4) {
			if (letters4[indexSeats] != letters6[i]) {
				currentSeat = noSeat();
			} else {
				currentSeat = seat(letters6[i]);
				indexSeats++;
			}
		}
		if (countSeats == 6) {
			currentSeat = seat(letters6[i]);
		}
		if (i == 3) {
			groupSeats = el('div', 'col-xs-5');
		}
		groupSeats.appendChild(currentSeat);
		div.appendChild(groupSeats);
	}
	return div;
}
function clearNode(node) {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

function init() {
	disableButtons();
	calcCount();
	seatMapDiv.addEventListener('click', (event) => {
		event.preventDefault();
		event.stopPropagation();
		let target = event.target;
		if (target.nodeName == 'SPAN') {
			target = target.parentNode;
		}
		if (target.classList.contains('seat')) {
			if (target.classList.contains('half') || target.classList.contains('adult')) {
				if (target.classList.contains('half')) {
					target.classList.remove('half');
					numHalf--;
				} else {
					target.classList.remove('adult');
					numAdult--;
				}
			} else {
				if (event.altKey) {
					target.classList.add('half');
					numHalf++;
				} else {
					target.classList.add('adult');
					numAdult++;
				}
			}
			calcCount();
		}
	});
	btnSetFull.addEventListener('click', (event) => {
		event.preventDefault();
		Array.from(seatMapDiv.querySelectorAll('div.seat')).forEach((seat) => {
			if (!seat.classList.contains('half')) {
				seat.classList.add('adult');
				numAdult++;
			}
		});
		calcCount();
	});
	btnSetEmpty.addEventListener('click', (event) => {
		event.preventDefault();
		Array.from(seatMapDiv.querySelectorAll('div.seat')).forEach((seat) => {
			seat.classList.remove('half');
			seat.classList.remove('adult');
		});
		numAdult = 0;
		numHalf = 0;
		calcCount();
	})
}

function enableButtons() {
	btnSetFull.removeAttribute('disabled');
	btnSetEmpty.removeAttribute('disabled');
}
function disableButtons() {
	btnSetFull.setAttribute('disabled', '');
	btnSetEmpty.setAttribute('disabled', '');
}

function calcCount() {
	totalPax.innerText = numHalf + numAdult;
	totalAdult.innerText = numAdult;
	totalHalf.innerText = numHalf;
}