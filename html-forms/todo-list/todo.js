'use strict';
const listImputs = document.querySelector(".list-block");
const checkItems = document.querySelectorAll('.list-block input[type="checkbox"]');
const output = document.querySelector("output");

function checkList() {
	let counter = 0;
	for (let item of checkItems) {
		if (item.checked) {
			counter++;
		}
	}
	output.value = counter;
	if (counter === checkItems.length) {
		listImputs.classList.add('complete');
	} else {
		listImputs.classList.remove('complete');
	}
}

checkList();
listImputs.addEventListener('change', checkList);