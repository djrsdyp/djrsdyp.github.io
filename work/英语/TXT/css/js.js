// 在文档加载完成后执行以下代码
document.addEventListener("DOMContentLoaded", function() {
  // 获取图片元素
  var myImage = document.getElementById("my-image");
  
  // 初始化 Viewer.js
  var viewer = new Viewer(myImage, {
    inline: false, // 是否以内联方式展示
    button: true, // 是否显示按钮
    navbar: true, // 是否显示导航栏
    title: true, // 是否显示标题
    toolbar: true, // 是否显示工具栏
    movable: true, // 是否允许拖动
    zoomable: true, // 是否允许缩放
    rotatable: true, // 是否允许旋转
    scalable: true, // 是否允许变焦
    transition: true, // 是否使用过渡效果
  });
});
