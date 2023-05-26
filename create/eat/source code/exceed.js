$i = 0;
$("#start").click(function () {
  $i++;
  if ($i == 10) {
    alert('不满意?')
    // $("#start").hide();
    // $("#stop").show();
  }else if($i == 20){
    alert('这么作?别吃了!')
  }else if($i == 30){
    alert('吃你奶奶的老腚沟子!')
  }else if($i >= 40){
    $("#start").hide()
    alert('你这样djr写的意义是什么?')
  }
});
// $("#stop").click(function () {
  // alert("吃你奶奶的老腚沟子");
  // $(this).hide();
  // $("#banner").show();
// });
// $("#close_banner").click(function () {
//   $("#banner").hide();
// });