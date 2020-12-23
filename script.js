let width = window.innerWidth;
let options = {
	type: 'loop',
	perPage: 3,
	fixedWidth: '550px',
	gap: '30px',
	focus: 'center',
	autoplay: true,
};

if (width > 1150) {
	options.perPage = 3;
} else if (width < 1150) {
	options.perPage = 1;
	options.fixedWidth = '100%';
	options.pagination = 'slider';
}

new Splide( ".splide", options).mount();

let expand = document.querySelector('nav > .expand');
let cover = document.querySelector('nav > .menu-cover');

const toggleMenu = (el) =>{
	//finds parent element to clicked element
	let parent = el.target.parentElement;
	parent.classList.toggle("open");
};

//menu show/hide
expand.addEventListener('click', toggleMenu );
cover.addEventListener('click', toggleMenu );
