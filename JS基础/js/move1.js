function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}//获取元素属性值函数
function startMove(obj,attr,iTarget,fnEnd){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var cur=0;
				if(attr=='opacity'){
					cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					cur=parseInt(getStyle(obj,attr));
				}
				
				var speed=(iTarget-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cur==iTarget){
					clearInterval(obj.timer);
					if(fnEnd) fnEnd();
	
				}else{
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}
					else{
						obj.style[attr]=cur+speed+'px'
					}
				}
			},30)
		}//任意值运动框架函数4个参数（元素，变化属性，变化目标,函数）