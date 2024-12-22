import { ready } from "../../js/utils/documentReady.js";

ready(function () {
  const docTabsBlock = document.querySelector(".doc-tabs");

  if (!docTabsBlock) return;

  const tabsTriggers = docTabsBlock.querySelectorAll("[data-tab-trigger]");
  const tabsContentPanes = docTabsBlock.querySelectorAll("[data-tab-content]");

  tabsTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const triggerTarget = trigger.getAttribute("data-tab-trigger");
      tabsTriggers.forEach((button) => {
        button.removeAttribute("data-active");
      });
      trigger.setAttribute("data-active", "");

      tabsContentPanes.forEach((contentPane) => {
        const contentPaneLabel = contentPane.getAttribute("data-tab-content");
        if (triggerTarget === contentPaneLabel) {
          contentPane.setAttribute("data-active", "");
        } else contentPane.removeAttribute("data-active");
      });
    });
  });
});
