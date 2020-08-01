$(function(){
    //div追加
    var html = "";
    var html2 = "";
    for (var i=1; i<=10; i++) {
        html += "<div class='box'></div>";
        html2 += "<div class='box2'></div>";
    }
    $('h1').after(html);
    $('h1').after(html2);

    //boxクラスにid付与
    $('.box').each(function(i){
        $(this).attr("id", "box"+(i+1));
    });
    $('.box2').each(function(i){
        $(this).attr("id", "box"+(11+i));
    });
    
    //パララックス設定
   var top = $('#box1').offset().top;
   var bottom = $('#box11').offset().bottom;//bottomは取得できない
   var clockOffset = $('.whole_clock').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);
        $('#clock').text(20+Math.floor(value/900));
        
        if(value > clockOffset - 30){
            $('.whole_clock').css({
                'position':'fixed',
                'top':0,
            });
        }else{
            $('.whole_clock').css('position','static');
        }

        $('.box').each(function(i){
            $(this).css('top', top + value / (i+1));
        });
        $('.box2').each(function(i){
            $(this).css('bottom', bottom + value / (i+1));
        });
    });
});