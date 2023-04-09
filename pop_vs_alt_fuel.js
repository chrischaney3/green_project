// Use d3.json to read in the JSON file
d3.json("pop_vs_alt_fuel.json").then(function(data) {

    // Create a Plotly chart using the data from the JSON file
    Plotly.newPlot('myPlot', data);
  
  });

  console.log("Hello, world!");