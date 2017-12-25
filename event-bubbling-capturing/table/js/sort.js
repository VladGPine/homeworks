'use strict';

function handleTableClick(event) {
	let dataPropName = event.target;
	event.stopPropagation();
	let propName = dataPropName.dataset.propName;
	let dir = dataPropName.dataset.dir ? -dataPropName.dataset.dir : 1;
	dataPropName.dataset.dir = dir;
	this.dataset.sortBy = propName;
	sortTable(propName, dir);
}
