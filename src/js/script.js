L.map('background-map', {
  center: [37.739, -117.986],
  zoom: 10,
  scrollWheelZoom: false,
  touchZoom: true,
  zoomControl: false,
  tap: false,
  attributionControl: false,
  layers: [L.esri.basemapLayer('Topographic')]
});

var map;

if (map) {
  map.scrollWheelZoom.disable();
  map.once('click', accidentalScroll, map);
}

function accidentalScroll () {
  map.scrollWheelZoom.enable();
}

// Automatically generate links on the heading elements on a page
var pageHeadings = document.querySelectorAll('h2, h3, h4, h5, h6');
for (var i = 0; i < pageHeadings.length; ++i) {
  pageHeadings[i].addEventListener('click', function () {
    window.location.hash = this.id;
  });
}

// First we check if you support touch, otherwise it's click:
var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

// Mobile nav logic
document.addEventListener(touchEvent, function (e) {
  if (e.target.className !== 'mobileMenuButton') return;
  e.preventDefault();

  var menu = document.querySelector('#site-nav-wrapper'); // Using a class instead, see note below.
  menu.classList.toggle('show');
}, false);
