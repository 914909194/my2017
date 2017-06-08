$(function(){
	var now=0;
	$('.right').on('click',function(){
		// console.log(111);
		next();
		
	})
	$('.left').on('click',function(){
		// console.log(111);
		now--;
		if(now==-1){
			now=$('.img-box img').length-1;
			$('.img-box').animate({left:-$('.img-box img').width()*now},1000);
		}else{
			$('.img-box').animate({left:-$('.img-box img').width()*now},1000);
		}
		
	})

	var timer=setInterval(function(){
		// clearInterval(timer);
		next();
	},4000)
	$('.carousel').on('mouseover',function(){
		clearInterval(timer);
		$('.left,.right').show();
	})
	$('.carousel').on('mouseout',function(){
		$('.left,.right').hide();

		timer=setInterval(function(){
		// clearInterval(timer);
		next()
	},4000)
	})

	function next(){
		now++;
		if(now==$('.img-box img').length){
			now=0;
			$('.img-box').animate({left:0},1000);
		}else{
			$('.img-box').animate({left:-$('.img-box img').width()*now},1000);
		}
	}



		var oClock=document.getElementById('clock');
		var oSecond=document.getElementById('second');
		var oMinute=document.getElementById('minute');
		var oHour=document.getElementById('hour');
		var html='';
		for(var i=0;i<60;i++){
			
			html+='<li style="-webkit-transform:rotate('+i*6+'deg)"></li>';
		}
		oClock.innerHTML=html;
		function run(){
			var date=new Date(),
			iSecond=date.getSeconds(),
			iMinute=date.getMinutes()+iSecond/60,
			iHour=date.getHours()+iMinute/60;
			oSecond.style.WebkitTransform="rotate("+iSecond*6+"deg)";
			oMinute.style.WebkitTransform="rotate("+iMinute*6+"deg)";
			oHour.style.WebkitTransform="rotate("+iHour*30+"deg)";
			
		}
		run();
		setInterval(function(){
			run();

		},1000)
		// setInterval(run,1000)
		

	// 

})