import { ready } from "../../js/utils/documentReady.js";

ready(function () {
  const fileInputs = document.querySelectorAll(".input-file");

  if (fileInputs.length) {
    for (let fileInput of fileInputs) {
      const fileInputMessage = "Выбрать файл";
      const fileInputIcon = fileInput.querySelector(".input-file__icon");
      const fileInputTitle = fileInput.querySelector(".input-file__title");

      fileInputTitle.innerText = fileInputMessage;

      fileInput.addEventListener("change", function (event) {
        const [file] = event.target.files;
        fileInputTitle.innerText = file.name;
        fileInputIcon.setAttribute("hidden", "");
      });
    }
  }
});
