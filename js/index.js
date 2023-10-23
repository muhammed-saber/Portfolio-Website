function blinkCursor(on){
  if(on){
    $(".cursor").html(" ");
  }else{
    $(".cursor").html("_");
  }
  setTimeout(function(){blinkCursor(!on);}, 800);
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
  $('[data-toggle="popover"]').popover()
})
$(document).ready(blinkCursor(true));
