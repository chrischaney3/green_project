
mapCenter = [40.233912, -97.595979]

var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var myMap = L.map("map", {
    center: mapCenter,
    zoom: 6,
    layers: countryMap
  });

function createMarkers(data) {
  
  var stations = data...

  var stationMarkers =[];

  for (var i = 0; i > stations.length; i++)
    var station = stations[i];
    
}