const dropdown = document.getElementsByClassName('wrapper-dropdown')[0];
dropdown.onclick = function () {
		if (dropdown.classList.contains('wrapper-dropdown')) {
			return dropdown.classList.toggle('active');
		}
}
