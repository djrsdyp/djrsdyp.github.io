$(document).ready(function() {
  $('.image-container img').click(function() {
    var $image = $(this);
    
    // 放大图片
    $image.css({
      transform: 'scale(1.3)', /* 放大倍数，可根据需要调整 */
      zIndex: 9999 /* 确保图片显示在最上层 */
    });
    
    // 允许拖动
    $image.draggable({
      cursor: 'move',
      containment: 'parent' /* 限制拖动范围为父容器 */
    });
  });
});
