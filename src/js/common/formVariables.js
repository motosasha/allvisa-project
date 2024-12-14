export const validationFormConfig = {
  errorFieldCssClass: "input--invalid",
  errorLabelStyle: {},
  errorLabelCssClass: ["form__field-error"],
};

const requiredFieldValidationRule = {
  rule: "required",
  errorMessage: "Обязательное поле",
};

export const phoneFieldValidationRules = [
  requiredFieldValidationRule,
  {
    rule: "customRegexp",
    value: /^(\+7)[\s-]\(([0-9]{3})\)[\s-]([0-9]{3})[\s-]([0-9]{2})[\s-]([0-9]{2})/gi,
    errorMessage: "Неверное значение",
  },
];

export const textFieldValidationRules = [
  requiredFieldValidationRule,
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Значение слишком короткое",
  },
  {
    rule: "maxLength",
    value: 50,
    errorMessage: "Значение слишком длинное",
  },
];

export const emailFieldValidationRules = [
  requiredFieldValidationRule,
  {
    rule: "email",
    errorMessage: "Неверное значение",
  },
];

export const requiredFieldValidationRules = [requiredFieldValidationRule];

export const integerFieldValidationRules = [
  requiredFieldValidationRule,
  {
    rule: "integer",
    errorMessage: "Введите число",
  },
];

export const selectFieldValidationConfig = {
  errorFieldCssClass: "select--invalid",
};

export function formSendConfig(plainFormData) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(plainFormData),
  };
}

export const onValidationSuccess = (form, actionUrl, success, error) => {
  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  fetch(actionUrl, formSendConfig(plainFormData)).then((response) => {
    if (response.ok) {
      success();
    } else {
      error();
    }
  });
};

export const isSelectHasValue = (select) => {
  if (select.value.length !== 0) select.classList.add("select--has-value");
  select.addEventListener("change", function () {
    this.value.length !== 0 ? this.classList.add("select--has-value") : this.classList.remove("select--has-value");
  });
};
