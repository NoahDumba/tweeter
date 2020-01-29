$(document).ready(function() {
  $(".tweet-container").hover(function(){
    $(this).css("font-weight", "600");
    $(this).find("p.username").css("visibility", "visible");
    $(this).css("box-shadow", "5px 10px #888888");
  }, function() {
    $(this).css("font-weight", "300")
    $(this).find("p.username").css("visibility", "hidden");
    $(this).css("box-shadow", "none");
  });
});