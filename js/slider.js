(function() {
  var slider = document.body.querySelector('.info-slider ul');
  var nextBtn = document.body.querySelector('.next-slide');
  var prevBtn = document.body.querySelector('.prev-slide');
  var firstSlide = document.body.querySelector('.slider-indicator-1');
  var secoundSlide = document.body.querySelector('.slider-indicator-2');
  var catalogBtn = document.body.querySelector('.info-slider-controls a');
  var position = 0;

  nextBtn.addEventListener('click', function() {
    position -= 620;
    if(position < -620) position = -620;
    catalogBtn.href = 'catalog.html';

    firstSlide.classList.remove('slider-indicator-active');
    secoundSlide.classList.add('slider-indicator-active');

    slider.style.marginLeft = position + 'px';
  });

  prevBtn.addEventListener('click', function() {
    position += 620;
    if(position > 0) position = 0;
    catalogBtn.href = '#';

    firstSlide.classList.add('slider-indicator-active');
    secoundSlide.classList.remove('slider-indicator-active');

    slider.style.marginLeft = position + 'px';
  });

  firstSlide.addEventListener('click', function() {
    position += 620;
    if(position > 0) position = 0;
    catalogBtn.href = '#';

    firstSlide.classList.add('slider-indicator-active');
    secoundSlide.classList.remove('slider-indicator-active');

    slider.style.marginLeft = position + 'px';
  });

  secoundSlide.addEventListener('click', function() {
    position -= 620;
    if(position < -620) position = -620;
    catalogBtn.href = 'catalog.html';

    firstSlide.classList.remove('slider-indicator-active');
    secoundSlide.classList.add('slider-indicator-active');

    slider.style.marginLeft = position + 'px';
  });
})();
