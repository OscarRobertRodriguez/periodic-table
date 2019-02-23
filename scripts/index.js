"use strict";

(function() {

//get input
	let searchInput = document.querySelector('.input__search-input');
	let elements = [...document.querySelectorAll('.element__block')];

// add keydown event to input
	searchInput.addEventListener("keyup", (e) => {
		let inputValue = e.target.value.toLowerCase();


		elements.forEach(element => {
			let elementName = element.firstElementChild.textContent;
			if (elementName.toLowerCase().indexOf(inputValue) != -1) {
				element.style.opacity = 1;
			} else {
				element.style.opacity = .5;
			}
		});


	});

})();


