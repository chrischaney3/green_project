console.log(data2012)
console.log(data2014)
console.log(data2021) 


let data1 = Object.values(data2012.map(item => 1))
let data2 = Object.values(data2014.map(item => 1))
let data3 = Object.values(data2021.map(item => 1))

let label1 = data2012.map(item => item["Fuel Type Code"]);
let label2 = data2014.map(item => item["Fuel Type Code"]);
let label3 = data2021.map(item => item["Fuel Type Code"]);

var data = [{
  values: Object.values(data2012.map(item => 1)), 
  labels: label1,
  type: "pie"
}];
var layout = {
  height: 600,
  width: "50%",
  title: "Alternative fueling stations available in 2012"
};

Plotly.newPlot('pie2012', data, layout);


let pie2014 = [{
  values: Object.values(data2014.map(item => 1)), 
  labels: label2,
  type: "pie"
}];
let layout2 = {
  height: 600,
  width: "50%",
  title: "Alternative fueling stations available in 2014"
};

Plotly.newPlot('pie2014', pie2014, layout2);

let pie2021 = [{
  values: Object.values(data2021.map(item => 1)), 
  labels: label3,
  type: "pie"
}];
let layout3 = {
  height: 600,
  width: "50%",
  title: "Alternative fueling stations available in 2021"
};

Plotly.newPlot('pie2021', pie2021, layout3);



/*
// Display the default plot
function init() {
  let data = [{
    values: Object.values(data2012.map(item => 1)), 
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: "50%",
    title: "Alternative fueling stations available in 2012"
  };

  Plotly.newPlot("pie", data, layout);
}


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  
  let data = [];

  if (dataset == '2012') {
      data = Object.values(data2012.map(item => 1));
  } 
  else if (dataset == '2014') {
      data = Object.values(data2014.map(item => 1));
  } 
  else if (dataset == '2021') {
      data = Object.values(data2021.map(item => 1));
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  let update = {
    values: [newdata]
  };
  Plotly.restyle("pie", update);
}
init()
*/