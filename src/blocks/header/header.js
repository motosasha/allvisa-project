import { ready } from "../../js/utils/documentReady.js";
import { openNav } from "../../js/common/openNav.js";

ready(function () {
  const headerHost = document.querySelector(".header");
  if (headerHost) {
    const burgerTriggers = document.querySelectorAll("[data-burger]");
    burgerTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openNav(document.body, "open-nav");
      });
    });
  }
});
