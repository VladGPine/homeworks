'use strict';

function createElement(node) {
	let element = document.createElement(node.name);
	if (node.props.class !== null) {
		element.className = node.props.class;
	}
	for (let child of node.childs) {
		let element_child = document.createElement(child.name);
		if (child.props !== null){
			element_child.className = child.props.class;
		}
		if (typeof child.childs[0] === 'string') {
			element_child.textContent = child.childs[0];
		}else{
			for (let child2 of child.childs) {
				let element_child2 = document.createElement(child2.name);
				if (child2.props !== null){
					element_child2.className = child2.props.class;
				}
				if (!child2.childs[1]) {
					element_child2.textContent = child2.childs[0];
				}else{
					element_child2.textContent = child2.childs[0] + child2.childs[1];
				}
				element_child.appendChild(element_child2);
			}
		}
		element.appendChild(element_child);
	}
	return element;
}
