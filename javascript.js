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
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        $('#scrollValue').text(value);

        $('.box').each(function(i){
            $(this).css('top', top + value / (i+1));
        });
        $('.box2').each(function(i){
            $(this).css('bottom', top + value / (i+1));
        });
        /*$('#box1').css('top', top + value / 2);
        $('#box2').css('top', top + value / 4);
        $('#box3').css('top', top + value / 6);
        $('#box4').css('top', top + value / 8);
        $('#box5').css('top', top + value / 10);*/
    });
});