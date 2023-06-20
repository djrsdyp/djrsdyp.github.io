// 获取图片容器和图片元素
var imageContainer = document.querySelector('.image-container');
var image = imageContainer.querySelector('img');

// 监听点击事件
imageContainer.addEventListener('click', function() {
  image.classList.toggle('zoomed'); // 切换放大状态
});

// 监听拖动事件
var isDragging = false;
var startX, startY, translateX, translateY;

image.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  translateX = 0;
  translateY = 0;
});

image.addEventListener('mousemove', function(e) {
  if (isDragging) {
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    image.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(1.5)';
  }
});

image.addEventListener('mouseup', function() {
  isDragging = false;
  image.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(1.5)';
});
