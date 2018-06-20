(function() {
  var priceSlider = document.body.querySelector('.price-slider');
  var scale = priceSlider.querySelector('.scale');
  var scaleCoords = getCoords(scale);
  var bar = scale.querySelector('.bar');
  var toggleMin = scale.querySelector('.toggle-min');
  var toggleMax = scale.querySelector('.toggle-max');
  var minValue = document.body.querySelector('#min-value');
  var maxValue = document.body.querySelector('#max-value');


  toggleMin.addEventListener('mousedown', function(evt){
    evt.preventDefault();
    var toggleMinCoords = getCoords(toggleMin);
    var shiftX = evt.pageX - toggleMinCoords.left;

    moveAt(evt);

    document.onmousemove = function(evt) {
      moveAt(evt);
    };

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    };

    function moveAt(evt) {
      var toggleMaxCoord = getCoords(toggleMax);
      var newLeft = evt.pageX - scaleCoords.left - shiftX;
      if(newLeft < 0) {
        newLeft = 0;
      }
      if(newLeft > toggleMaxCoord.left - scaleCoords.left - toggleMin.offsetWidth) {
        newLeft = toggleMaxCoord.left - scaleCoords.left - toggleMin.offsetWidth;
      }

      bar.style.marginLeft = newLeft + 10 + 'px';
      bar.style.width = (getCoords(toggleMax).left) - (getCoords(toggleMin).left) + 'px';

      minValue.value = getPrice(newLeft);

      toggleMin.style.left = newLeft + 'px';
    };
  });

  toggleMax.addEventListener('mousedown', function(evt){
    evt.preventDefault();
    var toggleMaxCoords = getCoords(toggleMax);
    var shiftX = evt.pageX - toggleMaxCoords.left;

    moveAt(evt);

    document.onmousemove = function(evt) {
      evt.preventDefault();
      moveAt(evt);
    };

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    };

    function moveAt(evt) {
      var toggleMinCoord = getCoords(toggleMin);
      var newLeft = evt.pageX - scaleCoords.left - shiftX;
      if(newLeft < toggleMinCoord.left - scaleCoords.left + toggleMin.offsetWidth) {
        newLeft = toggleMinCoord.left - scaleCoords.left + toggleMin.offsetWidth;
      }
      if(newLeft > scale.offsetWidth - toggleMin.offsetWidth) {
        newLeft = scale.offsetWidth - toggleMin.offsetWidth;
      }

      bar.style.width = (getCoords(toggleMax).left) - (getCoords(toggleMin).left) + 'px';

      maxValue.value = getPrice(newLeft - 20);

      toggleMax.style.left = newLeft + 'px';
    };
  });

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + document.documentElement.scrollTop,
      left: box.left + document.documentElement.scrollLeft,
    }
  };

  function getPrice(n) {
    var max = 35000;
    var steps = 140;
    var step = max / steps;
    return n * step;
  }

  minValue.value = 0;
  maxValue.value = 30000;
})();
