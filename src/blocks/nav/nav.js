import { ready } from "../../js/utils/documentReady.js";
import { openNav } from "../../js/common/openNav.js";

ready(function () {
  const navHost = document.querySelector(".nav");
  if (navHost) {
    const navCross = navHost.querySelector("[data-burger]");
    navCross.addEventListener("click", () => {
      openNav(document.body, "open-nav");
    });
  }
});
