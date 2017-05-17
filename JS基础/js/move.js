	function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];//IE浏览器
			}
			else{
				return getComputedStyle(obj,false)[name];//谷歌浏览器
			}
		}//获取元素属性值函数
		//	startMove(oDiv,width:400,height:400),完美运动框架
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



	function animate(elem, attr, callback){
			clearInterval(elem.timer);
			elem.timer = setInterval(function(){
			var bStop = true;//一个标识位，true代表可以停止定时器，false代表不可不停止
			for(var prop in attr){//1:width
				var curr = parseInt(getStyle(elem, prop));
				if(prop == 'opacity'){
					curr = parseInt(getStyle(elem, prop)*100);
				}
				var speed = (attr[prop] -  curr) / 8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if(curr != attr[prop]){
					bStop = false;
				}

				if(prop == 'opacity'){
					elem.style.opacity = (curr + speed) / 100;
					elem.style.filter = 'alpha(opacity='+(curr + speed)+')';
				}else{
					elem.style[prop] = curr + speed + 'px';
				}
			}
			if(bStop){
				clearInterval(elem.timer);
				callback && callback();
			}
		}, 30);
	}