(function() {
  var buttons = document.body.querySelectorAll('.services-list-controls button');
  var servicesItems = document.body.querySelectorAll('.services-list li');

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function() {
      deactivateAll();

      this.classList.add('services-current');

      servicesItems[this.dataset.num].classList.add('services-current-show');
    });
  }


  function deactivateAll() {
    for(var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.className = '';
    }

    for(var i = 0; i < servicesItems.length; i++) {
      var item = servicesItems[i];
      item.className = '';
    }
  }
})();
