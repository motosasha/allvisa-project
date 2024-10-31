import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";
import intlTelInput from "intl-tel-input";

const validationFormConfig = {
  errorFieldCssClass: "input--invalid",
  errorLabelStyle: {},
  errorLabelCssClass: ["form__field-error"],
};

ready(function () {
  const formLogin = document.querySelector("#formLogin");

  if (formLogin) {
    const actionUrl = formLogin.getAttribute("action");
    const formLoginValidate = new JustValidate(formLogin, validationFormConfig);

    formLoginValidate
      .addField(
        "input[id='phone']",
        [
          {
            rule: "required",
            errorMessage: "Обязательное поле",
          },
        ],
        {
          errorsContainer: document.querySelector(".form__field--login-phone"),
        },
      )
      .addField("input[name='password']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formLogin);
        const plainFormData = Object.fromEntries(formData.entries());
        fetch(actionUrl, formSendConfig(plainFormData)).then((response) => {
          if (response.ok) {
            alert("success");
          } else {
            alert("error");
          }
        });
      });
  }

  const intPhoneInput = formLogin.querySelector("#phone");
  intlTelInput(intPhoneInput, {
    loadUtilsOnInit: () => import("intl-tel-input/utils"),
    strictMode: true,
    preferredCountries: ["RU"],
    onlyCountries: [
      "AD",
      "AL",
      "AT",
      "BA",
      "BE",
      "BG",
      "BY",
      "CH",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "FI",
      "FO",
      "FR",
      "GB",
      "GI",
      "GR",
      "HR",
      "HU",
      "IE",
      "IS",
      "IT",
      "LI",
      "LT",
      "LU",
      "LV",
      "MC",
      "MD",
      "ME",
      "MK",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "RS",
      "RU",
      "SE",
      "SI",
      "SK",
      "SM",
      "UA",
      "VA",
    ],
  });
});

function formSendConfig(plainFormData) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(plainFormData),
  };
}
