var swiper = new Swiper(".mySwiper01", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    501: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    765: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper02", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    501: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    765: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});
var swiper1 = new Swiper(".swiper mySwiper02", {
  loop: true,
  autoplay: 5500,
  autoplayDisableOnInteraction: false,
  pagination: {
    el: ".swiper-pagination",
    Clickable: true,
  },
});

let $slides = document.querySelectorAll(".swiper-slide");
for (let i of $slides) {
  i.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
}
