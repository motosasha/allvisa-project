import { ready } from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

ready(function () {
  const teamBlock = document.querySelector(".team");

  if (!teamBlock) return;

  const sliders = document.querySelectorAll(".team__carousel");
  sliders.forEach((slider) => {
    const footer = slider.querySelector(".team__footer");
    const fraction = slider.querySelector(".team__fraction");
    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: fraction,
        type: "fraction",
      },
      navigation: {
        nextEl: ".team__next",
        prevEl: ".team__prev",
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
        1280: {
          slidesPerView: 4,
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
});
