export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users?since=${Math.round((Math.random() * (100 - 1) + 1))}`
  });
};
// url: 'https://api.github.com/users'

export const fetchUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/${username}`
  });
};

export const fetchLocation = () => {
  var geocoder = new google.maps.Geocoder();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCb, errorCb);
  }

  //Get the latitude and the longitude;
  function successCb(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // console.log(lat, lng);
      find(lat, lng);
  }

  function errorCb(){
      alert("Geocoder failed");
  }

  function initialize() {
    geocoder = new google.maps.Geocoder();
  }

  function find(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    // console.log(geocoder);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      var city;
      if (status == google.maps.GeocoderStatus.OK) {
        // console.log(results);
        if (results[2]) {
          let location = results[2].formatted_address.split(",").map((item) => item.trim());
          // alert(location[0] + ' ' + location[1]);
          console.log(location);
          console.log('from api util');
          return location;

        } else {
            alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
};
