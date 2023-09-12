$(document).ready(function() {
  const map = L.map('mapid').setView([0, 0], 1);
  const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  const marker = L.marker([0, 0]).addTo(map);
  const tile_url= 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tile_url, { attribution });
  tiles.addTo(map);

    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.wheretheiss.at/v1/satellites/25544",
        success: function(results) {
          
          console.log(results["latitude"]);
          console.log(results["longitude"]);

            $('#lat').text(results["latitude"]);
            $('#lon').text(results["longitude"]);
            marker.setLatLng([results["latitude"],results["longitude"]]);
          },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
    $('#catclick').click(function(){
      $.ajax({
        dataType: "json",
        url: "https://randomfox.ca/floof/",
        success: function(results){
          console.log(results["image"]);
        if (results["image"].endsWith(".mp4")) {
          $('#cat').attr("src", "images/blank.png");
        } else {
          $('#cat').attr("src", results["image"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
        }
      });
    });
  });

 