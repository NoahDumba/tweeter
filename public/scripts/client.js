/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweetData) {
  const oneDay = 24 * 60 * 60 * 1000;
  const tweetDate = new Date(tweetData["created_at"]);
  const secondDate = new Date();
  const diffDays = Math.round(Math.abs((tweetDate - secondDate) / oneDay));

  const tweet = `
  <article class="tweet-container">
    <header>
      <img id="profile-pic" src="${tweetData["user"]["avatars"]}">
      <p id="name">${tweetData["user"]["name"]}</p>
      <p class="username">${tweetData["user"]["handle"]}</p>
    </header>
    <span id="tweet">${tweetData["content"]["text"]}</span>
    <hr id="line" />
    <footer>
        <span id="date">${diffDays} days ago</span>
        <span id="icons">somehow get those lil icons</span>
      </footer>
  </article>`
  return tweet;
}

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('.container').append(createTweetElement(tweet));
  }
}

$(document).ready(function() {
  renderTweets(data);
});