var swiper = new Swiper(".mySwiper01", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay:6000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next btn01",
      prevEl: ".swiper-button-prev btn01",
    },
  });
  var swiper1=new Swiper(".swiper mySwiper01",{
    loop:true,
    autoplay:5500,
    autoplayDisableOnInteraction:false,
    pagination:{
      el:".swiper-pagination",
      Clickable:true,
    }
  })
  var swiper = new Swiper(".mySwiper02", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
      delay:6000,
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
  });
  var swiper1=new Swiper(".swiper mySwiper02",{
    loop:true,
    autoplay:5500,
    autoplayDisableOnInteraction:false,
    pagination:{
      el:".swiper-pagination",
      Clickable:true,
    }
  })

  