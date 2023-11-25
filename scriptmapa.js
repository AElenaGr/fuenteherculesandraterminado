var map = L.map('map').setView([40.0405,-3.6124], 15); //15=zoom
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy;TandemAranjuez'
}).addTo(map);


//DAMOS DE ALTA ICONOS 

var orangeIcon = L.icon({
  iconUrl: 'leaf-orange.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var markerHercules = L.marker([40.03712,-3.60799],{icon: orangeIcon}).addTo(map);

//var contorno parque
var polygon = L.polygon([
  [40.03712,-3.60799],


]).addTo(map);
