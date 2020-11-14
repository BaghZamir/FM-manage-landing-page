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
}

new Splide( ".splide", options).mount();