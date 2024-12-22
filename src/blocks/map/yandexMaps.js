const markAllVisa = [55.754172, 37.635143];
const mapCenterMobile = [55.75256, 37.635172];
const mapCenterTablet = [55.753257, 37.635075];
const mapCenterDesktop = [55.754194, 37.637446];

ymaps.ready(init);

function changeMapCenter(map) {
  if (window.innerWidth >= 992) {
    map.setCenter(mapCenterDesktop);
  } else if (window.innerWidth >= 600 && window.innerWidth < 991) {
    map.setCenter(mapCenterTablet);
  } else map.setCenter(mapCenterMobile);
}

function init() {
  const yandexMap = new ymaps.Map("map", {
    center: mapCenterDesktop,
    zoom: 17,
    controls: ["geolocationControl"],
  });

  const markContent = {
    balloonContent: "Allvisa",
    hintContent: "Allvisa",
  };
  const markPreset = {
    preset: "islands#darkGreenDotIcon",
  };

  yandexMap.geoObjects.add(new ymaps.Placemark(markAllVisa, markContent, markPreset));

  changeMapCenter(yandexMap);

  window.addEventListener("resize", () => {
    changeMapCenter(yandexMap);
  });
}
