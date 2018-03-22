$(document).ready(function() {
  $("#survey").submit(function(event) {
    var name = $("#name").val();
    var gender = parseInt($("#gender").val());
    var age = parseInt($("#age").val());
    var art = parseInt($("#art").val());
    var party = parseInt($("#party").val());
    if (gender === 3) {
      gender = Math.floor((Math.random() * 2) + 1);
      console.log(gender);
    } else {
      console.log(gender);
    }

    if (art === 1 && gender === 1 && age === 1 && party <= 2) {
      $("#celebName").text("Tom Cruise");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/cruise.jpg")
    } else if (art === 1 && gender === 1 && age === 2 && party >= 3) {
      $("#celebName").text("Sean Connery");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/connery.jpg")
    } else if (art === 1 && gender === 2 && age === 1 && party >= 3) {
      $("#celebName").text("Jennifer Lawrence");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/lawrence.jpg")
    } else if (art === 1 && gender === 2 && age === 2 && party <= 2) {
      $("#celebName").text("Judi Dench");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/dench.jpg")
    } else if (art === 2 && gender === 1 && age === 1 && party >= 3) {
      $("#celebName").text("Perry Farrell");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/farrel.jpg")
    } else if (art === 2 && gender === 1 && age === 2 && party >= 3) {
      $("#celebName").text("Tom Petty");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/petty.jpeg")
    } else if (art === 2 && gender === 2 && age === 1 && party >= 3) {
      $("#celebName").text("Britney Spears");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/spears.jpg")
    } else if (art === 2 && gender === 2 && age === 2 && party >= 3){
      $("#celebName").text("Stevie Nicks");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/nicks.jpg")
    } else {
      $("#celebName").text("Yourself!");
      $("#nameOutput").text(name);
      $("#imgOutput").attr("src","img/sad.png")
    }

    event.preventDefault();
  });

  $("#submit").click(function(){
    $("#myModal").css("display", "block");
  });

  $(".close").click(function(){
    $("#myModal").css("display", "none");
    location.reload();
  });
});
