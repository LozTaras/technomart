(function() {
  var modal = document.querySelector('.modal-write-to-us');
  var openBtn = document.querySelector('.contacts .write-to-us');
  var closeBtn = document.querySelector('.modal-write-to-us .close-btn');

  openBtn.addEventListener('click', function() {
    modal.classList.toggle('open');
  });

  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      modal.classList.remove('open');
    }
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('open');
  });
})();
