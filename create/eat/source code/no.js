
        $(function () {
       //�Ҽ��˵�
		document.oncontextmenu=function(evt){ 
			evt.preventDefault(); 
		};
 
		document.onselectstart=function(evt){ 
			evt.preventDefault(); 
		}; 
      //ctrl+s�����Ϊ����
	  document.addEventListener("keydown", function (e) {
      if(e.code=='KeyS'&&e.ctrlKey){
        e.preventDefault();
      }    
    });
});