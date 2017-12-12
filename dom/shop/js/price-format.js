function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const cartCount = document.querySelector('#cart-count');
const totalPrice = document.querySelector('#cart-total-price');

function addItem() {
	let currCount = +cartCount.innerHTML + 1;
	cartCount.innerHTML = currCount;
	let currPrice = totalPrice.dataset.price ? +totalPrice.dataset.price : 0;
	currPrice += +this.dataset.price;
	totalPrice.dataset.price = currPrice;
	totalPrice.innerHTML = getPriceFormatted(currPrice);
}

let items = Array.from(document.querySelectorAll('button.add'));
items.forEach(item => item.addEventListener('click', addItem));