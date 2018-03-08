var networksData;

function preload() {
  // Get all Bike Spots data
  let url =
  'http://api.citybik.es/v2/networks';
  networksData = loadJSON(assets/bikes.json);
}


function setup() {
 //createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop()
   var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });
   for ( var i in networksData.networks ) {
      let id = networksData.networks[i].id;
      let location = networksData.networks[i].location;
      let latitude = location.latitude;
      let longitude = location.longitude;
      let city = location.city;
      let country = location.country;

      var latLng = new google.maps.LatLng(latitude,longitude);
      var marker = new google.maps.Marker({
              position: latLng,
              map: map
            });
      marker.addListener('click', function() {
         // map.setZoom(2);
          //map.setCenter(marker.getPosition());
          fill(205,20,100);
          setTimeout(function(){ alert(id); }, 3000);
          //text(id, 30, 20);
        });
  }
}












