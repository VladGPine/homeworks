function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const buttons = document.querySelectorAll('.add'),
			countItems = document.querySelector('#cart-count'),
			totalPrice = document.querySelector('#cart-total-price');

let currentItems = 0,
		currentPrice = 0;

function addToCart(i) {
	currentItems += 1;
	currentPrice += parseInt(i.target.dataset.price);
	countItems.innerText = currentItems;
	totalPrice.innerText = getPriceFormatted(currentPrice);
}

for (const button of buttons) {
	button.addEventListener('click', addToCart);
}
