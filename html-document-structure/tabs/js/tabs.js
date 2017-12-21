'use strict';
let tabs = document.getElementById('tabs');
let tabsContent = tabs.getElementsByClassName('tabs-content')[0];
let tabsContentItems = tabsContent.children;
let tabsNav = tabs.getElementsByClassName('tabs-nav')[0];
let navItem = tabsNav.firstElementChild;

tabsNav.removeChild(navItem);
for (let item of tabsContentItems) {
	let newNav = navItem.cloneNode(true);
	newNav.firstElementChild.textContent = item.dataset.tabTitle;
	newNav.firstElementChild.classList.add(item.dataset.tabIcon);
	tabsNav.appendChild(newNav);
}

tabsNav.firstElementChild.classList.add('ui-tabs-active');
function tabsClick(eo) {
	let curTab = eo.target;
	for (let navItem of tabsNav.children) {
		navItem.classList.remove('ui-tabs-active');
	}
	curTab.parentNode.classList.add('ui-tabs-active');
	let curTitle = curTab.textContent;
	for (let item of tabsContentItems) {
		if (item.dataset.tabTitle == curTitle) {
			item.classList.remove('hidden');
		} else {
			item.classList.add('hidden');
		}
	}
}
tabsNav.addEventListener('click', tabsClick);