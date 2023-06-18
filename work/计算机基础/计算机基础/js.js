

// 获取所有 <div class="archive-year"> 元素
var archiveYears = document.querySelectorAll('div.archive-year');

// 遍历每个 <div class="archive-year">
for (var i = 0; i < archiveYears.length; i++) {
  var archiveYear = archiveYears[i];

  // 在当前 <div class="archive-year"> 中查找所有的 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3> 元素
  var monthHeaders = archiveYear.querySelectorAll('h3.archive-month-header');
  
  // 遍历每个 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3>
  for (var j = 0; j < monthHeaders.length; j++) {
    var monthHeader = monthHeaders[j];
    
    // 在当前 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3> 中查找 <div class="archive-posts"> 元素
    var archivePosts = monthHeader.nextElementSibling;
    
    // 在 <div class="archive-posts"> 中查找所有的 <div class="archive-entry"> 元素，并获取它们的数量
    var entryCount = archivePosts.querySelectorAll('div.archive-entry').length;
    
    // 将 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3> 的文本内容设置为 <div class="archive-entry"> 的数量
    monthHeader.querySelector('sup.archive-count').textContent = ' ' + entryCount;
  }
}




// 获取所有 <div class="archive-year"> 元素
var archiveYears = document.querySelectorAll('div.archive-year');

// 遍历每个 <div class="archive-year">
for (var i = 0; i < archiveYears.length; i++) {
  var archiveYear = archiveYears[i];

  // 在当前 <div class="archive-year"> 中查找所有的 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3> 元素
  var monthHeaders = archiveYear.querySelectorAll('h3.archive-month-header');
  
  // 初始化和的变量
  var sum = 0;
  
  // 遍历每个 <h3 class="archive-month-header">五月<sup class="archive-count">&nbsp;&nbsp;2</sup></h3>
  for (var j = 0; j < monthHeaders.length; j++) {
    var monthHeader = monthHeaders[j];
    
    // 获取 <sup class="archive-count"> 中的文本内容，并去除空格
    var countText = monthHeader.querySelector('sup.archive-count').textContent.trim();
    
    // 将文本内容转换为整数，并累加到总和上
    sum += parseInt(countText);
  }
  
  // 在当前 <div class="archive-year"> 中查找 <h2 class="archive-year-header">2023<sup class="archive-count">&nbsp;&nbsp;2</sup></h2> 元素
  var yearHeader = archiveYear.querySelector('h2.archive-year-header');
  
  // 将和的值设置为 <h2 class="archive-year-header">2023<sup class="archive-count">&nbsp;&nbsp;2</sup></h2> 的文本内容
  yearHeader.querySelector('sup.archive-count').textContent = ' ' + sum;
}



// 获取所有 <div class="archive-year"> 元素
const archiveYearElements = document.querySelectorAll('div.archive-year');

// 定义变量用于存储总和
let totalCount = 0;

// 遍历每个 <div class="archive-year"> 元素
archiveYearElements.forEach((yearElement) => {
  // 获取当前年份下的 <sup class="archive-count"> 元素
  const countElement = yearElement.querySelector('sup.archive-count');

  // 获取 <sup class="archive-count"> 元素的值
  const countValue = parseInt(countElement.textContent.trim());

  // 将值累加到总和中
  totalCount += countValue;
});

// 获取 <sup class="archive-count">&nbsp;&nbsp;2</sup> 元素
const archiveCountElement = document.querySelector('sup.archive-count');

// 更新 <sup class="archive-count">&nbsp;&nbsp;2</sup> 元素的值
archiveCountElement.textContent = ` ${totalCount}`;

//获取值
var countValue = document.getElementById('ComputerFoundation').textContent.trim();

// 存储值到本地存储（Local Storage）
localStorage.setItem('ComputerFoundationValue', countValue);