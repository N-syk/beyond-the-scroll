$(function(){
    //div追加
    var html1 = "", html2 = "", html3 = "", html4 = "";
    for (var i=1; i<=25; i++) {
        html1 += "<div class='box'><a class='clickToolTip'></a></div>";
        html2 += "<div class='box2'><a class='clickToolTip'></a></div>";
        html3 += "<div class='box3'><a class='clickToolTip'></a></div>";
        html4 += "<div class='box4'><a class='clickToolTip'></a></div>";
    }
    $('h1').after(html1, html2, html3, html4);

    //p追加
    var html5 = "";
    for(var i=1; i<=100; i++){
        html5 += "<p class='toolTip invisible'></p>";
    }
    $('.whole_clock').after(html5);
    $('.toolTip').each(function(i){
        $(this).attr("id", "comment"+(1+i));
    });

    

    //boxクラスにid付与
    //初期位置の取得
    var posiTop1 = [], posiTop2 = [];
    var posiBottom1 = [], posiBottom2 = [];
    $('.box').each(function(i){
        $(this).attr("id", "box"+(1+i),);
       posiTop1.push($('#box'+(1+i)).position().top);
    });
    $('.box2').each(function(i){
        $(this).attr("id", "box"+(26+i));
        posiBottom1.push(3400 - $('#box'+(26+i)).position().top);
    });
    $('.box3').each(function(i){
        $(this).attr("id", "box"+(51+i));
        posiTop2.push($('#box'+(51+i)).position().top);
    });
    $('.box4').each(function(i){
        $(this).attr("id", "box"+(76+i));
        posiBottom2.push(3400 - $('#box'+(76+i)).position().top);
    });

    //コメントにid付与
    $('.clickToolTip').each(function(i){
        $(this).attr("href", "#comment"+(1+i));
    });
    
    //スクロールしたら…
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
        var walk = value　* 0.8;
        var run = value * 1.2;
        $('.box').each(function(i){
            if(walk < 3400){
                $(this).show();
                $(this).css('top', posiTop1[i] + walk);
            }else{
                $(this).hide();
            }
        });
        $('.box2').each(function(i){
            $(this).css('bottom', posiBottom1[i] + walk);
        });
        $('.box3').each(function(i){
            if(10 + run < 3400){
                $(this).show();
                $(this).css('top', posiTop2[i] + run);
            }else{
                $(this).hide();
            }
        });
        $('.box4').each(function(i){
            $(this).css('bottom', 10 + posiBottom2[i] + run);
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
    //クリックでコメント非表示
    $('html').mousedown(function(){
        $('p.toolTip').addClass('invisible');
        $('a.clickToolTip').prop("disabled", false);       
    });
});