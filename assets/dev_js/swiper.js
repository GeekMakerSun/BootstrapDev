const mainSlideSwiper = new Swiper('.mainSlide_swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: {
      el: '.mainSlide_thumbs', //注意此处的设置方式
      spaceBetween: '3%',
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      allowSlidePrev: false,
      allowSlideNext: false,
    }
  }
});
