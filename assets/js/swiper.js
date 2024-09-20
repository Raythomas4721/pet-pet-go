// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
var swiper1 = new Swiper(".mySwiper-1", {
  // configure Swiper to use modules
  spaceBetween: 24,
  slidesPerView: 1.7,
});

var swiper2 = new Swiper(".mySwiper-2", {
  spaceBetween: 24,
  slidesPerView: 1.3,
});

var swiper3 = new Swiper(".card-img-Swiper", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

var swiper1 = new Swiper(".commentSwiper", {
  width: 210,
  spaceBetween: 12,
});