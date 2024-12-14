import { ready } from "../../js/utils/documentReady.js";
import { openNav } from "../../js/common/openNav.js";

ready(function () {
  const headerHost = document.querySelector(".header");
  if (headerHost) {
    const burgerTriggers = document.querySelectorAll("[data-burger]");
    const searchTrigger = document.querySelector("[data-search]");
    const searchForm = document.querySelector("#mainSearch");

    burgerTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openNav(document.body, "open-nav");
      });
    });

    if (searchTrigger) {
      searchTrigger.addEventListener("click", () => {
        searchForm.classList.toggle("header__search--active");
      });
    }
  }
});
