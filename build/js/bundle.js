function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  {
    // Adding a custom property with a system scroll width
    Promise.resolve().then(function () { return getScrollSize$1; }).then(({
      default: getScrollSize
    }) => {
      document.documentElement.style.setProperty("--css-scroll-size", `${getScrollSize()}px`);
    });
  }
});

function getScrollSize () {
  const outer = document.createElement("div");
  const inner = document.createElement("div");
  outer.style.overflow = "scroll";
  outer.classList.add("scrollbar");
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
}

var getScrollSize$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getScrollSize
});
//# sourceMappingURL=bundle.js.map

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvdXRpbHMvZG9jdW1lbnRSZWFkeS5qcyIsIi4uLy4uL3NyYy9qcy9zY3JpcHQuanMiLCIuLi8uLi9zcmMvanMvdXRpbHMvZ2V0U2Nyb2xsU2l6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL3V0aWxzL2J1bmRsZUNvbmZpZy5qc1wiO1xuaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi91dGlscy9kb2N1bWVudFJlYWR5LmpzXCI7XG5cbnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgaWYgKGNvbmZpZy5nZXRTY3JvbGxTaXplKSB7XG4gICAgLy8gQWRkaW5nIGEgY3VzdG9tIHByb3BlcnR5IHdpdGggYSBzeXN0ZW0gc2Nyb2xsIHdpZHRoXG4gICAgaW1wb3J0KFwiLi91dGlscy9nZXRTY3JvbGxTaXplLmpzXCIpLnRoZW4oKHsgZGVmYXVsdDogZ2V0U2Nyb2xsU2l6ZSB9KSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNzcy1zY3JvbGwtc2l6ZVwiLCBgJHtnZXRTY3JvbGxTaXplKCl9cHhgKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gIG91dGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxiYXJcIik7XG4gIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gIGNvbnN0IHNjcm9sbGJhclNpemUgPSBvdXRlci5vZmZzZXRXaWR0aCAtIGlubmVyLm9mZnNldFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgcmV0dXJuIHNjcm9sbGJhclNpemU7XG59XG4iXSwibmFtZXMiOlsicmVhZHkiLCJmbiIsImRvY3VtZW50IiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJkZWZhdWx0IiwiZ2V0U2Nyb2xsU2l6ZSIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lciIsIm92ZXJmbG93IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJib2R5Iiwic2Nyb2xsYmFyU2l6ZSIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUVPLFNBQVNBLEtBQUtBLENBQUNDLEVBQUUsRUFBRTtBQUN4QixFQUFBLElBQUlDLFFBQVEsQ0FBQ0MsV0FBVyxHQUFHRCxRQUFRLENBQUNFLFVBQVUsS0FBSyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0UsVUFBVSxLQUFLLFNBQVMsRUFBRTtBQUNqR0gsSUFBQUEsRUFBRSxFQUFFLENBQUE7QUFDTixHQUFDLE1BQU07QUFDTEMsSUFBQUEsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUosRUFBRSxDQUFDLENBQUE7QUFDbkQsR0FBQTtBQUNGOztBQ0xBRCxLQUFLLENBQUMsWUFBWTtFQUNVO0FBQ3hCO0FBQ0EsSUFBQSwrREFBa0MsQ0FBQ00sSUFBSSxDQUFDLENBQUM7QUFBRUMsTUFBQUEsT0FBTyxFQUFFQyxhQUFBQTtBQUFjLEtBQUMsS0FBSztBQUN0RU4sTUFBQUEsUUFBUSxDQUFDTyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUdILEVBQUFBLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUN6RixLQUFDLENBQUMsQ0FBQTtBQUNKLEdBQUE7QUFDRixDQUFDLENBQUM7O0FDVmEsc0JBQVksSUFBQTtBQUN6QixFQUFBLE1BQU1JLEtBQUssR0FBR1YsUUFBUSxDQUFDVyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0MsRUFBQSxNQUFNQyxLQUFLLEdBQUdaLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzNDRCxFQUFBQSxLQUFLLENBQUNGLEtBQUssQ0FBQ0ssUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUMvQkgsRUFBQUEsS0FBSyxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUNoQ0wsRUFBQUEsS0FBSyxDQUFDTSxXQUFXLENBQUNKLEtBQUssQ0FBQyxDQUFBO0FBQ3hCWixFQUFBQSxRQUFRLENBQUNpQixJQUFJLENBQUNELFdBQVcsQ0FBQ04sS0FBSyxDQUFDLENBQUE7RUFDaEMsTUFBTVEsYUFBYSxHQUFHUixLQUFLLENBQUNTLFdBQVcsR0FBR1AsS0FBSyxDQUFDTyxXQUFXLENBQUE7QUFDM0RuQixFQUFBQSxRQUFRLENBQUNpQixJQUFJLENBQUNHLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLENBQUE7QUFDaEMsRUFBQSxPQUFPUSxhQUFhLENBQUE7QUFDdEI7Ozs7OyJ9{"version":3,"file":"bundle.js","sources":["../../src/js/utils/documentReady.js","../../src/js/script.js","../../src/js/utils/getScrollSize.js"],"sourcesContent":["\"use strict\";\n\nexport function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  }\n}\n","import { config } from \"./utils/bundleConfig.js\";\nimport { ready } from \"./utils/documentReady.js\";\n\nready(function () {\n  if (config.getScrollSize) {\n    // Adding a custom property with a system scroll width\n    import(\"./utils/getScrollSize.js\").then(({ default: getScrollSize }) => {\n      document.documentElement.style.setProperty(\"--css-scroll-size\", `${getScrollSize()}px`);\n    });\n  }\n});\n","export default function () {\n  const outer = document.createElement(\"div\");\n  const inner = document.createElement(\"div\");\n  outer.style.overflow = \"scroll\";\n  outer.classList.add(\"scrollbar\");\n  outer.appendChild(inner);\n  document.body.appendChild(outer);\n  const scrollbarSize = outer.offsetWidth - inner.offsetWidth;\n  document.body.removeChild(outer);\n  return scrollbarSize;\n}\n"],"names":["ready","fn","document","attachEvent","readyState","addEventListener","then","default","getScrollSize","documentElement","style","setProperty","outer","createElement","inner","overflow","classList","add","appendChild","body","scrollbarSize","offsetWidth","removeChild"],"mappings":"AAEO,SAASA,KAAKA,CAACC,EAAE,EAAE;AACxB,EAAA,IAAIC,QAAQ,CAACC,WAAW,GAAGD,QAAQ,CAACE,UAAU,KAAK,UAAU,GAAGF,QAAQ,CAACE,UAAU,KAAK,SAAS,EAAE;AACjGH,IAAAA,EAAE,EAAE,CAAA;AACN,GAAC,MAAM;AACLC,IAAAA,QAAQ,CAACG,gBAAgB,CAAC,kBAAkB,EAAEJ,EAAE,CAAC,CAAA;AACnD,GAAA;AACF;;ACLAD,KAAK,CAAC,YAAY;EACU;AACxB;AACA,IAAA,+DAAkC,CAACM,IAAI,CAAC,CAAC;AAAEC,MAAAA,OAAO,EAAEC,aAAAA;AAAc,KAAC,KAAK;AACtEN,MAAAA,QAAQ,CAACO,eAAe,CAACC,KAAK,CAACC,WAAW,CAAC,mBAAmB,EAAE,CAAGH,EAAAA,aAAa,EAAE,IAAI,CAAC,CAAA;AACzF,KAAC,CAAC,CAAA;AACJ,GAAA;AACF,CAAC,CAAC;;ACVa,sBAAY,IAAA;AACzB,EAAA,MAAMI,KAAK,GAAGV,QAAQ,CAACW,aAAa,CAAC,KAAK,CAAC,CAAA;AAC3C,EAAA,MAAMC,KAAK,GAAGZ,QAAQ,CAACW,aAAa,CAAC,KAAK,CAAC,CAAA;AAC3CD,EAAAA,KAAK,CAACF,KAAK,CAACK,QAAQ,GAAG,QAAQ,CAAA;AAC/BH,EAAAA,KAAK,CAACI,SAAS,CAACC,GAAG,CAAC,WAAW,CAAC,CAAA;AAChCL,EAAAA,KAAK,CAACM,WAAW,CAACJ,KAAK,CAAC,CAAA;AACxBZ,EAAAA,QAAQ,CAACiB,IAAI,CAACD,WAAW,CAACN,KAAK,CAAC,CAAA;EAChC,MAAMQ,aAAa,GAAGR,KAAK,CAACS,WAAW,GAAGP,KAAK,CAACO,WAAW,CAAA;AAC3DnB,EAAAA,QAAQ,CAACiB,IAAI,CAACG,WAAW,CAACV,KAAK,CAAC,CAAA;AAChC,EAAA,OAAOQ,aAAa,CAAA;AACtB;;;;;"}