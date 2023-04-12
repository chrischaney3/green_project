
// Select the buttons and use D3 `.on` to attach a click handler
d3.selectAll("button").on("click", function() {

  // Create a variable for the button selected
  let button = d3.select(this);

  // Create a varaible to hold the increment or decrement
  let vote = parseInt(button.attr('value'))

  // Create a variable to hold the current counter value
  let currentCount = parseInt(counter.text())

  // Update the counter value
  currentCount += vote;

  // Set the counter h3 text to the new count
  counter.text(currentCount);

});

var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });
  
  
