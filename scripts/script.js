const cityButton = document.querySelector('.header__city-button');


cityButton.textContent = localStorage.getItem('lomodaLocation') || 'Your City' 

cityButton.addEventListener('click', () => {
	let city = prompt('what is your city?', 'Kolomiya');
	cityButton.textContent = city;
	localStorage.setItem('lomodaLocation', city)
})


//scroll

const disableScroll = () => {
	const widthScroll = window.innerWidth - document.body.offsetWidth;

	document.body.dbScrollY = window.scrollY
	document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`
}

const enableScroll = () => {
 document.body.style.cssText= '';
 window.scroll({
	 top: document.body.dbScrollY
 })
}


//modal Window
const cart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');


const cartOpen = () => {
	cartOverlay.classList.add("cart-overlay-open");
	disableScroll()
}

const cartClose = () => {
	cartOverlay.classList.remove("cart-overlay-open")
	enableScroll()
}

cart.addEventListener('click', cartOpen)

cartOverlay.addEventListener('click', e => {
	const target = e.target;

	if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
		cartClose()
	}
})

