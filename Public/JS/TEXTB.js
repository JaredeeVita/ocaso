$(document).ready(function () {
    $(".back-to-top").css("display", "none");$("body").scroll(function() {
      if($(this).scrollTop() == 0){
        $(".back-to-top").css("display", "none");
      } else {
        $(".back-to-top").css("display", "block");
      }
    });$(".back-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 800);
     });
  });