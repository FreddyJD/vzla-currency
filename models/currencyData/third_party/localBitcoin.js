const fetch = require('node-fetch');

var latestTweets = require('latest-tweets')
 
latestTweets('movicambios', function (err, tweets) {
  console.log(tweets)
});