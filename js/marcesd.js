$(window).ready(function(){
    $(".section img").click(function(){
        $(".section img").animate({
            "left":"-1",
           },2000,function(){
            $(this).animate({
            "left":"50%"
            },2000)})})});