const postTweet = function(event) {
  event.preventDefault();
  const $data = $(this).serialize();



  if ($data === "text=") {
    $(".new-tweet").find("#empty-field").slideDown();
    $(".new-tweet").find("#over-max").slideUp();
  } else if ($data.length > 145) {
    $(".new-tweet").find("#over-max").slideDown();
    $(".new-tweet").find("#empty-field").slideUp();
  } else {
    $(".new-tweet").find("#over-max").slideUp();
    $(".new-tweet").find("#empty-field").slideUp();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data : $data
    }).then(function () {
      $(".textarea").val('');
      loadTweets();
    });
  }
};

const loadTweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET"
  }).then(function (tweets) {
    renderTweets(tweets);
  });
}