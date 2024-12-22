import { ready } from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

ready(function () {
  const travelCardBlock = document.querySelector(".travel-card");

  if (!travelCardBlock) return;

  const slider = travelCardBlock.querySelector(".travel-card__carousel");
  const footer = slider.querySelector(".travel-card__footer");
  const fraction = slider.querySelector(".travel-card__fraction");
  new Swiper(slider, {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: fraction,
      type: "fraction",
    },
    navigation: {
      nextEl: ".travel-card__next",
      prevEl: ".travel-card__prev",
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
  const total = slider.querySelector(".swiper-pagination-total");

  function isTotalOne(elem) {
    if (elem.textContent === "1") {
      footer.setAttribute("hidden", "");
    } else {
      footer.removeAttribute("hidden");
    }
  }

  isTotalOne(total);
  window.addEventListener("resize", function () {
    isTotalOne(total);
  });
});
