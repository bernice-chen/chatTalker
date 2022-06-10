$(document).ready(function(){
    //scroll
    $('.topscroll').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});

//praise
function clickSwiper() {
    const swiper = new Swiper("#slider-swiper", {
      slidesPerView: 1,
      breakpoints: {
        992: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1
        }
      },
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  clickSwiper();