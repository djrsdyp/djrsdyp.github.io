$(document).ready(function() {
  var scale = 1; // 图片的初始缩放比例
  var dragStart = { x: 0, y: 0 }; // 记录拖动起始位置
  var dragging = false; // 是否正在拖动
  var imageStart = { x: 0, y: 0 }; // 记录图片起始位置

  // 点击图片触发放大/缩小
  $('#image').on('click', function() {
    if (scale === 1) {
      scale = 2; // 放大到2倍
      $(this).css('transform', 'scale(' + scale + ')');
      $(this).css('cursor', 'grab');
    } else {
      scale = 1; // 缩小回原始大小
      $(this).css('transform', 'scale(' + scale + ')');
      $(this).css('cursor', 'pointer');
    }
  });

  // 鼠标按下时记录图片和鼠标的起始位置
  $('#image').on('mousedown', function(event) {
    dragging = true;
    imageStart.x = $('#image').position().left;
    imageStart.y = $('#image').position().top;
    dragStart.x = event.pageX;
    dragStart.y = event.pageY;
    $('#image').css('cursor', 'grabbing');
  });

  // 松开鼠标结束拖动
  $(document).on('mouseup', function() {
    dragging = false;
    $('#image').css('cursor', 'grab');
  });

  // 鼠标移动时进行拖动
  $(document).on('mousemove', function(event) {
    if (dragging) {
      var dragX = event.pageX - dragStart.x;
      var dragY = event.pageY - dragStart.y;
      var imageX = imageStart.x + dragX;
      var imageY = imageStart.y + dragY;
      $('#image').css({ top: imageY, left: imageX });
    }
  });
});
