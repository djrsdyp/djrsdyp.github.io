$(document).ready(function() {
  var scale = 1; // 图片的初始缩放比例
  var dragStart = { x: 0, y: 0 }; // 记录拖动起始位置
  var dragging = false; // 是否正在拖动

  // 点击图片触发放大/缩小
  $('#image').on('click', function() {
    if (scale === 1) {
      scale = 2; // 放大到2倍
      $(this).css('transform', 'scale(' + scale + ')');
    } else {
      scale = 1; // 缩小回原始大小
      $(this).css('transform', 'scale(' + scale + ')');
    }
  });

  // 长按图片触发拖动
  $('#image').on('mousedown', function(event) {
    dragging = true;
    dragStart.x = event.pageX - $('#image').position().left;
    dragStart.y = event.pageY - $('#image').position().top;
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
      $('#image').css({ top: dragY, left: dragX });
    }
  });
});
