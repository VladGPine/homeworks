const content = document.getElementById('content');
content.innerHTML = '';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.send();
xhr.addEventListener('load', loadBook);

function loadBook() {
	if (this.status === 200) {
		let data = JSON.parse(xhr.responseText);
		for (let i = 0; i < data.length; i++) {
			let li = document.createElement('li');
			let img = document.createElement('img');
			content.appendChild(li);
			li.appendChild(img);
			img.src = data[i].cover.small;
			li.dataset.title = data[i].title;
			li.dataset.author = data[i].author.name;
			li.dataset.info = data[i].info;
			li.dataset.price = data[i].price;
		}
	}
}