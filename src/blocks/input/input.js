import { ready } from "../../js/utils/documentReady";
import IMask from "imask";

ready(function () {
  const inputs = document.querySelectorAll(".input");
  if (inputs.length !== 0) {
    for (let input of inputs) {
      if (input.value.length !== 0) input.classList.add("input--has-value");
      input.addEventListener("input", function () {
        this.value.length !== 0 ? this.classList.add("input--has-value") : this.classList.remove("input--has-value");
      });
    }
  }

  const phoneFields = document.querySelectorAll("[data-phone-field]");
  if (phoneFields) {
    phoneFields.forEach((field) => {
      IMask(field, {
        lazy: true,
        mask: "+{7} (000) 000 00 00",
        prepare: function (appended, masked) {
          if (appended === "8" && masked.value === "") {
            return "+7";
          }
          return appended;
        },
      });
    });
  }

  const numberFields = document.querySelectorAll("input[data-number]");
  if (numberFields) {
    numberFields.forEach((field) => {
      IMask(field, {
        mask: Number,
        min: 0,
      });
    });
  }

  const passportRussia = document.querySelectorAll("input[data-passport-russia]");
  if (passportRussia) {
    passportRussia.forEach((field) => {
      IMask(field, {
        lazy: true,
        mask: "0000 000000",
      });
    });
  }

  const passportInt = document.querySelectorAll("input[data-passport-int]");
  if (passportInt) {
    passportInt.forEach((field) => {
      IMask(field, {
        lazy: true,
        mask: "00 0000000",
      });
    });
  }
});
