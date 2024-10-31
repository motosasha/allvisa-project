import { ready } from "../../js/utils/documentReady.js";
import { openNav } from "../../js/common/openNav.js";

ready(function () {
  const headerHost = document.querySelector(".header");
  if (headerHost) {
    const headerBurger = headerHost.querySelector("[data-burger]");
    headerBurger.addEventListener("click", () => {
      openNav(document.body, "open-nav");
    });
  }
});
