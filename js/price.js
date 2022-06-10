$(document).ready(function(){
    //scroll
    $('.topscroll').click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    
    //price card
    $('.sel-btn').click(function(e){
        e.preventDefault();
        let basic = 600;
        let price = 1600;
        let minus = 100;
        $(this).parent().toggleClass('active');
        switch($(this).attr('data-cata')){
            case "10000":
                $('.btn-info').text($(this).attr('data-cata'));
                $('.basic-price').text(basic);
                $('.normal-price').text(price);
                break;
            case "15000":
                $('.btn-info').text($(this).attr('data-cata'));
                $('.basic-price').text(basic*1 - minus*1);
                $('.normal-price').text(price*1 - minus*1);
                break
            case "20000":
                $('.btn-info').text($(this).attr('data-cata'));
                $('.basic-price').text(basic*1 - minus*2);
                $('.normal-price').text(price*1 - minus*2);
                break
            case "25000":
                $('.btn-info').text($(this).attr('data-cata'));
                $('.basic-price').text(basic*1 - minus*3);
                $('.normal-price').text(price*1 - minus*3);
                break
            case ">25000":
                $('.btn-info').text($(this).attr('data-cata'));
                $('.basic-price').text(basic*1 - minus*4);
                $('.normal-price').text(price*1 - minus*4);
                break
        }
        $(this).parent().siblings().removeClass('active');
    });
    
    //FQA
    $('.question-title').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('show-text');
        $(this).siblings('question-text').slideToggle();
        $(this).siblings().find('question-text').slideUp();
        $(this).parent().siblings().removeClass('show-text');
    });
});