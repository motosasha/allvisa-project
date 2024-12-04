import { ready } from "../../js/utils/documentReady.js";
import HystModal from "../../js/vendor/hystmodal.esm.js";

ready(function () {
  window.modals = new HystModal({
    linkAttributeName: "data-modal",
    catchFocus: true,
    closeOnEsc: true,
  });
});
