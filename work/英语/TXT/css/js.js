var image = document.querySelector('.image-container img');
var isZoomed = false;
var startX, startY, translateX, translateY;

image.addEventListener('click', function() {
  if (isZoomed) {
    // 如果已经放大，则缩小图片
    image.classList.remove('zoomed');
    isZoomed = false;
  } else {
    var rect = image.getBoundingClientRect();
    // 计算放大的比例
    var scale = Math.min(window.innerWidth * 0.7 / rect.width, window.innerHeight * 0.7 / rect.height);
    // 计算放大后图片的偏移量
    translateX = window.innerWidth / 2 - rect.left - rect.width / 2;
    translateY = window.innerHeight / 2 - rect.top - rect.height / 2;

    // 设置放大后的样式
    image.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(' + scale + ')';
    image.classList.add('zoomed');
    isZoomed = true;
  }
});

image.addEventListener('mousedown', function(e) {
  if (isZoomed) {
    // 如果已经放大，则记录鼠标按下时的起始位置，并设置光标样式为 'grabbing'
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    image.style.cursor = 'grabbing';
  }
});

image.addEventListener('mousemove', function(e) {
  if (isZoomed && e.buttons === 1) {
    // 如果已经放大且鼠标按下且移动，则计算新的偏移量，并更新图片位置和偏移量
    var newX = e.clientX - startX;
    var newY = e.clientY - startY;
    image.style.transform = 'translate(' + newX + 'px, ' + newY + 'px) scale(1.7)';
    translateX = newX;
    translateY = newY;
  }
});

image.addEventListener('mouseup', function() {
  if (isZoomed) {
    // 如果已经放大，则恢复光标样式为 'move'
    image.style.cursor = 'move';
  }
});

image.addEventListener('mouseleave', function() {
  if (isZoomed) {
    // 如果已经放大，则恢复光标样式为 'move'
    image.style.cursor = 'move';
  }
});
