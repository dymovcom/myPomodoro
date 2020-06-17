document.addEventListener('DOMContentLoaded', () => {
	const settingsBtn = document.querySelector('.header__btn'),
		settingsBox = document.querySelector('.settings');

	settingsBtn.addEventListener('click', () => {
		settingsBox.classList.toggle('settings--active');
		// console.log('!');
	});
});
