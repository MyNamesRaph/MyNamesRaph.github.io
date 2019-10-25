var extended = false;
var extended2 = false;
var extended3 = false;

$("body").hide();
$("#toggle-text1").hide();
$("#toggle-text2").hide();
$("#toggle-text3").hide();




$("html").hover(function() {
    $("body").show();
});
$('html').mouseleave(function() {
    $("body").hide();
});





$(".Box").hover(function() {
    if (extended === false) {
        $(".Box").css("transform", "scale(2)");
        $(".plus").css("transform", "scale(0.5)");
        $(".text").css("transform", "scale(0.5)");
    }
});
$('.Box').mouseleave(function() {
        $(".Box").css("transform", "scale(1)");
        $(".plus").css("transform", "scale(1)");
        $(".text").css("transform", "scale(1)");
});

$(".Box2").hover(function() {
    if (extended2 === false) {
        $(".Box2").css("transform", "scale(2)");
        $(".plus2").css("transform", "scale(0.5)");
        $(".text2").css("transform", "scale(0.5)");
    }
});
$('.Box2').mouseleave(function() {
    $(".Box2").css("transform", "scale(1)");
    $(".plus2").css("transform", "scale(1)");
    $(".text2").css("transform", "scale(1)");
});

$(".Box3").hover(function() {
    if (extended3 === false) {
        $(".Box3").css("transform", "scale(2)");
        $(".plus3").css("transform", "scale(0.5)");
        $(".text3").css("transform", "scale(0.5)");
    }
});
$('.Box3').mouseleave(function() {
    $(".Box3").css("transform", "scale(1)");
    $(".plus3").css("transform", "scale(1)");
    $(".text3").css("transform", "scale(1)");
});



$("#plus1").click(function() {
    $("#toggle-text1").toggle();
    extended = !extended;
    $(".Box").css("transform", "scale(1)");
    $(".plus").css("transform", "scale(1)");
    $(".text").css("transform", "scale(1)");
});
$("#plus2").click(function() {
    $("#toggle-text2").toggle();
    extended2 = !extended2;
    $(".Box2").css("transform", "scale(1)");
    $(".plus2").css("transform", "scale(1)");
    $(".text2").css("transform", "scale(1)");
});
$("#plus3").click(function() {
    $("#toggle-text3").toggle();
    extended3 = !extended3;
    $(".Box3").css("transform", "scale(1)");
    $(".plus3").css("transform", "scale(1)");
    $(".text3").css("transform", "scale(1)");
});