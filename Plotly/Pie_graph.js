// console.log(data2012)
// console.log(data2014)
// console.log(data2021)

let data1 = Object.values(data2012.map(item => 1))
let data2 = Object.values(data2014.map(item => 1))
let data3 = Object.values(data2021.map(item => 1))

let labels = data2012.map(item => item["Fuel Type Code"]);

// Display the default plot
function init() {
  let data = [{
    values: data1, 
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: "50%",
    title: "Alternative fueling stations avaible"
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

  if (dataset == 'Chart 1') {
      data = data1;
  }
  else if (dataset == 'Chart 2') {
      data = data2;
  }
  else if (dataset == 'Chart 3') {
      data = data3;
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();