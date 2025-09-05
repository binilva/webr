/* ===================================================================
 * Minimal JS for Gallery Slideshow + Mobile Menu
 * ------------------------------------------------------------------- */

(function () {
  "use strict";

  /* mobile menu toggle
   * ---------------------------------------------------- */
  const toggleButton = document.querySelector(".s-header__menu-toggle");
  const siteBody = document.querySelector("body");

  if (toggleButton) {
    toggleButton.addEventListener("click", function (e) {
      e.preventDefault();
      toggleButton.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
    });
  }

  /* gallery slideshow
   * ---------------------------------------------------- */

  const slides = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;

  if (slides.length > 0) {
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // init
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // change every 3s



    
  }
})();
