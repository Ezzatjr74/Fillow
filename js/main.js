$(window).resize(function (){
    var wndo = screen.width;
    var mobile = 576;
    if (wndo <= mobile){
            console.log(wndo);
    }else {
        console.log("no");
    };
});
$(".fa-sliders-h").click(function () {
    $(".left-slide").toggleClass("showSlide");
    $(".dropClndr").slideUp();
    $(".dropNotve").slideUp();
    $(".dropPro").slideUp();
});
$("#bell").click(function (){
    $(".dropNotve").slideToggle();
    $(".dropClndr").slideUp();
    $(".dropPro").slideUp();

});
$(".calendar").click(function (){
    $(".dropClndr").slideToggle();
    $(".dropNotve").slideUp();
    $(".dropPro").slideUp();

});
$(".profile").click(function (){
    $(".dropPro").slideToggle();
    $(".dropNotve").slideUp();
    $(".dropClndr").slideUp();
});
$(".chat").click(function (){
    $(".dropPro").slideUp();
    $(".dropNotve").slideUp();
    $(".dropClndr").slideUp();
    $(".obcaity").toggleClass("clear");
    $(".chatBody").toggleClass("chatshow");

});
$(".obcaity").click(function (){
    $(".obcaity").toggleClass("clear");
    $(".chatBody").toggleClass("chatshow");

});

