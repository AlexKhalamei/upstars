let sliders = [];

function initSwipers() {
  document.querySelectorAll('.custom-slider .swiper').forEach((el, index) => {
    if (
      window.innerWidth < 768 &&
      !el.classList.contains('swiper-initialized')
    ) {
      const swiper = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
      sliders[index] = swiper;
    }

    if (
      window.innerWidth >= 768 &&
      el.classList.contains('swiper-initialized')
    ) {
      sliders[index]?.destroy(true, true);
    }
  });
}

window.addEventListener('load', initSwipers);
window.addEventListener('resize', () => {
  clearTimeout(window.swiperResizeTimeout);
  window.swiperResizeTimeout = setTimeout(initSwipers, 300);
});
