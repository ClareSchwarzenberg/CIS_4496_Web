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

    var filteredData = pred.filter(pred => pred.article_id.includes(inputValue));
    
    output = _.sortBy(filteredData, 'article_id').reverse()

    for (var i = 0; i < filteredData.length; i++) {
      d3.select("tbody").insert("tr").html("</td>"+"</td>"+output[i]['prediction']); }
  };
  window.resizeTo(screen.width,screen.height)

  function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }
  
   displayImage('images/0108775015.jpg', 200, 250);

});