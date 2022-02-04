const swiper = new Swiper('.swiper', {
    slidesPreView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideClickedSlide: true,
    toggle: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        }
    }
  
  });
  