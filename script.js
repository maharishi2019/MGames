$(function() {
    $(document).on("mousewheel", function() {
      if($(document).scrollBottom() > 100){
          $('footer').hide();
      } else {
          $('footer').show();
      }; 
    });
  });