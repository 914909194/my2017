requirejs.config(
{
	baseUrl:'js/',
	paths:{
		jquery:'jquery-1.12.4'
	}
});

define(['jquery'],function($){
	function Dialog(option){
		var _this=this;
		var defaultVal={
			width:400,
			heifht:300,
			opacity:0.5,
			title:'',
			content:''
		};
		option=$.extend(defaultVal,option);
			this.$dialogBox=$('<div class="dialog-box"></div>')
			.css('background','rgba(0,0,0,'+option.opacity+')').on('click',function(e){
				if(e.target==$('.dialog-box')[0]||e.target==$('.dialog-close')[0]){		
					_this.close();
				}
			});
			this.$content=$('<div class="content"></div>')
			.css({
				width:option.width,
				height:option.height,
				marginLeft:-option.width/2,
				marginTop:-option.height/2
			});

			

			this.$dialogTitle=$('<div class="dialog-title"></div>');
			this.$title=$('<span class="title">'+option.title+'</span>');
			this.$dialogClose=$('<span class="dialog-close">X</span>').on('click',function(){
				_this.close();
			});
			this.$dialogBody=$('<div class="dialog-body"></div>').html($(option.content).clone().show());
	}

	Dialog.prototype.open=function(){
		this.$dialogBox.append(this.$content);
		this.$content.append(this.$dialogTitle).append(this.$dialogBody);
		this.$dialogTitle.append(this.$title).append(this.$dialogClose);
		$('body').append(this.$dialogBox);
	}



	Dialog.prototype.close=function(){
		this.$dialogBox.remove();
	}
	return Dialog;
	
})