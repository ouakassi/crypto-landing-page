var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});
