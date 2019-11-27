'use strict';

var attr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

  Url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZXRlcm5hMiIsImEiOiJjaXppZjRoaTIwMmYxMndsNHJ4dzR1eWJsIn0.MvJ5fsV47RHlSAt2fBEKLg';

var dark  = L.tileLayer(Url, {id: 'mapbox.dark', maxZoom:18, attribution: attr}),
  light   = L.tileLayer(Url, {id: 'mapbox.light', maxZoom:18, attribution: attr});

var map = L.map('map', {

  zoomSnap: 0.5,


  layers:[light]}).fitWorld();
var timelayers = {
  "Dark": dark,
  "Light": light
};
L.control.layers(timelayers).addTo(map);

var currentTime = new Date().getHours()

if (7 <= currentTime && currentTime < 19){
  map.removeLayer(dark);
  map.addLayer(light);
}
else{
  map.removeLayer(light);
  map.addLayer(dark);
}



function infoFunction() {
  alert('If you give it permission, this web page will access your location so you may see which Papas Ice Cream Store is closest to you!');
}

function locateFunction(){
  if (navigator.geolocation) {
    navigator.geolocation.showPosition(showPosition);
    map.setView({
      setView: true,
      maxZoom: 16,
      timeout: 15000,
      watch: false,
    })} else {
    alert('User denied web page access to location.')
  }
}

function showPosition(position){
  alert('Your location: ' + position.coords.latitude + ', ' + position.coords.longitude)
}

//the below JS code takes advantage of the Geolocate API as it is incorporated in the Leaflet JS API with the locate method
function onLocationFound(e) { //this function does three things if the location is found: it defines a radius variable, adds a circle to the map, and adds a popup to the map.


  var radius = e.accuracy / 10; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.

  var radius = e.accuracy / 2; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.

  var r= radius.toFixed(2);
  var coordinates = e.latlng.lat + ", " + e.latlng.lng;
  var myIcon = L.icon({
    iconUrl: 'https://img.icons8.com/dusk/64/000000/ice-cream-in-waffle-cone.png',

    iconSize: [27, 47],
    popupAnchor: [-0.5, -16],
    shadowAnchor: [22, 94]
  });


  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters of this point!!");

  L.marker([47.613200, -122.316595], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Papa's Ice Cream in Capitol Hill</b> <br> Capitol Hill 1400 12th Ave <br> Seattle, WA 98122 <br> Phone: (206) 420-4587 <br> Store Hours: 1PM - 11PM");

  L.marker([47.616199, -122.33999], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Papa's Ice Cream in Belltown</b> <br> 2101 7th Ave <br> Seattle, WA 98119 <br> Phone: (206) 900-8770 <br> Store Hours: 10AM - 10PM");

  L.marker([47.624425, -122.336591], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Papa's Ice Cream in SLU</b> <br> 590 Terry Ave N <br> Seattle WA 98109 <br> Phone: (206) 995-8296 <br> Store Hours: 7AM - 3PM");

  /*if (radius < 30) {
      L.circle(e.latlng, radius, {color: 'green'}).addTo(map);
  }
  else{
      L.circle(e.latlng, radius, {color: 'red'}).addTo(map);
  } */
  //this adds a Leaflet circle to the map at the lat and long returned by the locate function. Its radius is set to the var radius defined above. If the radius is less than 30, the color of the circle is blue. If it is more than 30, the color is red. Comment out the line of code that adds the simple circle and uncomment the seven lines of code that enable the responsively colored circle. NOTE: there are two syntax errors in the code that you must correct in order for it to function.
}

function onLocationError(e) {
  alert(e.message);
}
//this function runs if the location is not found when the locate method is called. It populates an alert window that reports the error

//these are event listeners that call the functions above depending on whether or not the locate method is successful
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);


//This specifies that the locate method should run
map.locate({
  setView: true, //this option centers the map on location and zooms
  maxZoom: 16, // this option prevents the map from zooming further than 16, maintaining some spatial context even if the accuracy of the location reading allows for closer zoom
  timeout: 15000, // this option specifies when the browser will stop attempting to get a fix on the device's location. Units are miliseconds.
  watch: false, // you can set this option from false to true to track a user's movement over time instead of just once.
});
