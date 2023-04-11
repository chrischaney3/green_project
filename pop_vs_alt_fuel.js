d3.json("pop_with_ev.json").then(function(data) {

    // Set variables
    var state = data.map(function(d) { return d.State; });
    var EV_Owners = data.map(function(d) { return d.ev_Registration_Count; });
    var EV_Stations2021	 = data.map(function(d) { return d.Alt_Fuel_Stations_2021; });
  
    // Create trace for EV Owners
    var trace1 = {
      x: state,
      y: EV_Owners,
      name: "EV Owners",
      type: "bar"
    };
  
    // Create trace for EV Stations
    var trace2 = {
      x: state,
      y: EV_Stations2021,
      name: "Ev Stations",
      type: "bar"
    };
  
    // Combine traces into a data array
    var data = [trace1, trace2];
  
    // Set layout options
    var layout = {
      title: "<b>EV Stations vs Registerd EV Owners<b>",
      xaxis: { title: "State" },
      yaxis: { title: "EV Stations/EV Owners" }
    };
  
    // Plot the graph
    Plotly.newPlot("plotly-div", data, layout);
  });
  {
    // Create trace for EV Owners
    var trace1 = {
        x: state,
        y: EV_Owners,
        name: "EV Owners",
        type: "bar"
      };
    
      // Create trace for EV Stations
      var trace2 = {
        x: state,
        y: EV_Stations2021,
        name: "Ev Stations",
        type: "bar"
      };
    
      // Combine traces into a data array
      var data = [trace1, trace2];
    
      // Set layout options
      var layout = {
        title: "<b>EV Stations vs Registerd EV Owners<b>",
        xaxis: { title: "State" },
        yaxis: { title: "EV Stations/EV Owners" }
      };
    
      // Plot the graph
      Plotly.newPlot("plotly-div2", data, layout);
    };



console.log('Is it working?')