function initMap() {
  var elem = document.querySelector('.goodle-map');

    var options = {
    zoom: 17,
    center: { lat: 59.938856, lng: 30.323062 },
  };

  var map = new google.maps.Map(elem, options);

  var marker = new google.maps.Marker({
    position: { lat: 59.938856, lng: 30.323062 },
    map: map,
  });
};

(function() {
  var mapBtn = document.querySelector('.big-map-btn');
  var map = document.querySelector('.map-popup');
  var closeMapBtn = document.querySelector('.map-popup .close-btn');

  mapBtn.addEventListener('click', function() {
    map.classList.toggle('open');
  });

  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      map.classList.remove('open');
    }
  });

  closeMapBtn.addEventListener('click', function() {
    map.classList.remove('open');
  });
})();
