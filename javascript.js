$(function(){
    //div追加
    var html1 = "", html2 = "", html3 = "", html4 = "";
    for (var i=1; i<=25; i++) {
        html1 += "<div class='box'></div>";
        html2 += "<div class='box2'></div>";
        html3 += "<div class='box3'></div>";
        html4 += "<div class='box4'></div>";
    }
    $('h1').after(html1, html2, html3, html4);

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
    $('.box4').each(function(i){
        $(this).attr("id", "box"+(31+i));
    });
    
   var top = $('#box1').position().top;
   var bottom = 5000 - $('#box26').position().top;//※bottomは取得できない
   var clockOffset = $('.whole_clock').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);
        $('#clock').text(20+Math.floor(value/900));
        //時計がついてくる
        if(value > clockOffset - 30){
            $('.whole_clock').css({
                'position':'fixed',
                'top':0
            });
        }else{
            $('.whole_clock').css('position','static');
        }
        //ぴよこが動く
        var top_walk = value;
        var bottom_walk = bottom + value;
        var top_run = top + value * 1.24;
        var bottom_run = bottom + value * 1.24;
        $('.box').each(function(i){
            if(top_walk < 5000){
                $(this).show();
                    $(this).css({
                        'top':top+top_walk,
                    });
            }else{
                    $(this).hide();
            }
        });
        $('.box2').each(function(i){
            $(this).css('bottom', bottom_walk);
        });
        $('.box3').each(function(i){
            if(10 + top_run < 5000){
                $(this).show();
                $(this).css('top', 10 + top_run);
            }else{
                $(this).hide();
            }
        });
        $('.box4').each(function(i){
            $(this).css('bottom', 10 + bottom_run);
        });
    });
});