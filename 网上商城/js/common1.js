    $('.menu-btn').on('mouseover',function(){
        $('.sub-menu').css(
        'animation', 'show 0.2s ease forwards')    
    })
    
    // $('.menu-btn').hover(function(){
    //     $(this).find('.sub-menu').show().animate(
    //         {top:56})
    // },function(){
    //    $(this).find('.sub-menu').hide().animate(
    //         {top:120})
    // })


    // var oMenuBox = document.getElementById('menu-box')
    // var aLi = getClass('menu-btn',oMenuBox);

    // for(var i=0;i<aLi.length;i++){
    //     aLi[i].onmouseover = function(){
    //     var aUL=this.getElementsByTagName('ul');
    //     aUL[0].style.opacity=100;
    //     aUL[0].style.filter='alpha(opacity=1)';


    //     aUL[0].style.top = '56px';

    //    } 
    //     aLi[i].onmouseout = function(){
    //     var oUL=this.getElementsByTagName('ul');
    //     oUL[0].style.opacity=0;
    //     oUL[0].style.filter='alpha(opacity=0)';
    //     oUL[0].style.top = '150px';
    //    }
    // }