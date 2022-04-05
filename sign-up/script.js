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




navFunction();
readMoreFunction();
