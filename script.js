$(function() {
    $(document).on("mousewheel", function() {
      if($(document).scrollBottom() > 50){
          $('footer').hide();
      } else {
          $('footer').show();
      }; 
    })
  });