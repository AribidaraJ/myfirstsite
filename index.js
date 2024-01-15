$(document).ready(function() {
    $("li:nth-child(1)").click(function() {
        var about = $("#about").offset();
        window.scrollTo(0, about.top);
    });
    $("li:nth-child(2)").click(function() {
        var works = $("#works").offset();
        window.scrollTo(0, works.top);
    });
    $("li:nth-child(3)").click(function() {
        var contact = $("#contact").offset();
        window.scrollTo(0, contact.top);
    });
    $(".fa-bars").click(function() {
        $(this).hide();
        $(".close").show();
        $("nav").width("70%");
        $("nav ul, nav div").fadeIn("slow");
        $("nav img").css("border", "4px solid white");
        $("nav img").show();
    });
    $(".close").click(function() {
        $(this).hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div").fadeOut("fast");
        $("nav img").css("border", "4px solid #000324");
        $("nav img").fadeOut("fast");
    });
    $("ul li").click(function() {
        $(".close").hide();
        $(".fa-bars").show();
        $("nav").width("0");
        $("nav ul, nav div").fadeOut("fast");
    });
});