
let map = L.map('map1').setView([28.183893, -80.613107], 13.22);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(map);

let marker1 = L.marker([28.179256841028465, -80.60572251437472]).addTo(map);
let marker2 = L.marker([28.1736692659885, -80.59034004567823]).addTo(map);
let marker3 = L.marker([28.164586543320894, -80.5881956195684]).addTo(map);
let marker4 = L.marker([28.19846443002029, -80.59658321248597]).addTo(map);

marker1.bindPopup("Long Doggers").openPopup();
marker2.bindPopup("Dakine Diegos")
marker3.bindPopup("Doubles")
marker4.bindPopup("Niki's Rainbow Diner")
