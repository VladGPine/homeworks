'use strict';
document.querySelector('.items-list').addEventListener('click', function (event) {
	event.preventDefault();
	if (event.target.classList.contains('add-to-cart')) {
		addToCart({
			title: event.target.getAttribute('data-title'),
			price: event.target.getAttribute('data-price')
		});
	}
});