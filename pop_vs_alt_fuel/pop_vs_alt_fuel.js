d3.json("pop_with_ev.json").then(function(data) {

  // Set variables
  var state = data.map(function(d) { return d.State; });
  var EV_Owners = data.map(function(d) { return d.ev_Registration_Count; });
  var EV_Stations2021 = data.map(function(d) { return d.Alt_Fuel_Stations_2021; });
  var population_2021 = data.map(function(d) { return d.Population_2021; });

   //<------ US Population by State - 2021 ------>

  var trace1 = {
    x: state,
    y: population_2021,
    name: "Population",
    type: "bar"
  };

  var datapop = [trace1];

  var layoutPop = {
    title: "<b> US Population by State - 2021 <b>",
    xaxis: { title: "State" },
    yaxis: { title: "Population" }
  };

  Plotly.newPlot("plotly-div", datapop, layoutPop);

  //<------EV Owners vs EV Station------>

  var trace2 = {
    x: state,
    y: EV_Owners,
    name: "EV Owners",
    type: "bar"
  };

  var trace3 = {
    x: state,
    y: EV_Stations2021,
    name: "EV Stations",
    type: "bar"
  };

  var layout2 = {
    title: "<b> Registerd EV Owners vs EV Stations <b>",
    xaxis: { title: "State" },
    yaxis: { title: "EV Owners/EV Stations" }
  };

 
  var evo_vs_evs = [trace2, trace3];


  // Plot the population graph
  Plotly.newPlot("plotly-div2", evo_vs_evs, layout2);


  

  //<------Top 10 EV Owners vs EV Station------>

  var trace4 = {
    x: state.slice(0,10),
    y: EV_Owners.slice(0,10),
    name: "EV Owners",
    type: "bar"
  };

  var trace5 = {
    x: state.slice(0,10),
    y: EV_Stations2021.slice(0,10),
    name: "EV Stations",
    type: "bar"
  };

  var layout3 = {
    title: "<b> Top 10 - Registerd EV Owners vs EV Stations <b>",
    xaxis: { title: "State" },
    yaxis: { title: "EV Owners/EV Stations" }
  };

 
  var top_10_evo_vs_evs = [trace4, trace5];



  // Plot the population graph
  Plotly.newPlot("plotly-div3", top_10_evo_vs_evs, layout3);

});

console.log('Checking things out')