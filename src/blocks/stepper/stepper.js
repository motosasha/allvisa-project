import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";
import {
  validationFormConfig,
  phoneFieldValidationRules,
  textFieldValidationRules,
  emailFieldValidationRules,
  onValidationSuccess,
} from "../../js/common/formVariables.js";

ready(function () {
  const stepper = document.querySelector("#intPassForm");

  if (stepper) {
    const actionUrl = stepper.getAttribute("action");
    const formValidate = new JustValidate(stepper, validationFormConfig);

    const formButtonForward = stepper.querySelector("button[data-action='forward']");
    const formButtonBack = stepper.querySelector("button[data-action='back']");
    const formButtonSubmit = stepper.querySelector("button[data-action='submit']");
    let currentStep = 1;

    if (formButtonForward) {
      formButtonForward.addEventListener("click", function (e) {
        e.preventDefault();
        stepper.dataset.steps = (++currentStep).toString();
        if (currentStep > 1) formButtonBack.removeAttribute("disabled");
        if (currentStep === 4) {
          formButtonForward.setAttribute("hidden", "true");
          formButtonSubmit.removeAttribute("hidden");
        }
      });
    }

    if (formButtonBack) {
      formButtonBack.addEventListener("click", function (e) {
        e.preventDefault();
        stepper.dataset.steps = (--currentStep).toString();
        if (currentStep === 1) formButtonBack.setAttribute("disabled", "true");
        if (currentStep < 5) {
          formButtonForward.removeAttribute("hidden");
          formButtonSubmit.setAttribute("hidden", "true");
        }
      });
    }

    formValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(
          stepper,
          actionUrl,
          () => {
            stepper.dataset.steps = (++currentStep).toString();
          },
          () => {
            alert("Ошибка! Попробуйте повторить отправку формы позже.");
          },
        );
      });
  }
});
