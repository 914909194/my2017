requirejs.config({
    baseUrl: 'js/',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog1'],function($,Dialog){
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
	var iNow=0;
	var timer='';
    $('.small-img li').on('click',function(){
    	var dialog1=new Dialog({
    		width:403,
            height:498,
            opacity:0.6,
            title:'',
            content:'.dialog-body-content'
    	});

        dialog1.open();

     var $attr=$(this).children().attr('src');
		$('.dialog-box img').attr('src',$attr);
		$('.content').css('animation','show 0.5s ease forwards');
		iNow=$(this).index();
    });


	$('body').on('mouseover','.dialog-body',function(){
		$('.dialog-prev').show();
		$('.dialog-next').show();
	})
	$('body').on('mouseout','.dialog-body',function(){
		$('.dialog-prev').hide();
		$('.dialog-next').hide();
	})


	$('body').on('click','.dialog-next',function(){
		next();
	})

	$('body').on('click','.dialog-prev',function(){
		prev();
	})

	$('body').on('click','.prev-btn',function(){
		prev();
	})

	$('body').on('click','.next-btn',function(){
		next();
	})
	
	$('body').on('click','.slide-btn',function(){
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
		if(iNow==$('.small-img>li').length){
		iNow=0;
		}
		slideNext();
	}
	function prev(){
		iNow--;
		if(iNow==-1){
		iNow=$('.small-img>li').length-1;
		}
		slideNext();
	}

	function slideNext(){
		
		var $nextSrc=$('.small-img>li').eq(iNow).children().attr('src');
		$('.dialog-body img').eq(0).before('<img src="'+$nextSrc+'" />');	
		$('.dialog-body img').eq(0).siblings('img').fadeOut(500,function(){
			$(this).remove();
		})

	}





    // $('body').on('click','.next-btn',function(){
    // 	var dialog2=new Dialog({
    // 		width:200,
    //         height:100,
    //         opacity:0.6,
    //         title:'登陆成功'
    // 	});
    // 	dialog2.open();
    // })
    	
   // dialog.close();
});