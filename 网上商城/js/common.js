    function getStyle(obj,name){
            if(obj.currentStyle){
                return obj.currentStyle[name];
            }
            else{
                return getComputedStyle(obj,false)[name];
            }
        }//获取元素属性值函数
        //  startMove(oDiv,width:400,height:400),完美运动框架
    function startMove(obj,json,fnEnd){
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                var bStop=true;    //假设所有的值都已经到了
                for(var attr in json){
                    var cur=0;
                    if(attr=='opacity'){
                        cur=Math.round(parseFloat(getStyle(obj,attr))*100);
                    }
                    else{
                        cur=parseInt(getStyle(obj,attr));
                    }
                    
                    var speed=(json[attr]-cur)/6;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(cur!=json[attr])
                        bStop=false;
                    
                    if(attr=='opacity'){
                        obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                        obj.style.opacity=(cur+speed)/100;
                    }
                    else{
                        obj.style[attr]=cur+speed+'px'
                    }
                }
                
                if(bStop){
                    clearInterval(obj.timer);
                    if(fnEnd) fnEnd();
                }
            },30)
        }//完美运动框架函数3个参数（元素，json数组包含多个要改变的量及改变的目标值,后续函数）
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
    }
    var oMenuBox = document.getElementById('menu-box')
    var aLi = getClass('menu-btn',oMenuBox);

    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function(){
        var aUL=this.getElementsByTagName('ul');
        aUL[0].style.opacity=100;
        aUL[0].style.filter='alpha(opacity=1)';


        aUL[0].style.top = '56px';

       } 
        aLi[i].onmouseout = function(){
        var oUL=this.getElementsByTagName('ul');
        oUL[0].style.opacity=0;
        oUL[0].style.filter='alpha(opacity=0)';
        oUL[0].style.top = '150px';
       }
    }


