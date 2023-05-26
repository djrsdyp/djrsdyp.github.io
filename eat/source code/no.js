
        $(function () {
       //右键菜单
		document.oncontextmenu=function(evt){ 
			evt.preventDefault(); 
		};
 
		document.onselectstart=function(evt){ 
			evt.preventDefault(); 
		}; 
      //ctrl+s的另存为按键
	  document.addEventListener("keydown", function (e) {
      if(e.code=='KeyS'&&e.ctrlKey){
        e.preventDefault();
      }    
    });
});