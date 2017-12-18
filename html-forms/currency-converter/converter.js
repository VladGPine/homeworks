const xhr = new XMLHttpRequest();
const content = document.getElementById('content');
const currencyFrom = document.getElementById('from');
const currencyTo = document.getElementById('to');
const loader = document.getElementById('loader');
const result = document.getElementById('result');
const valueToConvert = document.getElementById('source');
let currencyIn = [];

function onDataLoaded() {
	loader.classList.add('hidden');
	content.classList.remove('hidden');
	if (xhr.status === 200) {
		let currencyIn = JSON.parse(xhr.responseText);
		let item = '';
		for (let item of currencyIn) {
			item = `<option value="${item.value}" label="${item.code}">${item.title}</option>`;
			currencyFrom.innerHTML += item;
			currencyTo.innerHTML += item;
		}
	}
};

function countResult() {
	result.value = (valueToConvert.value*currencyFrom.value/currencyTo.value).toFixed(2);
};

loader.classList.remove('hidden');
xhr.open('GET', ' https://neto-api.herokuapp.com/currency');
xhr.send();
xhr.addEventListener('load', onDataLoaded);
currencyFrom.addEventListener('change', countResult);
currencyTo.addEventListener('change', countResult);
valueToConvert.addEventListener('input', countResult);