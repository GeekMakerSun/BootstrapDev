const homeSlideSwiper = new Swiper('.home_slide-swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  thumbs: {
    swiper: {
      el: '.home_slide-thumbs', //注意此处的设置方式
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
