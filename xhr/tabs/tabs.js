const tabs = document.querySelectorAll('nav a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');

for (let tab of tabs) {
	if (tab.innerHTML === 'Email') {
		request(tab.href);
	}
	tab.addEventListener('click', function (e) {
		e.preventDefault();
		if (this.classList.contains('active')) {
			return;
		}
		for (let tab of tabs) {
			tab.classList.remove('active');
		}
		this.classList.add('active');
		request(tab.href);
	});
}

function request(type) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', type, true);
	xhr.send();
	if (xhr.status !== 400) {
		preloader.classList.toggle('hidden');
	}
	xhr.addEventListener('load', onLoad);
	function onLoad() {
		preloader.classList.toggle('hidden');
		content.innerHTML = xhr.responseText;
	}
}