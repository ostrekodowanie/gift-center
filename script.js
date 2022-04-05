const screenWidth = window.innerWidth;
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");


const navFunction = () => {
	burger.addEventListener("click", () => {
		navbar.classList.toggle("nav-active");
	})

};

const readButtonFirst = document.querySelector(".rm1");
const readButtonSecond = document.querySelector(".rm2");
const readButtonThird = document.querySelector(".rm3");

const readMoreFunction = () => {
	readButtonFirst.addEventListener("click", () => {
		document.querySelector(".read-show").classList.toggle("display-inline");
		document.querySelector(".read-show").classList.toggle("display-none");
		document.querySelector(".read-hide").classList.toggle("display-none");
		readButtonFirst.classList.add("display-none");
	});
	readButtonSecond.addEventListener("click", () => {
		document.querySelector(".read-show2").classList.toggle("display-inline");
		document.querySelector(".read-show2").classList.toggle("display-none");
		document.querySelector(".read-hide2").classList.toggle("display-none");
		readButtonSecond.classList.add("display-none");
	});
	readButtonThird.addEventListener("click", () => {
		document.querySelector(".read-show3").classList.toggle("display-inline");
		document.querySelector(".read-show3").classList.toggle("display-none");
		document.querySelector(".read-hide3").classList.toggle("display-none");
		readButtonThird.classList.add("display-none");
	});
};

/*default values for scroll reveal to enter*/

window.sr = ScrollReveal({
	reset: true,
	delay: 100,
	mobile: true
});

sr.reveal('.d1', {
	origin: 'left',
	duration: 1000,
	distance: '60px',
	delay: 200,
	reset: false
});
sr.reveal('.d2', {
	origin: 'right',
	duration: 1000,
	distance: '60px',
	reset: false
});
sr.reveal('.d3', {
	origin: 'left',
	duration: 1000,
	distance: '60px',
	delay: 250,
	reset: false
});
sr.reveal('.impact1', {
	origin: 'left',
	duration: 1000,
	distance: '60px',
	reset: false
});
sr.reveal('.impact2', {
	origin: 'left',
	duration: 1000,
	distance: '60px',
	delay: 200,
	reset: false
});
sr.reveal('.impact3', {
	origin: 'left',
	duration: 1000,
	distance: '60px',
	delay: 350,
	reset: false
});

/*scroll values only when screen is bigger*/

(function width() {
	if(screenWidth >= 1400) {
		sr.reveal('.arrow', {
		origin: 'left',
		distance: '60px',
		});
		sr.reveal('.d1', {
			origin: 'left',
			reset: true
		});
		sr.reveal('.d2', {
			origin: 'bottom',
			reset: true
		});
		sr.reveal('.d3', {
			origin: 'right',
			reset: true
		});
		sr.reveal('.impact1', {
			distance: '150px'
		});
		sr.reveal('.impact2', {
			distance: '150px'
		});
		sr.reveal('.impact3', {
			distance: '150px'
		});
		sr.reveal('.desktop-arrow1', {
			origin: 'left',
			distance: '100px',
			duration: 1000,
			delay: 0
		});
		sr.reveal('.desktop-arrow2', {
			origin: 'left',
			distance: '100px',
			duration: 1000,
			delay: 0
		})
	}
})();


	

navFunction();
readMoreFunction();

