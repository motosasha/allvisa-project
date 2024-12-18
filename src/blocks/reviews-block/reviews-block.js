import { ready } from "../../js/utils/documentReady.js";

ready(function () {
  const reviewsBlock = document.querySelectorAll(".reviews-block");

  if (!reviewsBlock) return;

  const reviewsTriggers = document.querySelectorAll("[data-reviews-trigger]");
  const reviewsTiles = document.querySelectorAll("[data-review-tile]");

  reviewsTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const tag = trigger.dataset.reviewsTrigger;
      console.log(tag);
      reviewsTriggers.forEach((button) => {
        button.removeAttribute("data-active");
      });
      trigger.setAttribute("data-active", "");
      reviewsFilter(tag);
    });
  });

  function reviewsFilter(tag) {
    // console.log(tag);
    if (tag === "all") {
      reviewsTiles.forEach((tile) => {
        tile.removeAttribute("hidden");
      });
    } else {
      reviewsTiles.forEach((tile) => {
        if (tile.dataset.reviewTile !== tag) {
          tile.setAttribute("hidden", "");
        } else {
          tile.removeAttribute("hidden");
        }
      });
    }
  }
});
