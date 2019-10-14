$(function ($) {
  $(document).ready(function () {
    //hide .navbar first
    $("#navscroll").hide();
    //Fade in on scroll
    $(function () {
      $(window).scroll(function () {
        //Set distance user need to scroll before we start fadeIn

        if ($(this).scrollTop() > 50) {
          $("#navscroll").fadeIn('slow');
        }else {
          $("#navscroll").fadeOut('slow');
        }
      });
    });
  });
}(jQuery));
