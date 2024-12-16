import { ready } from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

ready(function () {
  const directionSlider = document.querySelector(".direction-slider");

  if (!directionSlider) return;

  const carousel = directionSlider.querySelector(".direction-slider__carousel");
  const fraction = directionSlider.querySelector(".direction-slider__fraction");
  new Swiper(carousel, {
    modules: [Navigation, Pagination],
    pagination: {
      el: fraction,
      type: "fraction",
    },
    navigation: {
      nextEl: ".direction-slider__next",
      prevEl: ".direction-slider__prev",
    },
  });
});
