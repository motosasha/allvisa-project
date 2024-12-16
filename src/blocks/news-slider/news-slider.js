import { ready } from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

ready(function () {
  const newsSlider = document.querySelector(".news-slider");

  if (!newsSlider) return;

  const carousel = newsSlider.querySelector(".news-slider__carousel");
  const fraction = newsSlider.querySelector(".news-slider__fraction");
  new Swiper(carousel, {
    modules: [Navigation, Pagination],
    pagination: {
      el: fraction,
      type: "fraction",
    },
    navigation: {
      nextEl: ".news-slider__next",
      prevEl: ".news-slider__prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
