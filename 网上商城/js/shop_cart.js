// var oTbody=document.getElementsByTagName('tbody')[0];
// var aTr=oTbody.getElementsByTagName('tr');
// var aChek=getClass('chekbtn',oTbody);
// var oCheckAll=document.getElementById('checkAll');
// for(var i=0;i<aTr.length;i++){
// 	aTr[i].onclick=function(){
// 		var oCheck=this.getElementsByTagName('input')[0];
// 		if(this.className=='selected'){
// 			this.className='';
// 			oCheck.checked=false;
// 		}else{
// 			this.className='selected';
// 			oCheck.checked=true;
// 		}
// 		var aCheckTr=getClass('selected',oTbody);
// 		if(aCheckTr.length==aTr.length){
// 		 	oCheckAll.checked=true;
// 		}else{
// 			oCheckAll.checked=false;
// 		}
// 	}
// }
// oCheckAll.onclick=function(){
// 	if(oCheckAll.checked==false){
// 		for(var i=0;i<aTr.length;i++){
// 		aTr[i].className='';
// 		aChek[i].checked=false;
// 	}
// 	}
// 	else{
// 		for(var i=0;i<aTr.length;i++){
// 		aTr[i].className='selected';
// 		aChek[i].checked=true;
// 		}
// 	}
// }



//利用jqurery
$(function(){
	var $oTbody=$('tbody');
	var $aTr=$('.table1 tbody>tr');
	var $oCheckAll=$('#checkAll');
	var flag;
	console.log($aTr.length)
		
		$aTr.on('click',function(){		
			$(this).toggleClass('selected');
			var $aCheckTr=$aTr.filter('.selected');
			$(this).find(':checkbox').prop('checked',$(this).hasClass('selected'));
			// if($aCheckTr.length==$aTr.length){
			// 	$oCheckAll.prop('checked',true)
			// }else{
			// 	$oCheckAll.prop('checked',false)
			// }
			flag=true;
			$aTr.each(function(index,elem){
				if(!$(this).hasClass('selected')){
					flag=false;
				}
			})
			$oCheckAll.prop('checked',flag)

		});



		$oCheckAll.on('click',function(){
			if($oCheckAll.prop('checked')==true){
				$aTr.addClass('selected');
				$aTr.find(':checkbox').prop('checked',!$(this).hasClass('selected'));
			}else{
				$aTr.removeClass('selected');
				$aTr.find(':checkbox').prop('checked',$(this).hasClass('selected'));
			}
			
			

		})


})