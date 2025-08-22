// Swiper Initialization
var swiper = new Swiper(".new-arrival", {
  loop: true, // infinite loop
  autoplay: {
    delay: 2000, // 2s auto move
    disableOnInteraction: false, // keeps autoplay even after user swipe
  },
  slidesPerView: 3, // show 3 products at once
  spaceBetween: 20, // space between slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});
