$(function(){
	var $selBtn=$('.sel-btn');
	var $selMenu=$('.sel-menu');
	$selBtn.on('mousedown',function(){
		$('#select-box').addClass('selected');
	})
	$selBtn.on('mouseup',function(){
		$('#select-box').removeClass('selected');
		$selMenu.toggle();
	});
	$('li',$selMenu).on('click',function(){
		$('p',$selBtn).html($(this).html());
		$selMenu.hide();

	})

	$(document).on('click',function(e){
		if(e.target!=$selBtn && e.target!=$('p',$selBtn)[0]&&e.target!=$('span',$selBtn)[0]){
			$selMenu.hide();
		}
	})

	$('.btns-box li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-item').eq($(this).index()).show().siblings().hide();

	})




//弹层动画开始

	var $Smallimg=$('.small-img>li');
	var $DialogBox=$('.dialog-box');
	var $Content=$('.content');
	var $dialogClose=$('.dialog-close');
	var $prev=$('.dialog-prev');
	var $next=$('.dialog-next');
	var $dialogBody=$('.dialog-body');
	var $oDialogPrevBtn=$('.prev-btn');
	var $oDialogNextBtn=$('.next-btn');
	var $oSlideBtn=$('.slide-btn');
	
	var iNow=0;
	var timer='';
	$Smallimg.on('click',function(){
		var $attr=$(this).children().attr('src');
		$('.dialog-box img').attr('src',$attr);
		$DialogBox.show();
		$Content.css('animation','show 0.5s ease forwards');
		iNow=$(this).index();
	})
	$DialogBox.on('click',function(e){
		if(e.target==$DialogBox[0]||e.target==$dialogClose[0]){
			
			$DialogBox.hide();
		}
	})

	$dialogBody.on('mouseover',function(){
		$prev.show();
		$next.show();
	})
	$dialogBody.on('mouseout',function(){
		$prev.hide();
		$next.hide();
	})


	$next.on('click',function(){
		next();
	})

	$prev.on('click',function(){
		prev();
	})

	$oDialogPrevBtn.on('click',function(){
		prev();
	})

	$oDialogNextBtn.on('click',function(){
		next();
	})
	
	$oSlideBtn.on('click',function(){
		if(timer){
			clearInterval(timer);
			timer=null;
		}
		else{
			timer=setInterval(function(){
				next();
			},1000)
		}
	})

	function next(){
		iNow++;
		if(iNow==$Smallimg.length){
		iNow=0;
		}
		slideNext();
	}
	function prev(){
		iNow--;
		if(iNow==-1){
		iNow=$Smallimg.length-1;
		}
		slideNext();
	}
	function slideNext(){
		// var $nextLi=$Smallimg.eq(iNow);
		// var $nextSrc=$nextLi.children().attr('src');
		// var $oImg=$('<img src="" alt="">');
		// $oImg.attr('src',$nextSrc);
		// var $oldImg=$dialogBody.children('img');
		// $oImg.prependTo($dialogBody);
		// $oldImg.css('animation','hide 1s ease forwards');
		// setTimeout(function(){
		// 	$oldImg.remove();
		// },1000)
		var $nextSrc=$Smallimg.eq(iNow).children().attr('src');
		$('.dialog-body img').eq(0).before('<img src="'+$nextSrc+'" />');	
		$('.dialog-body img').eq(0).siblings('img').fadeOut(500,function(){
			$(this).remove();
		})

	}

})