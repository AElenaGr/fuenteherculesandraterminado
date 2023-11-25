// geolocalizacion.js

// Referencia al mapa Leaflet
var map = L.map('map').setView([40.0405, -3.6124], 15); // Asegúrate de que estas coordenadas coincidan con tu ubicación inicial y nivel de zoom

// Activar geolocalización al hacer clic en el botón
document.getElementById('geolocalizar').addEventListener('click', function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            map.setView(latlng, 16); // Ajusta el nivel de zoom según tus preferencias
            L.marker(latlng).addTo(map)
                .bindPopup("Tu ubicación").openPopup();
        }, function (error) {
            console.error("Error al obtener la ubicación: " + error.message);
        });
    } else {
        alert("Tu navegador no admite geolocalización.");
    }
});

// Función para manejar el evento de ubicación encontrada
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(map)
        .bindPopup("Usted está a " + radius + " metros de este punto").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

// Escuchar el evento de ubicación encontrada
map.on('locationfound', onLocationFound);
