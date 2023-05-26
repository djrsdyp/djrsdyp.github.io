function submit() {
    var text = document.getElementById("data").value
    var eatdata = $("#list").val()
    // console.log(text.length)
    // 打印textarea的值
    // console.log(eatdata)
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%·]")
    var pattern_two = new RegExp("[1234567890]")
    var pattern_three = new RegExp("[abcdefghijklmnopqrstuvwxyz]")
    var special = text.match(pattern)
    var num = text.match(pattern_two)
    var eng = text.match(pattern_three)
    if(special){
        alert('是不是有特殊字符?')
    }else if(text.indexOf("djr") > -1){
        alert('输入作者干嘛?')
    }else if(num){
        alert('有关数字的美食?')
    }else if(eng){
        alert('什么洋文?不会输入中文?')
    }else if(text.length >= 6){
        alert('有这么长的名字?')
    }else if(text.length == 0){
        alert('你想吃空气?')
    }else if(text.indexOf("屎") > -1){
        alert('确定吃这个?')
    }else{
        document.getElementById("list").value += ' ' + text + ''
        alert('提交成功')
    }
    document.getElementById("data").value=""
}