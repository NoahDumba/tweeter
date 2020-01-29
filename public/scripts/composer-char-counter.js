$(document).ready(function() {
  $(".textarea").on('keyup', function() {
    $(this).closest("form").find("span.counter").replaceWith('<span class="counter">' + (140 - $(this).val().length) + '</span>');
    if ($(this).val().length > 140) {
      $(this).closest("form").find("span.counter").css("color", "red");
    }
  });
});