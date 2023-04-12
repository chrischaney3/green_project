
console.log("2012 Data: ", data2012);
console.log("2014 Data: ", data2014);
console.log("2021 Data: ", data2021);

mapCenter = [38.147853, -98.612973];

var myMap = null;
var baseMaps = null;
var overlayMaps = null;

function createMap(altStations) {

  var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  baseMaps = {
    "Country Map": countryMap
  };

  overlayMaps = {
    "Alternative Fuel Stations": altStations
  };

  myMap = L.map("map", {
    center: mapCenter,
    zoom: 5,
    layers: [countryMap, altStations]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

function createMarkers(stations) {

  var stationMarkers = [];

  for (var i = 0; i < stations.length; i++) {
    var station = stations[i];

    var marker = L.marker([Number(station.Latitude), Number(station.Longitude)]).bindPopup("Station Name: "
    + station["Station Name"] + "<br>Location: " + station.City + ", " + station.State);

    stationMarkers.push(marker);
  }

  console.log("test: ", stationMarkers.length)

  createMap(L.layerGroup(stationMarkers));
}

createMarkers(data2012);

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  let dropdownMenu = d3.select("#selDataset");

  let dataset = dropdownMenu.property("value");

  let newData = [];

  if (dataset == '2012') {
      newData = data2012;
  }
  else if (dataset == '2014') {
      newData = data2014;
  }
  else if (dataset == '2021') {
      newData = data2021;
  }

  if(myMap) {
    myMap = myMap.off();
    myMap = myMap.remove();
  }

  createMarkers(newData);
}









/*var markers2012 = createMarkers(data2012);
var markers2014 = createMarkers(data2014);
var markers2021 = createMarkers(data2021);

var allMarkers = [markers2012, markers2014, markers2021];

createMap(L.layerGroup(allMarkers));*/

/*
var 

function createMarkers(data) {

  var markers = L.markerClusterGroup();



  var stationMarkers =[];

  for (var i = 0; i > data.length; i++)
    var station = data[i];

    var marker = L.marker([Number(data["Latitude"]), Number(data["Longitude"])]).bindPopup("Station Name: "
    + data["Station Name"] + "<br>Location: " + data["City"] + ", " + data["State"]);

    stationMarkers.push(marker);
    
}

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  let dropdownMenu = d3.select("#selDataset");

  let dataset = dropdownMenu.property("value");

  let data = [];

  if (dataset == '2012') {
      data = data2012;
  }
  else if (dataset == '2014') {
      data = data2014;
  }
  else if (dataset == '2021') {
      data = data2021;
  }

  updateMap(data);
}*/

