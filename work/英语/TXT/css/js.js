// 获取图片容器和图片元素
var imageContainer = document.querySelector('.image-container');
var image = document.getElementById('zoom-image');

// 监听点击事件
imageContainer.addEventListener('click', function(e) {
  var offsetX = e.offsetX; // 鼠标相对于容器的X坐标
  var offsetY = e.offsetY; // 鼠标相对于容器的Y坐标

  image.classList.toggle('zoomed'); // 切换放大状态

  // 放大状态时，设置图片的缩放和偏移位置
  if (image.classList.contains('zoomed')) {
    var containerWidth = imageContainer.offsetWidth;
    var containerHeight = imageContainer.offsetHeight;
    var scale = containerWidth / offsetX; // 根据点击位置计算缩放比例

    image.style.transform = 'scale(' + scale + ') translate(-' + offsetX + 'px, -' + offsetY + 'px)';
  } else {
    image.style.transform = 'none'; // 取消放大状态时恢复原始样式
  }
});

// 监听拖动事件
var isDragging = false;
var startX, startY, translateX, translateY;

image.addEventListener('mousedown', function(e) {
  if (image.classList.contains('zoomed')) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    translateX = 0;
    translateY = 0;
  }
});

image.addEventListener('mousemove', function(e) {
  if (isDragging) {
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    image.style.transform = 'scale(' + imageContainer.offsetWidth / image.offsetWidth + ') translate(' + translateX + 'px, ' + translateY + 'px)';
  }
});

image.addEventListener('mouseup', function() {
  if (isDragging) {
    isDragging = false;
    startX = 0;
    startY = 0;
  }
});
