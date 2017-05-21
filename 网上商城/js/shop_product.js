//选项卡
var oTabBox=document.getElementById('tab-box');
var aLi=oTabBox.getElementsByTagName('li');
var aDiv= getClass('tab-item', oTabBox);
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var j=0;j<aDiv.length;j++){
			aDiv[j].style.display='none';
			aLi[j].className='';
		}
		this.className='active';
		aDiv[this.index].style.display='block';
	}
}

var oSel=document.getElementById('select-box');
var oBtn=getClass('sel-btn',oSel)[0];
var oUl=getClass('sel-menu',oSel)[0];
var oLi=oUl.getElementsByTagName('li');
var oP=oBtn.getElementsByTagName('p')[0];
var oSpan=oBtn.getElementsByTagName('span')[0];
oBtn.onmousedown=function(){
	// var oEvent=ev||event;
	oSel.className="select-box selected";
		// oEvent.cancelBubble=true;
};

oBtn.onmouseup=function(){
	// var oEvent=ev||event;
	oSel.className="select-box";
	if(oUl.style.display=='none'||oUl.style.display==''){
		oUl.style.display='block';
		
	}else{
		oUl.style.display='none'
	}
	// oEvent.cancelBubble=true;
};

for(var i=0;i<oLi.length;i++){

		oLi[i].onclick=function(){
		
	 	oP.innerHTML=this.innerHTML;
		oUl.style.display='none';
		
		}
}
document.onclick=function(ev){
		var target=ev.target||event.srcElement
		if(target!=oBtn&&target!=oP&&target!=oSpan){
			oUl.style.display='none';
		}	
}

// 弹层效果
var oSmallimg=getClass('small-img')[0];
var aDialogLi=oSmallimg.getElementsByTagName('li');
var oDialogBox=getClass('dialog-box',oDialogBox)[0];
var oDialogBody=getClass('dialog-body',oDialogBox)[0];
var oContent=getClass('content',oDialogBox)[0];
var	oDialogImg=oDialogBody.getElementsByTagName('img')[0];
var oDialogClose=getClass('dialog-close',oDialogBox)[0];
var oDialogPrev=getClass('dialog-prev',oDialogBox)[0];
var oDialogNext=getClass('dialog-next',oDialogBox)[0];
var oDialogPrevBtn=getClass('prev-btn',oDialogBox)[0];
var oDialogNextBtn=getClass('next-btn',oDialogBox)[0];
var oSlideBtn=getClass('slide-btn',oDialogBox)[0];
// var oImg=this.getElementsByTagName('img')[0];
var iNow=0;
var timer='';


for(var i=0;i<aDialogLi.length;i++){
	aDialogLi[i].index=i;
	aDialogLi[i].onclick=function(){
		var oImg=this.getElementsByTagName('img')[0];
		oDialogBox.style.display='block';
		oDialogImg.src=oImg.src;
		oContent.style.animation='show 0.5s ease forwards';
		iNow=this.index;
	}
}
oDialogBody.onmouseover=function(){
	oDialogPrev.style.display='block';
	oDialogNext.style.display='block';
}
oDialogBody.onmouseout=function(){
	oDialogPrev.style.display='none';
	oDialogNext.style.display='none';
}
//关闭弹窗
oDialogBox.onclick=function(e){
	var target=e.target||event.srcElement;
	if(target==oDialogBox||target==oDialogClose){
		oDialogBox.style.display='none';
	}
}
function prev(){
	iNow--;
	if(iNow==-1){
		iNow=aDialogLi.length-1;
	}
	slideNext()
	
}
function next(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow=0;
	}
	slideNext()
}
oDialogPrev.onclick=function(){
	prev();
};
oDialogNext.onclick=function(){
	next();
};
oDialogPrevBtn.onclick=function(){
	prev();
};
oDialogNextBtn.onclick=function(){
	next();
};
oSlideBtn.onclick=function(){
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	else{
		timer=setInterval(function(){
		oDialogNext.onclick();
		},1000)
	}
	
}
function slideNext(){
	var nextLi=aDialogLi[iNow];
	var nextSrc=nextLi.getElementsByTagName('img')[0].src;
	var oImg=document.createElement('img');
	oImg.src=nextSrc;
	var oldImg=oDialogBody.children[0];
	oDialogBody.insertBefore(oImg,oldImg);
	oldImg.style.animation='hide 1s ease forwards';
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000)
} 