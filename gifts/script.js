const screenWidth = window.innerWidth;
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

const navFunction = () => {
	burger.addEventListener("click", () => {
		navbar.classList.toggle("nav-active");
	})

};


window.sr = ScrollReveal({
	reset: true,
	delay: 100,
	mobile: true
});

(function width() {
	if(screenWidth >= 1400) {
		sr.reveal('.s1-arrow', {
			origin: 'left',
			distance: '60px',
			reset: false
		});
		sr.reveal('.s2-arrow', {
			origin: 'left',
			distance: '60px',
			reset: false
		});
	}
})();

navFunction();
