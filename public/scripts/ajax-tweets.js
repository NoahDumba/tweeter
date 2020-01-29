const postTweet = function(event) {
  event.preventDefault();
  const $data = $(this).serialize();

  if ($data === "text=") {
    alert("You gotta write something");
  } else if ($data.length > 145) {
    alert("Over 140 characters");
  } else {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data : $data
    }).then(function () {
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