var app = angular.module('resume', []);

app.controller('myResume', function($scope) {
    $scope.myName = "Jeff" + " " + "Berlin";
    $scope.headLine = "Web Developer";
    $scope.email = "jeff@jbrally.com";
    $scope.phone = "(302) 463-5129";
    $scope.location = "North Myrtle Beach, SC";
});

// Handle map error
function googleError() {
    alert("Google maps could not be loaded.");
}

var mapStyles = {
    styles : [
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#F67503'}
          ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.stroke',
        stylers: [
          { color: '#ffffff'},
          { weight: 6 }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#1B63C0'}
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#27ACF9'}
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.stroke',
        stylers: [
          {weight: 3}
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {color: '#FDDC06'}
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {color: '#ECDAA1'}
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {color: '#FEDD02'}
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {color: '#000000'},
          {weight: .5}
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.fill',
        stylers: [
          {color: '#D12E05'},
          {lightness: 30}
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {color: '#0598FA'},
          {saturation: 10 },
          {hue: -3},
          {lightness: -5}
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#845A1A'},
          {weight: 2}
        ]
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#F30101'}
        ]
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#ffffff'},
          {weight: 3}
        ]
      },
      {
        featureType: 'poi.school',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#805F04'}
        ]
      },
      {
        featureType: 'poi.school',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#ffffff'},
          {weight: 3}
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#01B2FE'},
          {weight: 3},
          {lightness: -10}
        ]
      }
  ]
}

function initMap() {
	// The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;  // current boundaries of the map window

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    marker.addListener('click', function() {
      infoWindow.setContent('<div>' + '<h4>' + marker.title + '</h4>' + '</div>');
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
	locations.forEach(function(place){
		// the search request object
		var request = {
			query: place
		};

      	// Actually searches the Google Maps API for location data and runs the callback
      	// function with the search results after each search.
      	service.textSearch(request, callback);
    });
}