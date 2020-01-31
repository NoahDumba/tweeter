const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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
    <span id="tweet">${escape(tweetData["content"]["text"])}</span>
    <hr id="line" />
    <footer>
        <span id="date">${diffDays} days ago</span>
        <span class="icons">
        <img src="/images/flag.png" id="flag-img"><img src="/images/retweet.png" id="rt-img"><img src="/images/like.png" id="like-img">
        </span>
      </footer>
  </article>`
  return tweet;
}