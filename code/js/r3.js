'use strict';

let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal');
let imgButton = document.getElementById('modal-img-button');
let button = document.getElementById('modal-button');

function showModal() {
	overlay.style.display = 'block';
	modal.style.display = 'block';
}

function hideModal() {
	overlay.style.display = 'none';
	modal.style.display = 'none';
}

button.onclick = () => {
	showModal();
};

imgButton.onclick = () => {
	showModal();
};

overlay.onclick = () => {
	hideModal();
};
