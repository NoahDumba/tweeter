const renderTweets = function(tweets) {
  $('.container').empty();
  for (let tweet of tweets) {
    $('.container').prepend(createTweetElement(tweet));
  }
}

jQuery(function($) {
  $('form').on('submit', postTweet);
  loadTweets();
});