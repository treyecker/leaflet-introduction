
let map = L.map('map2').setView([38.793211, -95.831676], 3.56);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker([ places[i].latitude, places[i].longitude ]).bindPopup( '<h3>' + places[i].location + '</h3>' + '<p>' + places[i].description + '</p>').addTo(map);
}
