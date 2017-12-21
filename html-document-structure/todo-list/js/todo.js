'use strict';
const todoList = document.getElementsByClassName('todo-list')[0];
const done = document.getElementsByClassName('done')[0];
const undone = document.getElementsByClassName('undone')[0];
const checkboxes = Array.from(todoList.getElementsByTagName('input'));
function clickListItem(eo) {
	if (eo.target.checked) {
		done.appendChild(eo.target.parentNode);
	} else {
		undone.appendChild(eo.target.parentNode);
	}
}
for (let checkbox of checkboxes) {
	checkbox.addEventListener('change', clickListItem);
}