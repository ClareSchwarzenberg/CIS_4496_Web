d3.csv("tf_predictions.csv").then(function (data) {

  var pred = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value");
    d3.select("tbody>tr>td").text(inputValue);
    
    var filteredData = movies.filter(movies => movies.article_id.includes(inputValue));
    
    output = _.sortBy(filteredData, 'article_id').reverse()

    for (var i = 0; i < filteredData.length; i++) {
      d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>"+output[i]['prediction']); }
  };
  window.resizeTo(screen.width,screen.height)

});