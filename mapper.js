
console.log("2012 Data: ", data2012);
console.log("2014 Data: ", data2014);
console.log("2021 Data: ", data2021);

mapCenter = [38.147853, -98.612973];

var markers2012 = [];
var markers2014 = [];
var markers2021 = [];

function createMarkers(data) {
  for (var i = 0; i < data.length; i++) {
    var station = data[i];

    var marker = L.marker([parseFloat(station.Latitude), parseFloat(station.Longitude)]).bindPopup("Station Name: "
    + station["Station Name"] + "<br>Location: " + station.City + ", " + station.State);

    if (data == data2012) {
      markers2012.push(marker);
    }
    else if (data == data2014) {
      markers2014.push(marker);
    }
    else if (data == data2021) {
      markers2021.push(marker);
    }
  }
}

createMarkers(data2012);
createMarkers(data2014);
createMarkers(data2021);

console.log("# of 2012 markers: ", markers2012.length)
console.log("# of 2014 markers: ", markers2014.length)
console.log("# of 2021 markers: ", markers2021.length)

var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var layer2012 = L.layerGroup(markers2012);
var layer2014 = L.layerGroup(markers2014);
var layer2021 = L.layerGroup(markers2021);

var baseMaps = {
  "Country Map": countryMap
};

var overlayMaps = {
  "2012": layer2012,
  "2014": layer2014,
  "2021": layer2021
}

var myMap = L.map("map", {
  center: mapCenter,
  zoom: 5,
  layers: [countryMap, layer2012, layer2014, layer2021]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
