function ativaNoScroll() {
	
	document.querySelectorAll('img').forEach((img) => {
		if(img.getBoundingClientRect().top < window.innerHeight) {
			img.src = img.getAttribute('data-src');
		};		
	})
}
window.addEventListener('scroll', ativaNoScroll);
