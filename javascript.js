$(function(){
    //ぴよこ用div追加
    var html1 = "", html2 = "", html3 = "", html4 = "";
    for (var i=1; i<=13; i++) {
        html1 += "<div class='box'><a class='clickHukidashi'></a></div>";
        html2 += "<div class='box2'><a class='clickHukidashi'></a></div>";
        html3 += "<div class='box3'><a class='clickHukidashi'></a></div>";
        html4 += "<div class='box4'><a class='clickHukidashi'></a></div>";
    }
    $('h1').after(html1, html2, html3, html4);

    //p追加
    var html5 = "";
    for(var i=1; i<=52; i++){
        html5 += "<p class='hukidashi invisible'></p>";
    }
    $('.whole_clock').after(html5);
    $('.hukidashi').each(function(i){
        $(this).attr("id", "comment"+(1+i));
    });

    //コメントにid付与
    $('.clickHukidashi').each(function(i){
        $(this).attr("href", "#comment"+(1+i));
    });

    //コメント設定
    $('p#comment1').text('おなかすいた');
    $('p#comment2').text('早く帰りたい');
    $('p#comment3').text('NEWoManどこや');
    $('p#comment4').text('乗り換えうまく行かなかった');
    $('p#comment5').text('疲れた');
    $('p#comment6').text('久しぶりに会うの楽しみ');
    $('p#comment7').text('なに買おうかな');
    $('p#comment8').text('人参買い忘れた');
    $('p#comment9').text('リュック重すぎ');
    $('p#comment10').text('明日休みだ');
    $('p#comment11').text('よく働いたなぁ');
    $('p#comment12').text('あつい');
    $('p#comment13').text('ねむい');
    $('p#comment14').text('通り抜けできなくなったんだよな');
    $('p#comment15').text('埼京線のホームどこ');
    $('p#comment16').text('どこでもドアないかな');
    $('p#comment17').text('今日一万歩歩けた');
    $('p#comment18').text('今日もあの子可愛かったな');
    $('p#comment19').text('夕飯何にしよう');
    $('p#comment20').text('ヒール辛いわ');
    $('p#comment21').text('吉祥寺でタピオカ飲もう');
    $('p#comment22').text('あれ迷子になっちゃった');
    $('p#comment23').text('迷ったー');
    $('p#comment24').text('映画始まっちゃう');
    $('p#comment25').text('京王線座れるかな');
    $('p#comment26').text('痩せたい');
    $('p#comment27').text('喉乾いた');
    $('p#comment28').text('玉ねぎ買わなきゃ');
    $('p#comment29').text('明日のパンないや');
    $('p#comment30').text('電話出るかな');
    $('p#comment31').text('あぶなっ');
    $('p#comment32').text('エクスペクト・パトローナム');
    $('p#comment33').text('早く帰ってテレビ見よ');
    $('p#comment34').text('あの番組録画してたかな');
    $('p#comment35').text('この広告可愛い');
    $('p#comment36').text('誕プレ買わなきゃ');
    $('p#comment37').text('明日やろう');
    $('p#comment38').text('あれ、ここどこだ');
    $('p#comment39').text('LUMINEってこっちだっけ');
    $('p#comment40').text('なに買うんだっけ');
    $('p#comment41').text('お家に帰ろう');
    $('p#comment42').text('姿勢意識姿勢意識');
    $('p#comment43').text('どこか寄り道しようかな');
    $('p#comment44').text('東口ってどっちだ');
    $('p#comment45').text('地上に出たいんだけど');
    $('p#comment46').text('あかん');
    $('p#comment47').text('むりや');
    $('p#comment48').text('オムライス食べたい');
    $('p#comment49').text('テスト勉強しなきゃ');
    $('p#comment50').text('あー面白かった');
    $('p#comment51').text('サイダーの気分');
    $('p#comment52').text('配信間に合うかな');
    

    //boxクラスにid付与
    //初期位置の取得
    var posiTop1 = [], posiTop2 = [];
    var posiBottom1 = [], posiBottom2 = [];
    $('.box').each(function(i){
        $(this).attr("id", "box"+(1+i),);
       posiTop1.push($('#box'+(1+i)).position().top);
    });
    $('.box2').each(function(i){
        $(this).attr("id", "box"+(14+i));
        posiBottom1.push($('#box'+(14+i)).position().top);
    });
    $('.box3').each(function(i){
        $(this).attr("id", "box"+(27+i));
        posiTop2.push($('#box'+(27+i)).position().top);
    });
    $('.box4').each(function(i){
        $(this).attr("id", "box"+(40+i));
        posiBottom2.push($('#box'+(40+i)).position().top);
    });


    //非表示コメントの位置
    $('p.hukidashi').each(function(i){
        $(this).css({
            'top': $('#box'+(1+i)).position().top - 60,
            'left': $('#box'+(1+i)).position().left - 50
        })
    });
    
    //スクロールしたら…
   var clockOffset = $('.whole_clock').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);
        $('#clock').text(20+Math.floor(value/600));
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
        var walk = value　* 0.6;
        var run = value * 1.2;
        $('.box').each(function(i){
            if(posiTop1[i] + walk >= 400 && posiTop1[i] + walk < 3360){
                $(this).show();
                $(this).css('top', posiTop1[i] + walk);
            }else{
                $(this).hide();
            }
        });
        $('.box2').each(function(i){
            if(posiBottom1[i] - walk >= 400 && posiBottom1[i] - walk < 3360){
                $(this).show();
                $(this).css('top', posiBottom1[i] - walk);
            }else{
                $(this).hide();
            }
        });
        $('.box3').each(function(i){
            if(posiTop2[i] + run >= 400 && posiTop2[i] + run < 3360){
                $(this).show();
                $(this).css('top', posiTop2[i] + run);
            }else{
                $(this).hide();
            }
        });
        $('.box4').each(function(i){
            if(posiBottom2[i] - run >= 400 && posiBottom2[i] - run < 3360){
                $(this).show();
                $(this).css('top', posiBottom2[i] - run);
            }else{
                $(this).hide();
            }
        });

        //非表示コメントの位置
        $('p.hukidashi').each(function(i){
            $(this).css({
                'top': $('#box'+(1+i)).position().top - 50,
                'left': $('#box'+(1+i)).position().left - 50
            })
        });
        if(value < 0){
            $('p.hukidashi').addClass('invisible');
        }
    });

    
    //クリックでコメント表示
    $('a.clickHukidashi').on('click', function(){
        //個体識別
        var targetNote = $(this).attr('href');

        $('p'+targetNote).removeClass('invisible');
        return false;
    });
    //クリックでコメント非表示
    $('html').mousedown(function(){
        $('p.hukidashi').addClass('invisible');
        //$('a.clickHukidashi').prop("disabled", false);       
    });
});