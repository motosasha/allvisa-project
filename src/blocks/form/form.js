import { ready } from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";
import {
  validationFormConfig,
  phoneFieldValidationRules,
  textFieldValidationRules,
  emailFieldValidationRules,
  requiredFieldValidationRules,
  integerFieldValidationRules,
  selectFieldValidationConfig,
  onValidationSuccess,
} from "../../js/common/formVariables.js";

const successFn = () => {
  alert("success");
};
const errorFn = () => {
  alert("error");
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
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("input[name='citizenship']", requiredFieldValidationRules)
      .addField("select[name='visaType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='country']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='amount']", integerFieldValidationRules)
      .addField("input[name='dateStart']", requiredFieldValidationRules)
      .addField("input[name='dateEnd']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formVisa, actionUrl, successFn, errorFn);
      });
  }

  if (formAtes) {
    const actionUrl = formAtes.getAttribute("action");
    const formAtesValidate = new JustValidate(formAtes, validationFormConfig);

    formAtesValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("input[name='citizenship']", requiredFieldValidationRules)
      .addField("input[name='amount']", integerFieldValidationRules)
      .addField("input[name='dateStart']", requiredFieldValidationRules)
      .addField("input[name='dateEnd']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formAtes, actionUrl, successFn, errorFn);
      });
  }

  if (formWork) {
    const actionUrl = formWork.getAttribute("action");
    const formWorkValidate = new JustValidate(formWork, validationFormConfig);

    formWorkValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("input[name='citizenship']", requiredFieldValidationRules)
      .addField("select[name='country']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='amount']", integerFieldValidationRules)
      .addField("input[name='dateStart']", requiredFieldValidationRules)
      .addField("input[name='dateEnd']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formWork, actionUrl, successFn, errorFn);
      });
  }

  if (formCitizenship) {
    const actionUrl = formCitizenship.getAttribute("action");
    const formCitizenshipValidate = new JustValidate(formCitizenship, validationFormConfig);

    formCitizenshipValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("select[name='citizenshipCountry']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='program']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='criminalRecord']", requiredFieldValidationRules, selectFieldValidationConfig)
      .onSuccess(() => {
        onValidationSuccess(formCitizenship, actionUrl, successFn, errorFn);
      });
  }

  if (formIntPassport) {
    const actionUrl = formIntPassport.getAttribute("action");
    const formIntPassportValidate = new JustValidate(formIntPassport, validationFormConfig);

    formIntPassportValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("select[name='age']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='militaryId']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='debt']", requiredFieldValidationRules, selectFieldValidationConfig)
      .onSuccess(() => {
        onValidationSuccess(formIntPassport, actionUrl, successFn, errorFn);
      });
  }

  if (formInvite) {
    const actionUrl = formInvite.getAttribute("action");
    const formInviteValidate = new JustValidate(formInvite, validationFormConfig);

    formInviteValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("select[name='inviteType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='stayDuration']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='inviteeCountry']", textFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formInvite, actionUrl, successFn, errorFn);
      });
  }

  if (formAvia) {
    const actionUrl = formAvia.getAttribute("action");
    const formAviaValidate = new JustValidate(formAvia, validationFormConfig);

    formAviaValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("select[name='serviceType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='passengersNumber']", integerFieldValidationRules)
      .addField("input[name='whatDate']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formAvia, actionUrl, successFn, errorFn);
      });
  }

  if (formBusiness) {
    const actionUrl = formBusiness.getAttribute("action");
    const formBusinessValidate = new JustValidate(formBusiness, validationFormConfig);

    formBusinessValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("input[name='citizenship']", requiredFieldValidationRules)
      .addField("select[name='inviteType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='country']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='amount']", integerFieldValidationRules)
      .addField("input[name='dateStart']", requiredFieldValidationRules)
      .addField("input[name='dateEnd']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formBusiness, actionUrl, successFn, errorFn);
      });
  }

  if (formMedical) {
    const actionUrl = formMedical.getAttribute("action");
    const formMedicalValidate = new JustValidate(formMedical, validationFormConfig);

    formMedicalValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .addField("input[name='citizenship']", requiredFieldValidationRules)
      .addField("select[name='inviteType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='country']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='amount']", integerFieldValidationRules)
      .addField("input[name='dateStart']", requiredFieldValidationRules)
      .addField("input[name='dateEnd']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formMedical, actionUrl, successFn, errorFn);
      });
  }

  if (formOthers) {
    const actionUrl = formOthers.getAttribute("action");
    const formOthersValidate = new JustValidate(formOthers, validationFormConfig);

    formOthersValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='type']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formOthers, actionUrl, successFn, errorFn);
      });
  }

  if (formMyData) {
    const actionUrl = formMyData.getAttribute("action");
    const formMyDataValidate = new JustValidate(formMyData, validationFormConfig);

    formMyDataValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='lastname']", textFieldValidationRules)
      .addField("input[name='middleName']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='birthday']", requiredFieldValidationRules)
      .addField("input[name='currentCitizenship']", requiredFieldValidationRules)
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
      .addField("input[name='intIssuedBy']", requiredFieldValidationRules)
      .addField("input[name='intIssueDate']", requiredFieldValidationRules)
      .addField("input[name='intExpiryDate']", requiredFieldValidationRules)
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
      .addField("input[name='passIssuedBy']", requiredFieldValidationRules)
      .addField("input[name='passIssueDate']", requiredFieldValidationRules)
      .addField("input[name='passExpiryDate']", requiredFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formMyData, actionUrl, successFn, errorFn);
      });
  }

  if (formPayment) {
    const actionUrl = formPayment.getAttribute("action");
    const formPaymentValidate = new JustValidate(formPayment, validationFormConfig);

    formPaymentValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='sum']", integerFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formPayment, actionUrl, successFn, errorFn);
      });
  }

  if (formFeedBack) {
    const actionUrl = formFeedBack.getAttribute("action");
    const formFeedBackValidate = new JustValidate(formFeedBack, validationFormConfig);

    formFeedBackValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(formFeedBack, actionUrl, successFn, errorFn);
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
        onValidationSuccess(formAddFile, actionUrl, successFn, errorFn);
      });
  }

  if (formCallback) {
    const actionUrl = formCallback.getAttribute("action");
    const formCallbackValidate = new JustValidate(formCallback, validationFormConfig);

    formCallbackValidate
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .addField("input[name='city']", textFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(
          formCallback,
          actionUrl,
          () => {
            location.replace("/thanks.html");
          },
          errorFn,
        );
      });
  }
});
