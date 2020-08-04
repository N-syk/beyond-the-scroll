$(function(){
    //div追加
    var html1 = "", html2 = "", html3 = "", html4 = "";
    for (var i=1; i<=25; i++) {
        html1 += "<div class='box'><a class='clickToolTip'></a></div>";
        html2 += "<div class='box2'></div>";
        html3 += "<div class='box3'></div>";
        html4 += "<div class='box4'></div>";
    }
    $('h1').after(html1, html2, html3, html4);

    //boxクラスにid付与
    $('.box').each(function(i){
        $(this).attr("id", "box"+(1+i),);
    });
    $('.clickToolTip').each(function(i){
        $(this).attr("href", "#comment"+(1+i));
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
   var bottom = 3000 - $('#box26').position().top;//※bottomは取得できない
   var clockOffset = $('.whole_clock').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);
        $('#clock').text(20+Math.floor(value/900));
        //時計がついてくる
        if(value > clockOffset - 35){
            $('.whole_clock').css({
                'position':'fixed',
                'top':0
            });
        }else{
            $('.whole_clock').css('position','static');
        }
        //ぴよこが動く
        var top_walk = value　* 0.8;
        var bottom_walk = bottom + value;
        var top_run = value * 1.2;
        var bottom_run = bottom + value * 1.24;
        $('.box').each(function(i){
            if(top_walk < 3000){
                $(this).show();
                $(this).css('top',top + top_walk);
            }else{
                $(this).hide();
            }
        });
        $('.box2').each(function(i){
            $(this).css('bottom', bottom_walk);
        });
        $('.box3').each(function(i){
            if(10 + top_run < 3000){
                $(this).show();
                $(this).css('top', top + 10 + top_run);
            }else{
                $(this).hide();
            }
        });
        $('.box4').each(function(i){
            $(this).css('bottom', 10 + bottom_run);
        });

        //非表示コメントの位置
        $('p.toolTip').each(function(i){
            $(this).css({
                'top': $('#box'+(1+i)).position().top - 50,
                'left': $('#box'+(1+i)).position().left - 50
            })
        });
    });

    //クリックでコメント表示
    $('a.clickToolTip').on('click', function(){
        //個体識別
        var targetNote = $(this).attr('href');

        $('p'+targetNote).removeClass('invisible');
        return false;
    });
    $('html').mousedown(function(){
        $('p.toolTip').addClass('invisible');
        $('a.clickToolTip').prop("disabled", false);       
    });
});