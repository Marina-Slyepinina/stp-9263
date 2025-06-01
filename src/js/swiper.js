// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    slidesPerView: 2.05,         
    centeredSlides: true,      
    loop: true,         
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        spaceBetween: 14,
      },
      1200: {
        spaceBetween: 60,
      },
    }
});
  



