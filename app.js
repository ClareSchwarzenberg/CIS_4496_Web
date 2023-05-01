d3.csv("tf_predictions.csv").then(function (data) {
  // console.log(data);

  var pred = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    //d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    //var inputValue = inputElement.property("value").toLowerCase().trim();
    var inputValue = inputElement.property("value");

    // console.log(inputValue.length);
    // console.log(movies);
    var filteredData = pred.filter(pred => pred.article_id.includes(inputValue));
    // console.log(filteredData.length)
    d3.select("tbody").insert("tr").html(inputValue)
    d3.select("tbody").insert("tr").html(filteredData)
  };
  window.resizeTo(screen.width,screen.height)


});