var scale = 1; // 图片的初始缩放比例
    var dragStart = { x: 0, y: 0 }; // 记录拖动起始位置
    var dragging = false; // 是否正在拖动
    var imageStart = { x: 0, y: 0 }; // 记录图片起始位置

    // 点击图片触发放大/缩小
    document.getElementById('image').addEventListener('click', function() {
      if (scale === 1) {
        scale = 2; // 放大到2倍
        this.style.transform = 'scale(' + scale + ')';
        this.style.cursor = 'grab';
      } else {
        scale = 1; // 缩小回原始大小
        this.style.transform = 'scale(' + scale + ')';
        this.style.cursor = 'pointer';
      }
    });

    // 鼠标按下时记录图片和鼠标的起始位置
    document.getElementById('image').addEventListener('mousedown', function(event) {
      dragging = true;
      imageStart.x = this.offsetLeft;
      imageStart.y = this.offsetTop;
      dragStart.x = event.pageX;
      dragStart.y = event.pageY;
      this.style.cursor = 'grabbing';
    });

    // 松开鼠标结束拖动
    document.addEventListener('mouseup', function() {
      dragging = false;
      document.getElementById('image').style.cursor = 'grab';
    });

    // 鼠标移动时进行拖动
    document.addEventListener('mousemove', function(event) {
      if (dragging) {
        var dragX = event.pageX - dragStart.x;
        var dragY = event.pageY - dragStart.y;
        var imageX = imageStart.x + dragX;
        var imageY = imageStart.y + dragY;
        document.getElementById('image').style.left = imageX + 'px';
        document.getElementById('image').style.top = imageY + 'px';
      }
    });