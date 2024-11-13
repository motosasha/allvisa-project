import { ready } from "../../js/utils/documentReady.js";

ready(function () {
  const formSet = document.querySelector("#formSet");

  if (formSet) {
    const serviceTypeSelect = formSet.querySelector("#service");
    const formSetPanes = formSet.querySelectorAll(".form-set__pane");

    setActivePane(formSetPanes, serviceTypeSelect.value);

    serviceTypeSelect.addEventListener("change", (e) => {
      setActivePane(formSetPanes, e.target.value);
    });
  }
});

function setActivePane(panes, id) {
  for (let pane of panes) {
    if (pane.dataset.form === id) pane.classList.add("form-set__pane--active");
    else pane.classList.remove("form-set__pane--active");
  }
}
