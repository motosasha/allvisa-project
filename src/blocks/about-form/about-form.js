import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";
import {
  emailFieldValidationRules,
  onValidationSuccess,
  phoneFieldValidationRules,
  requiredFieldValidationRules,
  selectFieldValidationConfig,
  textFieldValidationRules,
  validationFormConfig,
} from "../../js/common/formVariables.js";

const successFn = () => {
  alert("success");
};
const errorFn = () => {
  alert("error");
};

ready(function () {
  const aboutForm = document.querySelector("#aboutForm");

  if (aboutForm) {
    const actionUrl = aboutForm.getAttribute("action");
    const formValidate = new JustValidate(aboutForm, validationFormConfig);

    formValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(aboutForm, actionUrl, successFn, errorFn);
      });
  }
});
