$(function(){
    //div追加
    var html1 = "";
    var html2 = "";
    var html3 = "";
    for (var i=1; i<=10; i++) {
        html1 += "<div class='box'></div>";
        html2 += "<div class='box2'></div>";
        html3 += "<div class='box3'></div>";
    }
    $('h1').after(html1, html2, html3);

    //boxクラスにid付与
    $('.box').each(function(i){
        $(this).attr("id", "box"+(1+i));
    });
    $('.box2').each(function(i){
        $(this).attr("id", "box"+(11+i));
    });
    $('.box3').each(function(i){
        $(this).attr("id", "box"+(21+i));
    });
    
   //var windowHeight = $(window).height();
   var top = $('#box1').position().top;
   var bottom = 5000 - $('#box11').position().top;//※bottomは取得できない
   var clockOffset = $('.whole_clock').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);
        $('#clock').text(20+Math.floor(value/900));
        //時計がついてくる
        if(value > clockOffset - 30){
            $('.whole_clock').css({
                'position':'fixed',
                'top':0,
            });
        }else{
            $('.whole_clock').css('position','static');
        }
        //ぴよこが動く
        $('.box').each(function(i){
            $(this).css('top', top + value);
        });
        $('.box2').each(function(i){
            $(this).css('bottom', bottom + value);
        });
        $('.box3').each(function(i){
            $(this).css('bottom', bottom + value + 10);
        });
    });
});