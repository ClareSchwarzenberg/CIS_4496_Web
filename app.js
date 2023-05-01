d3.csv("tf_predictions.csv").then(function (data) {

  var pred = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = "Product Picture"
    document.body.appendChild(img);
   }

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

    var predictions = output[0]['prediction']
    predictions.replace(/['"]+/g, '');
    predictions.replace(/[\[\]']+/g, '');
    var str_array = predictions.split(',');

    for(var i = 0; i < str_array.length; i++) {
      // Trim the excess whitespace.
      str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
      // Add additional code here, such as:
      var source = '/images/' + str_array[i] + '.jpg';
      d3.select("tbody").insert("tr").html(source)
      displayImage(source, 200, 250);
    }

    //for (var i = 0; i < 12; i++) {
      

  };
  window.resizeTo(screen.width,screen.height)

});