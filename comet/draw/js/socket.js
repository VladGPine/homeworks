'use strict';

const socket = new WebSocket('wss://neto-api.herokuapp.com/draw');

socket.addEventListener('open', (event) => {
	console.log('Соединение открыто');
	console.log(window.editor);
});

socket.addEventListener('message', (event) => {
	console.log(event.data);
});

socket.addEventListener('close', (event) => {
	console.log('Соединение закрыто');
	console.log(event.code);
});

socket.addEventListener('error', (event) => {
	console.log(event.data);
})
window.editor.addEventListener('update', (event) => {
	console.log(event);
	let canvas = event.canvas;
	canvas.toBlob((blob) => {
		socket.send(blob);
	})
});