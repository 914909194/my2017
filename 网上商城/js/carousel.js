	function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];
		}
		else{
			return getComputedStyle(obj,null)[name];
		}
	}//获取元素属性值函数
	
	function getClass(claName,context){
    	var result=[];
    	context=context || document;
    	var arr=context.getElementsByTagName('*');
    	for(var i=0;i<arr.length;i++){
    		if(arr[i].className.indexOf(claName)!=-1){
    			result.push(arr[i]);
    		}
    	}
          return result;
    }//获取元素className
    var oDiv=getClass('carousel')[0]; 
    var btnBox=getClass('carousel-btns')[0];   
    var aBtns=btnBox.getElementsByTagName('li');
    var aItem=getClass('carousel-item');
    var oImag=getClass('carousel-imgs')[0];
    var now=0;
    for(var i=0;i<aBtns.length;i++){
    	aBtns[i].index=i;
    	aBtns[i].onclick=function(){
    		now=this.index;
    		tab();
    	}
    }

    function tab(){
		for(var j=0;j<aBtns.length;j++){
			aBtns[j].className='';
		}
		aBtns[now].className='selected';
		oImag.style.left=-aItem[0].offsetWidth*now+'px';
		// startMove(oImag,{left:-aItem[0].offsetWidth*now})	
	}
	
	function next(){
		now++;
		if(now==aBtns.length){
		now=0;
		}
		tab();
	}

	var timer=setInterval(next,2000);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	};	
	oDiv.onmouseout=function(){
		timer=setInterval(next,2000)
	};