var data2012 = fetch("2012_ev_data.json");
console.log("2012 Data: ", data2012);

var data2014 = fetch("2014_ev_data.json").then(response => response.json());
console.log("2014 Data: ", data2014);

var data2021 = fetch("2021_ev_data.json").then(response => response.json());
console.log("2021 Data: ", data2021);

mapCenter = [38.147853, -98.612973];

var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var myMap = L.map("map", {
    center: mapCenter,
    zoom: 5,
    layers: countryMap
  });

/*function createMarkers(data) {
  
  var stations = data...

  var stationMarkers =[];

  for (var i = 0; i > stations.length; i++)
    var station = stations[i];
    
}*/