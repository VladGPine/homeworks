'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connection.addEventListener('open', (event) => {
	showBubbles(event.currentTarget);
});

document.addEventListener('click', (event) =>{
	let coordinates = { x: event.clientX, y: event.clientY};
	connection.send(JSON.stringify(coordinates));
});

connection.addEventListener('error', error => {
	console.log('Произошла ошибка: ${error.data}');
});

window.addEventListener('beforeunload', () => {
	connection.close(1000);
});