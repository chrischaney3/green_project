console.log(data2012)
console.log(data2014)
console.log(data2021) 


let data4 = Object.values(data2012.map(item => 1))
let data5 = Object.values(data2014.map(item => 1))
let data6 = Object.values(data2021.map(item => 1))

let label4 = data2012.map(item => item["Groups With Access Code"]);
let label5 = data2014.map(item => item["Groups With Access Code"]);
let label6 = data2021.map(item => item["Groups With Access Code"]);

var pie12 = [{
  values: Object.values(data2012.map(item => 1)), 
  labels: label4,
  type: "pie"
}];
var layout4 = {
  height: 600,
  width: "50%",
  title: "Alternative Fuel Station Accessibility across the U.S. in 2012"
};

Plotly.newPlot('pie12', pie12, layout4);


var pie14 = [{
  values: Object.values(data2014.map(item => 1)), 
  labels: label5,
  type: "pie"
}];
var layout5 = {
  height: 600,
  width: "50%",
  title: "Alternative Fuel Station Accessibility across the U.S. in 2014"
};

Plotly.newPlot('pie14', pie14, layout5);

var pie21 = [{
  values: Object.values(data2021.map(item => 1)), 
  labels: label6,
  type: "pie"
}];
var layout6 = {
  height: 600,
  width: "50%",
  title: "Alternative Fuel Station Accessibility across the U.S. in 2021"
};

Plotly.newPlot('pie21', pie21, layout6);