import { ready } from "../../js/utils/documentReady.js";
import SlimSelect from "slim-select";
import JustValidate from "just-validate";
import {
  emailFieldValidationRules,
  isSelectHasValue,
  onValidationSuccess,
  phoneFieldValidationRules,
  requiredFieldValidationRules,
  selectFieldValidationConfig,
  textFieldValidationRules,
  validationFormConfig,
} from "../../js/common/formVariables.js";

const countries = [
  {
    text: "Выберите страну",
    value: "",
    html: "Выберите страну",
  },
  {
    text: "Австралия",
    value: "Австралия",
    html: `<span class="ss-flag australia">Австралия</span>`,
  },
  {
    text: "Австрия",
    value: "Австрия",
    html: `<span class="ss-flag austria">Австрия</span>`,
  },
  {
    text: "Бельгия",
    value: "Бельгия",
    html: `<span class="ss-flag belgium">Бельгия</span>`,
  },
  {
    text: "Болгария",
    value: "Болгария",
    html: `<span class="ss-flag bulgaria">Болгария</span>`,
  },
  {
    text: "Великобритания",
    value: "Великобритания",
    html: `<span class="ss-flag united-kingdom">Великобритания</span>`,
  },
  {
    text: "Венгрия",
    value: "Венгрия",
    html: `<span class="ss-flag hungary">Венгрия</span>`,
  },
  {
    text: "Вьетнам",
    value: "Вьетнам",
    html: `<span class="ss-flag vietnam">Вьетнам</span>`,
  },
  {
    text: "Германия",
    value: "Германия",
    html: `<span class="ss-flag germany">Германия</span>`,
  },
  {
    text: "Греция",
    value: "Греция",
    html: `<span class="ss-flag greece">Греция</span>`,
  },
  {
    text: "Дания",
    value: "Дания",
    html: `<span class="ss-flag denmark">Дания</span>`,
  },
  {
    text: "Индия",
    value: "Индия",
    html: `<span class="ss-flag india">Индия</span>`,
  },
  {
    text: "Индонезия",
    value: "Индонезия",
    html: `<span class="ss-flag indonesia">Индонезия</span>`,
  },
  {
    text: "Ирландия",
    value: "Ирландия",
    html: `<span class="ss-flag ireland">Ирландия</span>`,
  },
  {
    text: "Исландия",
    value: "Исландия",
    html: `<span class="ss-flag iceland">Исландия</span>`,
  },
  {
    text: "Испания",
    value: "Испания",
    html: `<span class="ss-flag spain">Испания</span>`,
  },
  {
    text: "Италия",
    value: "Италия",
    html: `<span class="ss-flag italy">Италия</span>`,
  },
  {
    text: "Канада",
    value: "Канада",
    html: `<span class="ss-flag canada">Канада</span>`,
  },
  {
    text: "Кипр",
    value: "Кипр",
    html: `<span class="ss-flag cyprus">Кипр</span>`,
  },
  {
    text: "Китай",
    value: "Китай",
    html: `<span class="ss-flag china">Китай</span>`,
  },
  {
    text: "Латвия",
    value: "Латвия",
    html: `<span class="ss-flag latvia">Латвия</span>`,
  },
  {
    text: "Литва",
    value: "Литва",
    html: `<span class="ss-flag lithuania">Литва</span>`,
  },
  {
    text: "Мальта",
    value: "Мальта",
    html: `<span class="ss-flag malta">Мальта</span>`,
  },
  {
    text: "Мексика",
    value: "Мексика",
    html: `<span class="ss-flag mexico">Мексика</span>`,
  },
  {
    text: "Нидерланды",
    value: "Нидерланды",
    html: `<span class="ss-flag netherlands">Нидерланды</span>`,
  },

  {
    text: "Новая Зеландия",
    value: "Новая Зеландия",
    html: `<span class="ss-flag new-zealand">Новая Зеландия</span>`,
  },
  {
    text: "Норвегия",
    value: "Норвегия",
    html: `<span class="ss-flag norway">Норвегия</span>`,
  },
  {
    text: "ОАЭ",
    value: "ОАЭ",
    html: `<span class="ss-flag uae">ОАЭ</span>`,
  },
  {
    text: "Польша",
    value: "Польша",
    html: `<span class="ss-flag poland">Польша</span>`,
  },
  {
    text: "Португалия",
    value: "Португалия",
    html: `<span class="ss-flag portugal">Португалия</span>`,
  },
  {
    text: "Румыния",
    value: "Румыния",
    html: `<span class="ss-flag romania">Румыния</span>`,
  },
  {
    text: "Сингапур",
    value: "Сингапур",
    html: `<span class="ss-flag singapore">Сингапур</span>`,
  },
  {
    text: "Словакия",
    value: "Словакия",
    html: `<span class="ss-flag slovakia">Словакия</span>`,
  },
  {
    text: "Словения",
    value: "Словения",
    html: `<span class="ss-flag slovenia">Словения</span>`,
  },
  {
    text: "США",
    value: "США",
    html: `<span class="ss-flag usa">США</span>`,
  },
  {
    text: "Тайланд",
    value: "Тайланд",
    html: `<span class="ss-flag thailand">Тайланд</span>`,
  },
  {
    text: "Франция",
    value: "Франция",
    html: `<span class="ss-flag france">Франция</span>`,
  },

  {
    text: "Финляндия",
    value: "Финляндия",
    html: `<span class="ss-flag finland">Финляндия</span>`,
  },
  {
    text: "Хорватия",
    value: "Хорватия",
    html: `<span class="ss-flag croatia">Хорватия</span>`,
  },
  {
    text: "Чехия",
    value: "Чехия",
    html: `<span class="ss-flag czech">Чехия</span>`,
  },
  {
    text: "Швейцария",
    value: "Швейцария",
    html: `<span class="ss-flag switzerland">Швейцария</span>`,
  },
  {
    text: "Швеция",
    value: "Швеция",
    html: `<span class="ss-flag sweden">Швеция</span>`,
  },
  {
    text: "Шри-Ланка",
    value: "Шри-Ланка",
    html: `<span class="ss-flag sri-lanka">Шри-Ланка</span>`,
  },
  {
    text: "Эстония",
    value: "Эстония",
    html: `<span class="ss-flag estonia">Эстония</span>`,
  },
  {
    text: "Южная Корея",
    value: "Южная Корея",
    html: `<span class="ss-flag south-korea">Южная Корея</span>`,
  },
  {
    text: "Япония",
    value: "Япония",
    html: `<span class="ss-flag japan">Япония</span>`,
  },
];
const currentYear = new Date().getFullYear();

function getDaysInMonth(month) {
  return new Date(currentYear, month, 0).getDate();
}

ready(function () {
  const requestForm = document.querySelector("#requestForm");

  if (requestForm) {
    const actionUrl = requestForm.getAttribute("action");
    const selectedCountry = requestForm.getAttribute("data-selected-country");
    const formValidate = new JustValidate(requestForm, validationFormConfig);
    const countrySelect = requestForm.querySelector("[data-country-select]");
    const visaTypeSelect = requestForm.querySelector("select[name='visaType']");
    const monthSelect = requestForm.querySelector("#month");
    const daysSelectElem = requestForm.querySelector("#days");
    const formButtonForward = requestForm.querySelector("[data-action='forward']");
    let currentStep = 1;
    let isDaySelectInit = false;
    let daysSelect;

    formValidate
      .addField("select[name='country']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("select[name='visaType']", requiredFieldValidationRules, selectFieldValidationConfig)
      .addField("input[name='phone']", phoneFieldValidationRules)
      .addField("input[name='name']", textFieldValidationRules)
      .addField("input[name='email']", emailFieldValidationRules)
      .onSuccess(() => {
        onValidationSuccess(
          requestForm,
          actionUrl,
          () => {
            requestForm.dataset.steps = (++currentStep).toString();
          },
          () => {
            alert("Ошибка! Попробуйте повторить отправку формы позже.");
          },
        );
      });

    function createDaysSelect(month) {
      if (isDaySelectInit) {
        daysSelect.destroy();
      }

      let daysInMonth = getDaysInMonth(month);
      let daysArray = [];

      if (month === "2" && (currentYear % 4 === 0 || (currentYear + 1) % 4 === 0)) {
        daysInMonth = 29;
      }

      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({
          text: i,
          value: i,
        });
      }

      daysSelect = new SlimSelect({
        select: daysSelectElem,
        data: daysArray,
        settings: {
          showSearch: false,
        },
      });

      isDaySelectInit = true;
    }

    createDaysSelect(monthSelect.value);

    monthSelect.addEventListener("change", () => {
      createDaysSelect(monthSelect.value);
    });

    visaTypeSelect.addEventListener("change", () => {
      formValidate.revalidateField("select[name='visaType']");
    });

    const countrySlimSelect = new SlimSelect({
      select: countrySelect,
      data: countries,
      settings: {
        showSearch: false,
      },
      events: {
        afterChange: () => {
          formValidate.revalidateField("select[name='country']");
        },
      },
    });

    if (selectedCountry) countrySlimSelect.setSelected(selectedCountry);

    isSelectHasValue(countrySelect);
    isSelectHasValue(daysSelectElem);

    if (formButtonForward) {
      formButtonForward.addEventListener("click", function (e) {
        let isCountryFieldValid;
        let isVisaTypeFieldValid;
        formValidate.revalidateField("select[name='country']").then((isValid) => {
          isCountryFieldValid = isValid;
        });
        formValidate.revalidateField("select[name='visaType']").then((isValid) => {
          isVisaTypeFieldValid = isValid;

          if (isCountryFieldValid && isVisaTypeFieldValid) {
            e.preventDefault();
            requestForm.dataset.steps = (++currentStep).toString();
          }
        });
      });
    }
  }
});
