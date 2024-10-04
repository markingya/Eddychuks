
// Sticky nav on scroll
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});



// Animate on scroll
const observer = new IntersectionObserver((entries) =>{
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}

		else {
			entry.target.classList.remove('show');
		}
	
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// responsive navbar
const h3 = document.getElementById('toggle-header');
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
	const navBar = document.querySelector('.nav-bar');
    
    const originalText = 'Menu +';
    const newText = 'Menu -';

    h3.addEventListener('click', () => {
        const areDivsHidden = div1.classList.contains('hide') && div2.classList.contains('hide');

        if (areDivsHidden) {
            // Reveal divs and change h3 text
            div1.classList.remove('hide');
            div2.classList.remove('hide');
            h3.textContent = newText;
			navBar.style.gridTemplateRows = '10dvh 3fr 1fr';
        } else {
            // Hide divs and revert h3 text
            div1.classList.add('hide');
            div2.classList.add('hide');
            h3.textContent = originalText;
			navBar.style.gridTemplateRows = '100% 3fr 1fr';
        }
    });