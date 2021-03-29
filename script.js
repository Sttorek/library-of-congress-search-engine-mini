var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
searchForm.on("submit", function () {
  //jQuery eventListener
  event.preventDefault();
  var searchTerm = searchTermEl.val();
  console.log(searchTerm);
  var queryURL = "https://" + "fo=json" + "=&q" + searchTerm + "&limit=3";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[0]).images.fixed_.url;
      imagesDisplay.empty(); //emptying out the storage
      for (var i = 0; i < data.data.length; i++) {
        //looping through the array to show only a certain amount of data/info
        var imageEl = $("<img>");
        imageEl.addClass("col-sm-4");
        imageEl.attr("src", data.data[0].images.fixed_.url);
        imagesDisplay.append(imageEl);
      }
    });
});
