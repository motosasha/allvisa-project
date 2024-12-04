import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";

const validationFormConfig = {
  errorFieldCssClass: "input--invalid",
  errorLabelStyle: {},
  errorLabelCssClass: ["form__field-error"],
};

ready(function () {
  const formMyData = document.querySelector("#formMyData");
  const formPayment = document.querySelector("#formPayment");
  const formFeedBack = document.querySelector("#formFeedBack");
  const formAddFile = document.querySelector("#formAddFile");

  const formVisa = document.querySelector("#formVisa");
  const formAtes = document.querySelector("#formAtes");
  const formWork = document.querySelector("#formWork");
  const formCitizenship = document.querySelector("#formCitizenship");
  const formIntPassport = document.querySelector("#formIntPassport");
  const formInvite = document.querySelector("#formInvite");
  const formAvia = document.querySelector("#formAvia");
  const formBusiness = document.querySelector("#formBusiness");
  const formMedical = document.querySelector("#formMedical");
  const formOthers = document.querySelector("#formOthers");
  const formCallback = document.querySelector("#formCallback");

  if (formVisa) {
    const actionUrl = formVisa.getAttribute("action");
    const formVisaValidate = new JustValidate(formVisa, validationFormConfig);

    formVisaValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='citizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='visaType']",
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
        const formData = new FormData(formVisa);
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

  if (formAtes) {
    const actionUrl = formAtes.getAttribute("action");
    const formAtesValidate = new JustValidate(formAtes, validationFormConfig);

    formAtesValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='citizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
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
        const formData = new FormData(formAtes);
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

  if (formWork) {
    const actionUrl = formWork.getAttribute("action");
    const formWorkValidate = new JustValidate(formWork, validationFormConfig);

    formWorkValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
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
        const formData = new FormData(formWork);
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

  if (formCitizenship) {
    const actionUrl = formCitizenship.getAttribute("action");
    const formCitizenshipValidate = new JustValidate(formCitizenship, validationFormConfig);

    formCitizenshipValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='citizenshipCountry']",
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
      .addField(
        "select[name='program']",
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
      .addField(
        "select[name='criminalRecord']",
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
      .onSuccess(() => {
        const formData = new FormData(formCitizenship);
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

  if (formIntPassport) {
    const actionUrl = formIntPassport.getAttribute("action");
    const formIntPassportValidate = new JustValidate(formIntPassport, validationFormConfig);

    formIntPassportValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='age']",
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
      .addField(
        "select[name='militaryId']",
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
      .addField(
        "select[name='debt']",
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
      .onSuccess(() => {
        const formData = new FormData(formIntPassport);
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

  if (formInvite) {
    const actionUrl = formInvite.getAttribute("action");
    const formInviteValidate = new JustValidate(formInvite, validationFormConfig);

    formInviteValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='inviteType']",
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
      .addField(
        "select[name='stayDuration']",
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
      .addField("input[name='inviteeCountry']", [
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
      .onSuccess(() => {
        const formData = new FormData(formInvite);
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

  if (formAvia) {
    const actionUrl = formAvia.getAttribute("action");
    const formAviaValidate = new JustValidate(formAvia, validationFormConfig);

    formAviaValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='serviceType']",
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
      .addField("input[name='passengersNumber']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
        {
          rule: "integer",
          errorMessage: "Введите число",
        },
      ])
      .addField("input[name='whatDate']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formAvia);
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

  if (formBusiness) {
    const actionUrl = formBusiness.getAttribute("action");
    const formBusinessValidate = new JustValidate(formBusiness, validationFormConfig);

    formBusinessValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='citizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='inviteType']",
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
        const formData = new FormData(formBusiness);
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

  if (formMedical) {
    const actionUrl = formMedical.getAttribute("action");
    const formMedicalValidate = new JustValidate(formMedical, validationFormConfig);

    formMedicalValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("input[name='citizenship']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField(
        "select[name='inviteType']",
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
        const formData = new FormData(formMedical);
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

  if (formOthers) {
    const actionUrl = formOthers.getAttribute("action");
    const formOthersValidate = new JustValidate(formOthers, validationFormConfig);

    formOthersValidate
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
      .addField("input[name='type']", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .onSuccess(() => {
        const formData = new FormData(formOthers);
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

  if (formAddFile) {
    const actionUrl = formAddFile.getAttribute("action");
    const formAddFileValidate = new JustValidate(formAddFile, validationFormConfig);

    formAddFileValidate
      .addField(
        "[name='doc']",
        [
          {
            rule: "minFilesCount",
            value: 1,
            errorMessage: "Нужно выбрать файл",
          },
          {
            rule: "maxFilesCount",
            value: 3,
            errorMessage: "Обязательное поле",
          },
          {
            rule: "files",
            value: {
              files: {
                extensions: ["xls", "xlsx", "doc", "docx", "png", "jpg", "jpeg", "pdf"],
                maxSize: 5_000_000,
                minSize: 1_000,
                types: [
                  "application/vnd.ms-excel",
                  "application/msword",
                  "application/pdf",
                  "image/jpeg",
                  "image/jpg",
                  "image/png",
                ],
              },
            },
            errorMessage: `Файл должен быть документом (xls, xlsx, doc, docx, pdf) или изображением (png, jpg, jpeg),
              максимальный размер файла 5mb`,
          },
        ],
        {
          errorFieldCssClass: "input-file__input--invalid",
          errorLabelCssClass: "input-file__error",
        },
      )
      .onSuccess(() => {
        const formData = new FormData(formAddFile);
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

  if (formCallback) {
    const actionUrl = formCallback.getAttribute("action");
    const formCallbackValidate = new JustValidate(formCallback, validationFormConfig);

    formCallbackValidate
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
      .addField("input[name='city']", [
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
      .onSuccess(() => {
        const formData = new FormData(formCallback);
        const plainFormData = Object.fromEntries(formData.entries());
        fetch(actionUrl, formSendConfig(plainFormData)).then((response) => {
          if (response.ok) {
            location.replace("/thanks/");
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
