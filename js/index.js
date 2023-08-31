//From here for navbar (Line no : 1 - 16)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

  //this code for proper functioning of navbar
$('.nav-link').click(function() {
    $('.active').removeClass('active');
});



// From here  for faq functioning (Line no : 19 - 40)
document.addEventListener('DOMContentLoaded', function() {
	var clickableElements = document.querySelectorAll('.clickable');
	var clickedStyles = 'display: none; opacity: 0; transition: opacity 0.5s linear;';
	var showStyles = 'display: block; opacity: 1;';

	clickableElements.forEach(function(element) {
		element.addEventListener('click', function() {
			var clickedDiv = this.querySelector('.clicked');
			var dropdownImg = this.querySelector('.dropdown img');

			if (clickedDiv.style.display === 'none') {
				clickedDiv.style.cssText = showStyles;
		  		dropdownImg.style.transform = 'rotate(180deg)'; // Rotate the image
			} else {
				clickedDiv.style.cssText = clickedStyles;
		  		dropdownImg.style.transform = ''; // Reset the image rotation
			}
		});
	});
});



// From here  for testimonial carousel (Line no : 43 - 63)
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 20,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1200:{
                items: 3,
            }
        }
    });
});
