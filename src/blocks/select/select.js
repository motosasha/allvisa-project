import { ready } from "../../js/utils/documentReady.js";

ready(function () {
  const selects = document.querySelectorAll(".select");
  if (selects.length !== 0) {
    for (let select of selects) {
      if (select.value.length !== 0) select.classList.add("select--has-value");
      select.addEventListener("change", function () {
        this.value.length !== 0 ? this.classList.add("select--has-value") : this.classList.remove("select--has-value");
      });
    }
  }
});
