// log data to the console to confirm variables are called
console.log("2012 Data: ", data2012);
console.log("2014 Data: ", data2014);
console.log("2021 Data: ", data2021);

// declare center for map
var usCenter = [38.147853, -98.612973];

// empty arrays to hold markers for each year's data
var markers2012 = [];
var markers2014 = [];
var markers2021 = [];

// function to pull coordinates from data
function createMarkers(data) {
  for (var i = 0; i < data.length; i++) {
    var station = data[i];

    var coordinates = [parseFloat(station.Latitude), parseFloat(station.Longitude)]

    if (data == data2012) {
      markers2012.push(coordinates);
    }
    else if (data == data2014) {
      markers2014.push(coordinates);
    }
    else if (data == data2021) {
      markers2021.push(coordinates);
    }
  }
}

// call upon the function for each dataset
createMarkers(data2012);
createMarkers(data2014);
createMarkers(data2021);

// log to the console the number of markers
console.log("# of 2012 markers: ", markers2012.length);
console.log("# of 2014 markers: ", markers2014.length);
console.log("# of 2021 markers: ", markers2021.length);

// variable to house heatmap specifics
var heatLevels = {
  radius: 20,
  blur: 10,
  gradient:{
    0.45: 'blue', 0.5: 'lime', 1: 'red'
  }
};

// build layers for each year using marker arrays
var layer2012 = L.heatLayer(markers2012, heatLevels);
var layer2014 = L.heatLayer(markers2014, heatLevels);
var layer2021 = L.heatLayer(markers2021, heatLevels);

// establish base layer
var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// create key name for layer control
var baseMaps = {
  "Country Map": countryMap
};

// create layer group with names of years for layer control
var overlayMaps = {
  "2012": layer2012,
  "2014": layer2014,
  "2021": layer2021
};

// create the map
var myMap = L.map("map", {
  center: usCenter,
  zoom: 5,
  layers: [countryMap, layer2012, layer2014, layer2021]
});

// add layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
