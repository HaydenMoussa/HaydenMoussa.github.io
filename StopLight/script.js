$(document).ready(function() {
    $('#clicker').click(function() {
      $("#green").css("background-color","green") 
      var color = $("#green"); 
      if (color == $("#green")) {
        color = $("#yellow")
      } elif (color == $("#yellow")) {
        color = "#red"
      } else {
        color ="#green"
      }
    }); 

  });