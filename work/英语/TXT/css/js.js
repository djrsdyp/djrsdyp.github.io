var image = document.querySelector('.image-container img');
var isZoomed = false;
var startX, startY, translateX, translateY;

image.addEventListener('click', function() {
  if (isZoomed) {
    image.classList.remove('zoomed');
    isZoomed = false;
  } else {
    var rect = image.getBoundingClientRect();
    var scale = Math.min(window.innerWidth * 0.7 / rect.width, window.innerHeight * 0.7 / rect.height);
    translateX = window.innerWidth / 2 - rect.left - rect.width / 2;
    translateY = window.innerHeight / 2 - rect.top - rect.height / 2;

    image.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(' + scale + ')';
    image.classList.add('zoomed');
    isZoomed = true;
  }
});

image.addEventListener('mousedown', function(e) {
  if (isZoomed) {
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    image.style.cursor = 'grabbing';
  }
});

image.addEventListener('mousemove', function(e) {
  if (isZoomed && e.buttons === 1) {
    var newX = e.clientX - startX;
    var newY = e.clientY - startY;
    image.style.transform = 'translate(' + newX + 'px, ' + newY + 'px) scale(1.7)';
    translateX = newX;
    translateY = newY;
  }
});

image.addEventListener('mouseup', function() {
  if (isZoomed) {
    image.style.cursor = 'move';
  }
});

image.addEventListener('mouseleave', function() {
  if (isZoomed) {
    image.style.cursor = 'move';
  }
});
