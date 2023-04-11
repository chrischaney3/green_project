d3.json("pop_with_ev.json").then(function(data) {

    // Set variables
    var state = data.map(function(d) { return d.state; });
    var population = data.map(function(d) { return d.population; });
    var ev_stations2021 = data.map(function(d) { return d.ev_stations2021; });
    var growth_rate = data.map(function(d) { return d.growth growth_rate; });

  
    // Create trace for population
    var trace1 = {
      x: state,
      y: population,
      name: "Population",
      type: "bar"
    };
  
    // Create trace for emissions
    var trace2 = {
      x: countries,
      y: emissions,
      name: "Emissions",
      type: "bar"
    };
  
    // Combine traces into a data array
    var data = [trace1, trace2];
  
    // Set layout options
    var layout = {
      title: "Population and Emissions by Country",
      xaxis: { title: "Country" },
      yaxis: { title: "Population/Emissions" }
    };
  
    // Plot the graph
    Plotly.newPlot("plotly-div", data, layout);
  });





console.log('Is it working?')