import { ready } from "../../js/utils/documentReady.js";
import SlimSelect from "slim-select";
import { isSelectHasValue } from "../../js/common/formVariables.js";

ready(function () {
  const selects = document.querySelectorAll("[data-slim-select]");
  if (selects.length !== 0) {
    for (let select of selects) {
      new SlimSelect({
        select: select,
        settings: {
          showSearch: false,
        },
      });

      isSelectHasValue(select);
    }
  }
});
