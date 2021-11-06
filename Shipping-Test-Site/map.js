
function createMap(){
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([ -80.89511, 40.03637]),
    zoom: 4
  })
});
}
function searchZip (){
  var zip = document.getElementById("zipItem").value;
  var latLong = getLatLong(zip);
  console.log(zip);
}

// function getLatLong(zip) {
//   var apiAddress =  'http://api.positionstack.com/v1/forward';
//     var access_key = '4c53e0724e37dffb9853c9a9d4fcdb9b'
//     var query = zip;
//     return place;
// }
