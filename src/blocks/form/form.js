import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";

const validationFormConfig = {
  errorFieldCssClass: "input--invalid",
  errorLabelStyle: {},
  errorLabelCssClass: ["form__field-error"],
};

ready(function () {
  const formNewRequest = document.querySelector("#formNewRequest");
  const formMyData = document.querySelector("#formMyData");
  const formPayment = document.querySelector("#formPayment");
  const formFeedBack = document.querySelector("#formFeedBack");

  if (formNewRequest) {
    const actionUrl = formNewRequest.getAttribute("action");
    const formNewRequestValidate = new JustValidate(formNewRequest, validationFormConfig);

    formNewRequestValidate
      .addField("input[name='phone']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /^(\+7)[\s-]\(([0-9]{3})\)[\s-]([0-9]{3})[\s-]([0-9]{2})[\s-]([0-9]{2})/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='name']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='lastname']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='email']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "email",
          errorMessage: "Неверное значение",
        },
      ])
      .addField(
        "select[name='type']",
        [
          {
            rule: "required",
            errorMessage: "Обязательное поле",
          },
        ],
        {
          errorFieldCssClass: "select--invalid",
        },
      )
      .addField("input[name='citizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='country']",
        [
          {
            rule: "required",
            errorMessage: "Обязательное поле",
          },
        ],
        {
          errorFieldCssClass: "select--invalid",
        },
      )
      .addField("input[name='amount']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "integer",
          errorMessage: "Введите число",
        },
      ])
      .addField("input[name='dateStart']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='dateEnd']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formNewRequest);
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

  if (formMyData) {
    const actionUrl = formMyData.getAttribute("action");
    const formMyDataValidate = new JustValidate(formMyData, validationFormConfig);

    formMyDataValidate
      .addField("input[name='phone']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /^(\+7)[\s-]\(([0-9]{3})\)[\s-]([0-9]{3})[\s-]([0-9]{2})[\s-]([0-9]{2})/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='name']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='lastname']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='middleName']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='email']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "email",
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='birthday']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='currentCitizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='intPassNumber']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /\d{2}\s\d{7}/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='intIssuedBy']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='intIssueDate']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='intExpiryDate']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='passNumber']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /\d{4}\s\d{6}/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='passIssuedBy']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='passIssueDate']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='passExpiryDate']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formMyData);
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

  if (formPayment) {
    const actionUrl = formPayment.getAttribute("action");
    const formPaymentValidate = new JustValidate(formPayment, validationFormConfig);

    formPaymentValidate
      .addField("input[name='name']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='phone']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /^(\+7)[\s-]\(([0-9]{3})\)[\s-]([0-9]{3})[\s-]([0-9]{2})[\s-]([0-9]{2})/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='email']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "email",
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='sum']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "integer",
          errorMessage: "Введите число",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formPayment);
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

  if (formFeedBack) {
    const actionUrl = formFeedBack.getAttribute("action");
    const formFeedBackValidate = new JustValidate(formFeedBack, validationFormConfig);

    formFeedBackValidate
      .addField("input[name='name']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
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
      ])
      .addField("input[name='email']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "email",
          errorMessage: "Неверное значение",
        },
      ])
      .addField("input[name='phone']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "customRegexp",
          value: /^(\+7)[\s-]\(([0-9]{3})\)[\s-]([0-9]{3})[\s-]([0-9]{2})[\s-]([0-9]{2})/gi,
          errorMessage: "Неверное значение",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formFeedBack);
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
