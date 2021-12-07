console.log('hello');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("nav").css({'top': '0', 'transition-property': 'top', 'transition-duration': '0.5s'});
    // $('.local-nav > p').html('<p> <span><</span> Projects</p>');

  } else {
    $("nav").css({'top': '-17vh', 'transition-property': 'top', 'transition-duration': '0.5s'});
    // $('.local-nav > p').html('<p> <span><</span></p>');
  }
  prevScrollpos = currentScrollPos;
}


// QRT ----------------------------------------------------------------------------

var qrt1 = `<div class="qrt"><div class="tweet"><img class="usericon" src="images/users/00.png" alt=""><div class="content"><p><span class="username">Tio Jorge</span> <span class="usertag">@jorgao52</span> <span class="time">· 1 h</span></p><p class="text">Because of this, my grandpa won't have enough money for the rest of the month. How does the government wants him to survive?!!</p></div>

<div class="frame"><div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Governament freezes retirement of around 5000 seniors<span class="hashtag"> bit.ly/60TucxY</span> - via <span class="hashtag">@rpnews</span></p><img class="tweetimage" src="images/news/1.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">6</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var qrt2 = `<div class="qrt"><div class="tweet"><img class="usericon" src="images/users/a02.png" alt=""><div class="content"><p><span class="username">Inês Inês</span> <span class="usertag">@iines</span> <span class="time">· Sep 9</span></p><p class="text"> Finally the congress did something about this fucking bastard 💩</p></div>

<div class="frame"><div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Congress revokes Presidents's report promoting 'patriotic education'<span class="hashtag"> bit.ly/40AvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/4.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">20</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var qrt3 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a03.png" alt=""><div class="content"><p><span class="username">Amy Stake </span> <span class="usertag">@amy_stake</span> <span class="time">· Nov 1</span></p><p class="text">Stormed?!?! They are in the fucking entrance!! They are simply protesting against this inhumane country!!!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Mix of extremists who stormed the capital isn't retreating.<span class="hashtag"> bit.ly/31OpsxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/5.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">25</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">125</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">352</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt4 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a04.png" alt=""><div class="content"><p><span class="username">John Smith</span> <span class="usertag">@JSmith</span> <span class="time">· 5 h</span></p><p class="text">Supporters?! For fucks sake! They are a bunch of lunitacs and supremacists who want to basically wipe half of our population! The media is a joke 🤡</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Support for the government is statistically increasing. <span class="hashtag"> bit.ly/22sxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/6.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">4</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">17</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

// var tweet5 = `<div class="qrt">
// <div class="tweet"><img class="usericon" src="images/users/a05.png" alt=""><div class="content"><p><span class="username">Chris Bacon</span> <span class="usertag">@chrispy_bacon</span> <span class="time">· 3 h</span></p><p class="text">I'm addicted to you / Don't you know that you're toxic?</p><img class="" src="" alt="">
// </div>
//
// <div class="frame">
// <div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closes down opposite parties involved with rebels.<span class="hashtag"> bit.ly/64SdavX</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/8.jpg" alt="">
// </div></div></div>
//
// <div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">97</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">55</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">307</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
// </div></div></div></div>`;


// <div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">

var qrt5 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a06.png" alt=""><div class="content"><p><span class="username">Drew Peacock <img class="certified" src="images/certified2.png"></span> <span class="usertag">@itsdrew</span> <span class="time">· 2 h</span></p><p class="text"> Gosh! This is not protection, this is censorship!!!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">34</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">197</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt6 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a07.png" alt=""><div class="content"><p><span class="username">Monster Fucker 3000</span> <span class="usertag">@...</span> <span class="time">· 10 h</span></p><p class="text">Some people are scared about being censored, but you will never be censored if you don't say shit online</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div></div></div>`;

var qrt7 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a08.png" alt=""><div class="content"><p><span class="username">Seymour</span> <span class="usertag">@seymour_cox</span> <span class="time">· 17 h</span></p><p class="text">I'm glad some people won't be able to talk anymore</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt8 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a09.png" alt=""><div class="content"><p><span class="username">JD</span> <span class="usertag">@iwaskilledyesterday</span> <span class="time">· 2 h</span></p><p class="text">DUDE THIS IS FUCKING INSANE!!!! WE ARE EVERYDAY ONE STEP CLOSER TO DICTATORSHIP</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closes down opposite parties involved with rebels.<span class="hashtag"> bit.ly/64SdavX</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/8.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt9 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a10.png" alt=""><div class="content"><p><span class="username">Amanda</span> <span class="usertag">@_hugginkiss</span> <span class="time">· Nov 20</span></p><p class="text">Finally.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt10 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a11.png" alt=""><div class="content"><p><span class="username">Anita Hanjaab</span> <span class="usertag">@an_jaab</span> <span class="time">· Nov 24</span></p><p class="text">Man we are all going to die in the hands of this motharfucker</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">7</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt11 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a12.png" alt=""><div class="content"><p><span class="username">Rex Sean</span> <span class="usertag">@e_rex_sean</span> <span class="time">· Nov 25</span></p><p class="text">I bet he is trying to avoid prosecution 🤷</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt12 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a13.png" alt=""><div class="content"><p><span class="username">Wilma</span> <span class="usertag">@wilma_fingerdoo</span> <span class="time">· 10 h</span></p><p class="text">Aka the government literally allows the police to beat the crap out of people, we are all gonna die.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government passes a bill that allows law enforcement to use force against protesters.<span class="hashtag"> bit.ly/12RecaY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/10.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt13 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a14.png" alt=""><div class="content"><p><span class="username">Jack Dilf</span> <span class="usertag">@jack_dolphins</span> <span class="time">· 14 h</span></p><p class="text">There is no freedom anymore!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt14 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a15.png" alt=""><div class="content"><p><span class="username">P</span> <span class="usertag">@pedro_esperando_trem</span> <span class="time">· 1 h</span></p><p class="text">Finally we are going back to the good old art days! No more "artsy kids"</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt15 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a16.png" alt=""><div class="content"><p><span class="username">Jean</span> <span class="usertag">@jean_the_peridot</span> <span class="time">· 30 min</span></p><p class="text">In all my years as a performer I have never seen something like this.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt16 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a17.png" alt=""><div class="content"><p><span class="username">.</span> <span class="usertag">@whatdoesthefoxsay</span> <span class="time">· 2 min</span></p><p class="text">HIS CONSTITUTION THAT WILL KEEP HIS INTERESTS PROTECTED!!! AAAAAA THIS FUCKING COUNTRY</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about a new Constitution that will soon be come into force.<span class="hashtag"> bit.ly/45AhgxL</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/12.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt17 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a18.png" alt=""><div class="content"><p><span class="username">Not Obama</span> <span class="usertag">@notobama</span> <span class="time">· 10 h</span></p><p class="text">of course who wants to keep living in this mad house</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt18 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a19.png" alt=""><div class="content"><p><span class="username">Carteiro Paulo</span> <span class="usertag">@my_hero</span> <span class="time">· Dec 2</span></p><p class="text">I don't want to raise my kids in here, but i don't have a choice!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">10</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">65</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt19 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a20.png" alt=""><div class="content"><p><span class="username">Gracie Adams</span> <span class="usertag">@all23</span> <span class="time">· 5 h</span></p><p class="text">They won't be missed 😎 👍</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt20 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· 7 h</span></p><p class="text">We are not rebels we are freedom fighters!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">9</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt21 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a22.png" alt=""><div class="content"><p><span class="username">Michael P.</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@thePresbitt</span> <span class="time">· 3 h</span></p><p class="text">well... all the medias left are aligned to the government, which means we will never have the whole truth</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">6</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">11</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">34</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt22 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a23.png" alt=""><div class="content"><p><span class="username">Tanica</span> <span class="usertag">@sheriff</span> <span class="time">· 5 min</span></p><p class="text">serves them right! Terrorist scum!!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt23 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a24.png" alt=""><div class="content"><p><span class="username">Johanna</span> <span class="usertag">@nojoke</span> <span class="time">· 2 h</span></p><p class="text"> it is the fucking citzens that are in the FUCKING streets protesting for a better life in this FUCKING COUNTRY</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Riots all over the country, citzens don't feel safe anymore.<span class="hashtag"> bit.ly/26BruhxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/15.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt24 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a25.png" alt=""><div class="content"><p><span class="username">Juán Pepito</span> <span class="usertag">@jpepito</span> <span class="time">· Dec 4</span></p><p class="text">a bunch of lowlives if you ask me</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Riots all over the country, citzens don't feel safe anymore.<span class="hashtag"> bit.ly/26BruhxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/15.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt24 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a26.png" alt=""><div class="content"><p><span class="username">Zara Hudain</span> <span class="usertag">@hudaini</span> <span class="time">· Sep 23</span></p><p class="text">my family didn't receive shit and we are literally starving</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">The Administration's handling of pay outs for separated families put a tense relationship under further strain.<span class="hashtag"> bit.ly/10CminxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/17.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt25 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a27.png" alt=""><div class="content"><p><span class="username">Bloody Mary</span> <span class="usertag">@lambstake</span> <span class="time">· 9 h</span></p><p class="text">Proditio anniversary is like celebrating the devil's birthday</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Proditio protests turn violent on anniversary.<span class="hashtag"> bit.ly/18PacxJ</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/18.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">4</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">7</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt26 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a28.png" alt=""><div class="content"><p><span class="username">John Phillip</span> <span class="usertag">@fatherjohn</span> <span class="time">· 11 h</span></p><p class="text">Nothing is sacred anymore</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Proditio protests turn violent on anniversary.<span class="hashtag"> bit.ly/18PacxJ</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/18.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt27 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a29.png" alt=""><div class="content"><p><span class="username">Erika</span> <span class="usertag">@Erikka</span> <span class="time">· 1 min</span></p><p class="text">she did nothing wrong! She wasn't even at the protests! This is political persecution.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Leader of Rebels detained in Republic of Proditio.<span class="hashtag"> bit.ly/76RuczY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/20.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt28 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a30.png" alt=""><div class="content"><p><span class="username">Phoebe Mill</span> <span class="usertag">@chubbybun</span> <span class="time">· 5 h</span></p><p class="text">Well.. we don't even know if there will be elections, the president doesn't want to step down.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Election violence spiked worldwide in 2020 – will this year be better?<span class="hashtag"> bit.ly/52HecxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/23.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt29 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a31.png" alt=""><div class="content"><p><span class="username">Ramiro</span> <span class="usertag">@flattoast</span> <span class="time">· Dec 10</span></p><p class="text">WHICH CITIZENS???? THE ONES THAT ARE IN FAVOR OF THE GOVERNMENT??? MOST OF US ARE SCARED TO EVEN LEAVE THEIR HOUSES</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Citizens increasingly believe violence is justified if 'Other Side Wins'.<span class="hashtag"> bit.ly/3OvtxA</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/24.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">13</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt30 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a32.png" alt=""><div class="content"><p><span class="username">Sensei Luigi</span> <span class="usertag">@spiritualguy</span> <span class="time">· Dec 1</span></p><p class="text">we must keep peace at all costs!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Citizens increasingly believe violence is justified if 'Other Side Wins'.<span class="hashtag"> bit.ly/3OvtxA</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/24.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;




var qrt31 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a33.png" alt=""><div class="content"><p><span class="username">Gina</span> <span class="usertag">@Canesten</span> <span class="time">· 2 h</span></p><p class="text">it looks like the president already bought the Supreme court, amazing</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">'Immense disgust', says Court; raps lawyer for calling riots handiwork of political party.<span class="hashtag"> bit.ly/5OvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/26.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt32 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a34.png" alt=""><div class="content"><p><span class="username">Assad</span> <span class="usertag">@am101</span> <span class="time">· Nov 29</span></p><p class="text">well of course we are protesting, UN and Hauge Court already announced there was fraud involved</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/users/news.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Post-poll violence continues in West Proditio.<span class="hashtag"> bit.ly/14MnjxH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/27.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;








// NOTICIAS --------------------------------------------------------------------

var news1 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Federal Governament freezes retirement of around 5000 seniors<span class="hashtag"> bit.ly/60TucxY</span> - via <span class="hashtag">@rpnews</span></p><img class="tweetimage" src="images/news/1.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news4 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Congress revokes Presidents's report promoting 'patriotic education'<span class="hashtag"> bit.ly/40AvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/4.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news5 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Mix of extremists who stormed the capital isn't retreating.<span class="hashtag"> bit.ly/31OpsxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/5.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news6 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Support for the government is statistically increasing. <span class="hashtag"> bit.ly/22sxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/6.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news7 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news8 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Federal Government closes down opposite parties involved with rebels.<span class="hashtag"> bit.ly/64SdavX</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/8.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news9 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news10 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Federal Government passes a bill that allows law enforcement to use force against protesters.<span class="hashtag"> bit.ly/12RecaY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/10.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news11 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news12 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">President talks about a new Constitution that will soon be come into force.<span class="hashtag"> bit.ly/45AhgxL</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/12.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news13 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news14 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news15 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Riots all over the country, citzens don't feel safe anymore.<span class="hashtag"> bit.ly/26BruhxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/15.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news17 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">The Administration's handling of pay outs for separated families put a tense relationship under further strain.<span class="hashtag"> bit.ly/10CminxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/17.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news18 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Proditio protests turn violent on anniversary.<span class="hashtag"> bit.ly/18PacxJ</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/18.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news20 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Leader of Rebels detained in Republic of Proditio.<span class="hashtag"> bit.ly/76RuczY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/20.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news23 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Election violence spiked worldwide in 2020 – will this year be better?<span class="hashtag"> bit.ly/52HecxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/23.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

// NOTICIA EM FALTA 24

var news26 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">'Immense disgust', says Court; raps lawyer for calling riots handiwork of political party.<span class="hashtag"> bit.ly/5OvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/26.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var news27 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Post-poll violence continues in West Proditio.<span class="hashtag"> bit.ly/14MnjxH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/27.jpg" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;











// THREADS ------------------------------------------------------------------------
var thread1 = `<div class="thread" style="height: 470px"> <div class="line"	style="height: 450px;"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/users/a35.png" alt=""><div class="content"><p><span class="username">Rose Wilson</span> <span class="usertag">@sloppy_wet</span> <span class="time">· 5 h</span></p><p class="text">about the Internet Protection law, what our government says it is to protect its citizens and their data and rights, BUT this censorship +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">10</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a35.png" alt=""><div class="content"><p><span class="username">Rose Wilson</span> <span class="usertag">@sloppy_wet</span> <span class="time">· 5 h</span></p><p class="text">this law is about spying on the people and what they do online and if they SEEM to be against the federal government they will censor their online life +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">8</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">43</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a35.png" alt=""><div class="content"><p><span class="username">Rose Wilson</span> <span class="usertag">@sloppy_wet</span> <span class="time">· 5 h</span></p><p class="text">i don't feel safe anymore, because anything i say might be watched! +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">6</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">32</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a35.png" alt=""><div class="content"><p><span class="username">Rose Wilson</span> <span class="usertag">@sloppy_wet</span> <span class="time">· 5 h</span></p><p class="text">i plead the international community to spread the word.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">18</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread2 = `<div class="thread" style="height: 610px"> <div class="line"	style="height: 560px;"></div> <div class="resto" style="position:relative; top:-560px;"><div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 1 d</span></p><p class="text">To all my international friends! You must know what is happening at Republic of Proditio!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">15</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">45</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">137</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 1 d</span></p><p class="text">The government is closing down every party that does not align with the current president and his ideology, this is an absurd!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">7</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">13</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">130</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 1 d</span></p><p class="text">They call every person who does not think like the president a "rebel", which is not true!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">9</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">90</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 1 d</span></p><p class="text">We don't have freedom of speech anymore and we are being slowly shut down from the rest of the world!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">86</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 1 d</span></p><p class="text">Please we need to spread the word!! UN must help us somehow! <span class="hashtag">#SaveRepublicofProditio</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">85</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread3 = `<div class="thread" style="height: 430px"> <div class="line"	style="height: 500px; background: linear-gradient(180deg, lightgrey 70%, white 71%);"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· Dec 7</span></p><p class="text">Whoever approves the President thinking of closing down the Supreme Court, please unfollow me and go to fucking hell.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">10</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">14</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">26</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· Dec 7</span></p><p class="text">that MF is literally trying to contain all the power to himself</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">4</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">20</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· Dec 7</span></p><p class="text">I know the Supreme Court does shit sometimes, but we still need it to live in a democratic country!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">18</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· Dec 7</span></p><p class="text">Please stop aligning with that fucking authoritarian</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">18</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread4 = `<div class="thread" style="height: 295px"> <div class="line"	style="height: 450px; background: linear-gradient(180deg, lightgrey 55%, white 56%);"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/users/a37.png" alt=""><div class="content"><p><span class="username">Jessica Cruz</span> <span class="usertag">@tea_baggins</span> <span class="time">· 30 min</span></p><p class="text">The Federal Government just passed down a bill that allows the pigs to beat us up while we protest.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">33</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">230</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a37.png" alt=""><div class="content"><p><span class="username">Jessica Cruz</span> <span class="usertag">@tea_baggins</span> <span class="time">· 30 min</span></p><p class="text">Aka, that asshole of a President wants to kill us in any way possible.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">46</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">175</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a37.png" alt=""><div class="content"><p><span class="username">Jessica Cruz</span> <span class="usertag">@tea_baggins</span> <span class="time">· 29 min</span></p><p class="text">Our blood is in his hands.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">16</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">55</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread5 = `<div class="thread" style="height: 320px"> <div class="line"	style="height: 420px; background: linear-gradient(180deg, lightgrey 60%, white 61%);"></div> <div class="resto" style="position:relative; top:-420px;"><div class="tweet"><img class="usericon" src="images/users/a07.png" alt=""><div class="content"><p><span class="username">Monster Fucker 3000</span> <span class="usertag">@...</span> <span class="time">· 1 h</span></p><p class="text">People are leaving the country as if there was no tomorrow, a bunch of pussies if you ask me!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">53</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">82</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">124</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a07.png" alt=""><div class="content"><p><span class="username">Monster Fucker 3000</span> <span class="usertag">@...</span> <span class="time">· 1 h</span></p><p class="text">Just because our President doesn't do what they want, they leave the country!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">57</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">35</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a07.png" alt=""><div class="content"><p><span class="username">Monster Fucker 3000</span> <span class="usertag">@...</span> <span class="time">· 1 h</span></p><p class="text">Well good bye mother fuckers!! You won't be missed!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">15</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">19</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">86</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread6 = `<div class="thread" style="height: 415px"> <div class="line"	style="height: 500px; background: linear-gradient(180deg, lightgrey 65%, white 66%);"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/users/a13.png" alt=""><div class="content"><p><span class="username">Wilma</span> <span class="usertag">@wilma_fingerdoo</span> <span class="time">· 2 d</span></p><p class="text">On the anniversary of our beloved country, blood thirst rebels did a series of violent protests around the country! A complete absurd!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">12</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">23</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a13.png" alt=""><div class="content"><p><span class="username">Wilma</span> <span class="usertag">@wilma_fingerdoo</span> <span class="time">· 2 d</span></p><p class="text">Who do they think they are!! In this day many years ago our brave brothers and sisters died in battle so we could be free, but now these ungrateful draughters and sons are doing something shameful!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">8</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">11</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a13.png" alt=""><div class="content"><p><span class="username">Wilma</span> <span class="usertag">@wilma_fingerdoo</span> <span class="time">· 2 d</span></p><p class="text">Nothing is sacred anymore, the ones who died in battle were forgotten because of petty reasons!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">7</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread7 = `<div class="thread" style="height: 470px"> <div class="line"	style="height: 500px; background: linear-gradient(180deg, lightgrey 85%, white 86%);"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/users/a38.png" alt=""><div class="content"><p><span class="username">Ned Stark</span> <span class="usertag">@protect_ya_neck</span> <span class="time">· 5 d</span></p><p class="text">The Man who organized the demonstrations against the government was just arrested!! Seriously what the fuck! </p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">45</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">63</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">220</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a38.png" alt=""><div class="content"><p><span class="username">Ned Stark</span> <span class="usertag">@protect_ya_neck</span> <span class="time">· 5 d</span></p><p class="text">We were protesting peacefuly and he was arrested for no reason! The police said he was a terrorist for having a bag with him!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">19</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">20</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">132</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a38.png" alt=""><div class="content"><p><span class="username">Ned Stark</span> <span class="usertag">@protect_ya_neck</span> <span class="time">· 5 d</span></p><p class="text">A fucking back!! Which was full of masks and water so he could give it for free to other protesters, because remember guys we are still in the middle of a pandemic!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">7</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">12</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">56</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a38.png" alt=""><div class="content"><p><span class="username">Ned Stark</span> <span class="usertag">@protect_ya_neck</span> <span class="time">· 5 d</span></p><p class="text">WHAT THE ACTUAL FUCK! <span class="hashtag">#SaveRepublicofProditio</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">123</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread8 = `<div class="thread" style="height: 235px"> <div class="line"	style="height: 450px; background: linear-gradient(180deg, lightgrey 30%, white 31%);"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/users/a39.png" alt=""><div class="content"><p><span class="username">Grill Grilled</span> <span class="usertag">@hoosier_daddy</span> <span class="time">· 2 d</span></p><p class="text">What was the most mudane but thunderous epiphany you ever had?</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">35</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">32</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">50</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a39.png" alt=""><div class="content"><p><span class="username">Grill Grilled</span> <span class="usertag">@hoosier_daddy</span> <span class="time">· 2 d</span></p><p class="text">Mine: I thought Arson was a guy. The news would say "Arson is suspected." And I was like, 'Another one?!? They gotta catch this guy!'</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">22</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">34</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread9 = `<div class="thread" style="height: 800px"> <div class="line"	style="height: 900px; background: linear-gradient(180deg, lightgrey 85%, white 86%);"></div> <div class="resto" style="position:relative; top:-900px;"><div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">Guys i need to tell you what happened today! Read the thread!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">15</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">17</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">So I was going out with this cute guy, right?! And well it was already our third day and we were like "well lets go to third base"</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">11</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">And i was all excited and all, i was in his bed like a rosted chicken, waiting for him.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">10</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">And then he takes off his shirt, unbuckles his belt, takes of his pants, and i see for the first time that he has a prostetic leg!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">6</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">I was there like "wow, okay, no big deal!" but then! he takes it off as well and comes to me jumping in one leg, a bursted into laugher</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">Oh man he got so so sad, i never apologized so much in my life. In the end we did the deed, and it was amazing. And he started teasing me saying i have a pig laugh lol</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">4</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· 5 d</span></p><p class="text">Tomorrow is our 4th date!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread10 = `<div class="thread" style="height: 390px"> <div class="line"	style="height: 870px; background: linear-gradient(180deg, lightgrey 35%, white 36%);"></div> <div class="resto" style="position:relative; top:-870px;"><div class="tweet"><img class="usericon" src="images/users/a41.png" alt=""><div class="content"><p><span class="username">Ted Kord</span> <span class="usertag">@shaquille_oatmeal</span> <span class="time">· 3 h</span></p><p class="text">i went to the protest today, and oh god, the police shot an innocent kid, he was probably around 16 years old.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">32</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">70</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">288</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a41.png" alt=""><div class="content"><p><span class="username">Ted Kord</span> <span class="usertag">@shaquille_oatmeal</span> <span class="time">· 3 h</span></p><p class="text">seriously how could they do that???? the kid was doing nothing wrong, he was just holding a sign that said "down with the authoritarianism" and the police just shot him! It was a rubber bullet, but it was right in his eye!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">25</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">54</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">201</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/users/a41.png" alt=""><div class="content"><p><span class="username">Ted Kord</span> <span class="usertag">@shaquille_oatmeal</span> <span class="time">· 3 h</span></p><p class="text">there was so much blood, i think he lost his eye, poor kid, so young!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">19</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">30</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">197</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

</div></div>`

// TWEETS SOZINHOS
var tweet1 = `<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· Dec 2</span></p><p class="text">Today i learned that whales are in fact mammals and not fish, dude what the fuck are you doing in the water???? Your skin must be wrinkled af</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">535</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2653</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet2 = `<div class="tweet"><img class="usericon" src="images/users/a42.png" alt=""><div class="content"><p><span class="username">Malcom Myself</span> <span class="usertag">@desperate4luv</span> <span class="time">· Dec 4</span></p><p class="text">me whenever i see the president on tv:</p><img class="tweetimage" src="images/memes/01.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">22</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">16</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">397</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet3 = `<div class="tweet"><img class="usericon" src="images/users/a43.png" alt=""><div class="content"><p><span class="username">Ron Weasley</span> <span class="usertag">@freeherpees</span> <span class="time">· Dec 2</span></p><p class="text">president supporters on their way to say good things about him 🤡</p><img class="tweetimage" src="images/memes/02.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">15</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1533</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5849</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet4 = `<div class="tweet"><img class="usericon" src="images/users/a44.png" alt=""><div class="content"><p><span class="username">Manson</span> <span class="usertag">@king_0f_dairy_queen</span> <span class="time">· Dec 2</span></p><p class="text">The President of Republic of Proditio be like:</p><img class="tweetimage" src="images/memes/03.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">75</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2530</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5655</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet5 = `<div class="tweet"><img class="usericon" src="images/users/a45.png" alt=""><div class="content"><p><span class="username">Taylor</span> <span class="usertag">@dildo_swaggins</span> <span class="time">· Nov 25</span></p><p class="text">mood</p><img class="tweetimage" src="images/memes/04.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">32</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">64</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">203</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet6 = `<div class="tweet"><img class="usericon" src="images/users/a47.png" alt=""><div class="content"><p><span class="username">Bill Nye</span> <span class="usertag">@the_russian_spy</span> <span class="time">· 21 h</span></p><p class="text">And people spend $1500 dollars to watch it live lol</p><img class="tweetimage" src="images/memes/05.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">29</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">63</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet7 = `<div class="tweet"><img class="usericon" src="images/users/a46.png" alt=""><div class="content"><p><span class="username">Shaggy Doo</span> <span class="usertag">@hugs_for_drugs</span> <span class="time">· Dec 2</span></p><p class="text">why i go to art school</p><img class="tweetimage" src="images/memes/06.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">25</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">72</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">631</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet8 = `<div class="tweet"><img class="usericon" src="images/users/a48.png" alt=""><div class="content"><p><span class="username">Annoying Hipster</span> <span class="usertag">@smartzombie</span> <span class="time">· 15 h</span></p><p class="text">Dudeeeee!!!!!!!! They just closed down a bunch of newspapers and tv channels because they did not align with the government! WHAT THE FUCKKKKKKKKKKK 😱 😱 😱 😱</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">410</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3132</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet9 = `<div class="tweet"><img class="usericon" src="images/users/a49.png" alt=""><div class="content"><p><span class="username">Boss</span> <span class="usertag">@hugo_balls</span> <span class="time">· 12 h</span></p><p class="text">I just failed my exams 🤡</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">375</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2905</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet10 = `<div class="tweet"><img class="usericon" src="images/users/a50.png" alt=""><div class="content"><p><span class="username">Adam</span> <span class="usertag">@stinky_pinky</span> <span class="time">· Dec 1</span></p><p class="text">Republic of Prolitio, I'm devastated</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">246</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">975</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet11 = `<div class="tweet"><img class="usericon" src="images/users/a51.png" alt=""><div class="content"><p><span class="username">Vinnie</span> <span class="usertag">@fast_and_the_curious</span> <span class="time">· 12 h</span></p><p class="text">Please stop sending me cupons 😭😭</p><img class="tweetimage" src="images/memes/07.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">36</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">117</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">457</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet12 = `<div class="tweet"><img class="usericon" src="images/users/a52.png" alt=""><div class="content"><p><span class="username">Stephanie</span> <span class="usertag">@average_student</span> <span class="time">· 2 h</span></p><p class="text">People against the government</p><img class="tweetimage" src="images/memes/08.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">7</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">175</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1125</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet13 = `<div class="tweet"><img class="usericon" src="images/users/a53.png" alt=""><div class="content"><p><span class="username">danny boy</span> <span class="usertag">@shutupm8</span> <span class="time">· 22 h</span></p><p class="text">Bi Energy 🌈</p><img class="tweetimage" src="images/memes/09.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">805</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">4402</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet14 = `<div class="tweet"><img class="usericon" src="images/users/a54.png" alt=""><div class="content"><p><span class="username">Crystal</span> <span class="usertag">@nottoday</span> <span class="time">· 12 h</span></p><p class="text">me red dead redemption 2</p><img class="tweetimage" src="images/memes/10.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">24</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">742</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">4872</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet15 = `<div class="tweet"><img class="usericon" src="images/users/a18.png" alt=""><div class="content"><p><span class="username">Not Obama</span> <span class="usertag">@notobama</span> <span class="time">· 12 h</span></p><p class="text">I just came out to my mom and this was her reaction 🤡</p><img class="tweetimage" src="images/memes/11.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">17</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">701</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5527</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet16 = `<div class="tweet"><img class="usericon" src="images/users/a19.png" alt=""><div class="content"><p><span class="username">Carteiro Paulo</span> <span class="usertag">@my_hero</span> <span class="time">· Dec 1</span></p><p class="text">Everyday that i wake up and see i still live in Republic of Prolitio</p><img class="tweetimage" src="images/memes/12.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">65</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2306</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5408</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet17 = `<div class="tweet"><img class="usericon" src="images/users/a23.png" alt=""><div class="content"><p><span class="username">Tanica</span> <span class="usertag">@sheriff</span> <span class="time">· Dec 9</span></p><p class="text">The president everytime someone disagrees with him</p><img class="tweetimage" src="images/memes/13.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">8</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">759</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5234</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet18 = `<div class="tweet"><img class="usericon" src="images/users/a24.png" alt=""><div class="content"><p><span class="username">Johanna</span> <span class="usertag">@nojoke</span> <span class="time">· 13 h</span></p><p class="text">My best friend just said the president is right, and i'm literally like this:</p><img class="tweetimage" src="images/memes/14.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">6</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">164</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1237</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet19 = `<div class="tweet"><img class="usericon" src="images/users/a31.png" alt=""><div class="content"><p><span class="username">Ramiro</span> <span class="usertag">@flattoast</span> <span class="time">· 12 h</span></p><p class="text">men with huge boobies 🥵</p><img class="tweetimage" src="images/memes/15.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">34</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">911</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2257</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet20 = `<div class="tweet"><img class="usericon" src="images/users/a31.png" alt=""><div class="content"><p><span class="username">Ramiro</span> <span class="usertag">@flattoast</span> <span class="time">· 9 h</span></p><p class="text">To be honest, i do think the world is flat, because just my ass is a perfect sphere</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">62</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">664</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet21 = `<div class="tweet"><img class="usericon" src="images/users/a32.png" alt=""><div class="content"><p><span class="username">Sensei Luigi</span> <span class="usertag">@spiritualguy</span> <span class="time">· 22 h</span></p><p class="text">I AM SO HUNGRYYYYY SOMEBODY SEND ME AN UBER EATS PLEASEEEE</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">8</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">590</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5913</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet22 = `<div class="tweet"><img class="usericon" src="images/users/a32.png" alt=""><div class="content"><p><span class="username">Sensei Luigi</span> <span class="usertag">@spiritualguy</span> <span class="time">· 20 h</span></p><p class="text">My dudes, she said yes 😭💖</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">183</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1705</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet23 = `<div class="tweet"><img class="usericon" src="images/users/a33.png" alt=""><div class="content"><p><span class="username">Gina</span> <span class="usertag">@Canesten</span> <span class="time">· 12 h</span></p><p class="text">I will fucking kill my teacher, i can't deal with boomers teaching anymore</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">75</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">465</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet24 = `<div class="tweet"><img class="usericon" src="images/users/a34.png" alt=""><div class="content"><p><span class="username">Assad</span> <span class="usertag">@am101</span> <span class="time">· 15 h</span></p><p class="text">Dudes!!! Stone Ocean 01/11!!!!!!!!!!!!! AAAAAAAAAAAAAAAAAAAA</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">414</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2035</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet25 = `<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 12 h</span></p><p class="text">this fucking government is driving me insane, i will send them my medical bills, because seriously zero mental health to keep living here.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">112</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">834</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet26 = `<div class="tweet"><img class="usericon" src="images/users/a36.png" alt=""><div class="content"><p><span class="username">Jason Todd</span> <span class="usertag">@bad_karma</span> <span class="time">· 11 h</span></p><p class="text">( ͡° ͜ʖ ͡°)</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1225</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3170</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet27 = `<div class="tweet"><img class="usericon" src="images/users/a37.png" alt=""><div class="content"><p><span class="username">Jessica Cruz</span> <span class="usertag">@tea_baggins</span> <span class="time">· 15 h</span></p><p class="text">Where is the sugar daddy that will save me from students loan??</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">132</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">991</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet28 = `<div class="tweet"><img class="usericon" src="images/users/a37.png" alt=""><div class="content"><p><span class="username">Jessica Cruz</span> <span class="usertag">@tea_baggins</span> <span class="time">· 22 h</span></p><p class="text">today I saw a guy that was so handsome at uni, i have a new crush 😳</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">7</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">224</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">697</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet29 = `<div class="tweet"><img class="usericon" src="images/users/a39.png" alt=""><div class="content"><p><span class="username">Grill Grilled</span> <span class="usertag">@hoosier_daddy</span> <span class="time">· 20 h</span></p><p class="text">my teacher keeps making sex jokes in class, and i am there just like:</p><img class="tweetimage" src="images/memes/16.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">17</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">71</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">91</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet30 = `<div class="tweet"><img class="usericon" src="images/users/a39.png" alt=""><div class="content"><p><span class="username">Grill Grilled</span> <span class="usertag">@hoosier_daddy</span> <span class="time">· Dec 2</span></p><p class="text">Human rights in the trend topics right now, well perhaps the government will finally know its existance</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">33</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">261</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">700</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet31 = `<div class="tweet"><img class="usericon" src="images/users/a40.png" alt=""><div class="content"><p><span class="username">Ashley Kisser</span> <span class="usertag">@kiss-my-axe</span> <span class="time">· Dec 7</span></p><p class="text">I need anime recomendations that are not naruto or jojo</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">13</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">981</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">4953</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet32 = `<div class="tweet"><img class="usericon" src="images/users/a41.png" alt=""><div class="content"><p><span class="username">Ted Kord</span> <span class="usertag">@shaquille_oatmeal</span> <span class="time">· Dec 4</span></p><p class="text">Mood</p><img class="tweetimage" src="images/memes/17.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">135</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1200</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1597</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet33 = `<div class="tweet"><img class="usericon" src="images/users/a35.png" alt=""><div class="content"><p><span class="username">Rose Wilson</span> <span class="usertag">@sloppy_wet</span> <span class="time">· Dec 2</span></p><p class="text">everytime a teacher talks to me</p><img class="tweetimage" src="images/memes/18.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">12</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">516</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2305</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet34 = `<div class="tweet"><img class="usericon" src="images/users/a41.png" alt=""><div class="content"><p><span class="username">Ted Kord</span> <span class="usertag">@shaquille_oatmeal</span> <span class="time">· 14 h</span></p><p class="text">reading a new book that will help me at work!</p><img class="tweetimage" src="images/memes/19.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">128</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">3577</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">8207</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet35 = `<div class="tweet"><img class="usericon" src="images/users/a14.png" alt=""><div class="content"><p><span class="username">Jack Dilf</span> <span class="usertag">@jack_dolphins</span> <span class="time">· 2 h</span></p><p class="text">FIRST GAY KISS IN A TELENOVELA FROM REPUBLIC OF PRODITIO!!! HIT THE SLAY BUTTON ✨🌈</p><img class="tweetimage" src="images/memes/20.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet36 = `<div class="tweet"><img class="usericon" src="images/users/a16.png" alt=""><div class="content"><p><span class="username">Jean</span> <span class="usertag">@jean_the_peridot</span> <span class="time">· 6 h</span></p><p class="text">me tweeting about the new internet law</p><img class="tweetimage" src="images/memes/21.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">4</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">185</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1708</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet37 = `<div class="tweet"><img class="usericon" src="images/users/a17.png" alt=""><div class="content"><p><span class="username">.</span> <span class="usertag">@whatdoesthefoxsay</span> <span class="time">· Dec 3</span></p><p class="text"><span class="hashtag">#FreeBritney</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">102</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">737</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet38 = `<div class="tweet"><img class="usericon" src="images/users/a16.png" alt=""><div class="content"><p><span class="username">Jean</span> <span class="usertag">@jean_the_peridot</span> <span class="time">· 22 h</span></p><p class="text">who the fuck is britney</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">34</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">333</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet39 = `<div class="tweet"><img class="usericon" src="images/users/a17.png" alt=""><div class="content"><p><span class="username">.</span> <span class="usertag">@whatdoesthefoxsay</span> <span class="time">· 11 h</span></p><p class="text">what if everybody in the world took a dump a the same time??</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">37</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">55</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">322</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet40 = `<div class="tweet"><img class="usericon" src="images/users/a26.png" alt=""><div class="content"><p><span class="username">Zara Hudain</span> <span class="usertag">@hudaini</span> <span class="time">· Dec 8</span></p><p class="text">kids listen to me, don't go to university, even less if you want to study art, you are just gonna waste your time, money and sanity</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">10</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">46</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">236</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet41 = `<div class="tweet"><img class="usericon" src="images/users/a32.png" alt=""><div class="content"><p><span class="username">Sensei Luigi</span> <span class="usertag">@spiritualguy</span> <span class="time">· Dec 5</span></p><p class="text">bros!! I will be at Comic Con RP!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">10</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">108</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">289</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet42 = `<div class="tweet"><img class="usericon" src="images/users/a55.png" alt=""><div class="content"><p><span class="username">just some dude</span> <span class="usertag">@rvltionary_asshole</span> <span class="time">· 23 h</span></p><p class="text">so no one thinks it’s weird that suddenly there’s a bunch of “rebels”? almost like….. they want us to turn against each other 🤨</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">11</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">78</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">960</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet43 = `<div class="tweet"><img class="usericon" src="images/users/a56.png" alt=""><div class="content"><p><span class="username">roomba with a knife</span> <span class="usertag">@jlee24</span> <span class="time">· 12 h</span></p><p class="text">yeah thanks a lot for getting rid of the “”rebels”” now my life is sooo much better</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">0</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet44 = `<div class="tweet"><img class="usericon" src="images/users/a57.png" alt=""><div class="content"><p><span class="username">The Underground Source</span> <span class="usertag">@ugsource</span> <span class="time">· 1 h</span></p><p class="text">Closing down the Supreme Court was the last straw. This is no longer a democratic country.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">26</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">117</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">355</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet45 = `<div class="tweet"><img class="usericon" src="images/users/a58.png" alt=""><div class="content"><p><span class="username">em ✨ (she/her)</span> <span class="usertag">@emisonline</span> <span class="time">· 5 h</span></p><p class="text">wtf the art show i was gonna see next week at the RPAC just got cancelled ??</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">0</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet46 = `<div class="tweet"><img class="usericon" src="images/users/a59.png" alt=""><div class="content"><p><span class="username">danny boy</span> <span class="usertag">@shutupm8</span> <span class="time">· 18 h</span></p><p class="text">just got back from the protests… pretty sure my nose is broken lmao</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">0</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">0</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">4</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet47 = `<div class="tweet"><img class="usericon" src="images/users/a60.png" alt=""><div class="content"><p><span class="username">d</span> <span class="usertag">@deeew0</span> <span class="time">· 15 h</span></p><p class="text">this new internet law is protecting who exactly? if anything i feel LESS safe now lol</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">27</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">36</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet48 = `<div class="tweet"><img class="usericon" src="images/users/a61.png" alt=""><div class="content"><p><span class="username">2 tired 4 this</span> <span class="usertag">@bam_denm</span> <span class="time">· Dec 1</span></p><p class="text">if these assholes get full control of the media we’re doomed… please don’t let them brainwash you</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">61</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">121</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet49 = `<div class="tweet"><img class="usericon" src="images/users/a62.png" alt=""><div class="content"><p><span class="username">rayne</span> <span class="usertag">@r2deon</span> <span class="time">· 1 h</span></p><p class="text">seriously considering just getting the hell out of proditio</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">0</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet50 = `<div class="tweet"><img class="usericon" src="images/users/a63.png" alt=""><div class="content"><p><span class="username">Alex ♦️</span> <span class="usertag">@alealeho</span> <span class="time">· 30 min</span></p><p class="text">i know we’re all using humor as a coping mechanism or whatever but things are actually getting kinda scary y’all</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">7</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">13</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var tweet51 = `<div class="tweet"><img class="usericon" src="images/users/a64.png" alt=""><div class="content"><p><span class="username">Joe M</span> <span class="usertag">@joe_mallen79</span> <span class="time">· 3 h</span></p><p class="text">My kid got home from school today and said some really concerning things about class… What are they teaching our children??</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">14</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">8</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;




// <div class="tweet2" style="top:-20px;"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· Jan 16</span></p><p class="text"> this law is about spying on the people and what they do online and if they SEEM to be against the federal government they will censor their online life +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">543</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">12</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">34</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div></div>

// LIFETIME SUPPLY OF:

// TWEET COM HASHTAG
// var tweet4 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">John Smith</span> <span class="usertag">@JSmith</span> <span class="time">· 2 h</span></p><p class="text"> <span class=hashtag>#FreeBritney</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">78</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">87</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">348</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

// TWEET COM IMAGEM
// var tweet2 = `<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Inês Inês</span> <span class="usertag">@iines</span> <span class="time">· 2 h</span></p><p class="text">It's Britney, bitch</p><img class="tweetimage" src="images/britney.png" alt=""><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">876</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">97</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

// THREAD
// var tweet7 = `<div class="thread"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="tweet-link"></div><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">It's Britney, bitch</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div><div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· Jan 16</span></p><p class="text">It's Britney, bitch</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">543</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">12</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">34</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div></div>`

// QRT
// var tweet7 = `<div class="qrt"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">OH YEAH!</p><div class="frame"><div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBr...</span> <span class="time">· Jan 16</span></p><p class="text">It's Britney, bitch</p></div></div></div><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber" class="nRetweet">76</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber">6</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div></div>`



// const thread = [thread1, thread2, thread3, thread4, thread5, thread6, thread7, thread8, thread9, thread10 ];
//
// for (var i = 0; i < thread.length; i++) {
//   $('main').append(thread[i]);
// }


const tweet = [tweet1, tweet2, tweet3, tweet4, tweet5, tweet6, tweet7, tweet8, tweet9, tweet10];

// tweet11, tweet12, tweet13, tweet14, tweet15, tweet16, tweet17, tweet18, tweet19, tweet20, tweet21, tweet22, tweet23, tweet24, tweet25, tweet26, tweet27, tweet28, tweet29, tweet30, tweet31, tweet32, tweet33, tweet34, tweet35, tweet36, tweet37, tweet38, tweet39, tweet40, tweet41, tweet42, tweet43, tweet44, tweet45, tweet46, tweet47, tweet48, tweet49, tweet50, tweet51


function tweetAdd() {

  // FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // IR BUSCAR OS NÚMEROS
  let r = -1;

  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }


  // ADICIONAR NO LOAD
  for (var i = 0; i < 8; i++) {
      r += 1;
    $('main').append(tweet[ranNums[r]]);
    console.log('ole' + r);
  }

  r = 7;

  function tweetAdd2() {
    r += 1;
    if (r < 10) {
      $('main').append(tweet[ranNums[r]]);
      // console.log(r);
      var audio = new Audio('images/TwitterSoundFx.mp3');
      audio.play();
      console.log('tweet 0' + r);
    } else {};

  }

  // TIMER -- SET INTERVAL DOS TWEETS
  timer = Math.floor(Math.random() * 40000);
  // var timer = 25000;
  let run = setInterval(tweetAdd2, timer);

  // clearInterval(run);
  // // entre 30 segundos
  // timer = Math.floor(Math.random() * 30000);
  //
  // run = setInterval(tweetAdd2, timer);
  // console.log('timer tweet:' + timer);
}

window.addEventListener('load', tweetAdd);

const tweetDois = [tweet11, tweet12, tweet13, tweet14, tweet15, tweet16, tweet17, tweet18, tweet19, tweet20];

function tweetAdd2() {

  // FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // IR BUSCAR OS NÚMEROS
  let r = -1;

  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }

  function tweetAdd22() {
    r += 1;
    if (r < 10) {
      $('main').append(tweetDois[ranNums[r]]);
      // console.log(r);
      var audio = new Audio('images/TwitterSoundFx.mp3');
      audio.play();
      console.log('tweet 2' + r);
    } else {};
  }

  // TIMER -- SET INTERVAL DOS TWEETS
  timer = Math.floor(Math.random() * 40000);
  // var timer = 25000;
  setInterval(tweetAdd22, timer);

  // clearInterval(run);
  // // entre 30 segundos
  // timer = Math.floor(Math.random() * 30000);
  //
  // run = setInterval(tweetAdd2, timer);
  // console.log('timer tweet:' + timer);
}

window.addEventListener('load', tweetAdd2);

const tweetTres = [tweet21, tweet22, tweet23, tweet24, tweet25, tweet26, tweet27, tweet28, tweet29, tweet30];

function tweetAdd3() {

  // FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // IR BUSCAR OS NÚMEROS
  let r = -1;

  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }

  function tweetAdd33() {
    r += 1;
    if (r < 10) {
      $('main').append(tweetTres[ranNums[r]]);
      // console.log(r);
      var audio = new Audio('images/TwitterSoundFx.mp3');
      audio.play();
      console.log('tweet 3' + r);
    } else {};
  }

  // TIMER -- SET INTERVAL DOS TWEETS
  timer = Math.floor(Math.random() * 60000);
  // var timer = 25000;
  setInterval(tweetAdd33, timer);

  // clearInterval(run);
  // // entre 30 segundos
  // timer = Math.floor(Math.random() * 30000);
  //
  // run = setInterval(tweetAdd2, timer);
  // console.log('timer tweet:' + timer);
}

window.addEventListener('load', tweetAdd3);

const tweetQuatro = [tweet31, tweet32, tweet33, tweet34, tweet35, tweet36, tweet37, tweet38, tweet39, tweet40];

function tweetAdd4() {

  // FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // IR BUSCAR OS NÚMEROS
  let r = -1;

  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }

  function tweetAdd44() {
    r += 1;
    if (r < 10) {
      $('main').append(tweetQuatro[ranNums[r]]);
      // console.log(r);
      var audio = new Audio('images/TwitterSoundFx.mp3');
      audio.play();
      console.log('tweet 4' + r);
    } else {};
  }

  // TIMER -- SET INTERVAL DOS TWEETS
  timer = Math.floor(Math.random() * 25000);
  // var timer = 25000;
  setInterval(tweetAdd44, timer);

  // clearInterval(run);
  // // entre 30 segundos
  // timer = Math.floor(Math.random() * 30000);
  //
  // run = setInterval(tweetAdd2, timer);
  // console.log('timer tweet:' + timer);
}

window.addEventListener('load', tweetAdd4);


const tweetCinco = [tweet41, tweet42, tweet43, tweet44, tweet45, tweet46, tweet47, tweet48, tweet49, tweet50, tweet51];

function tweetAdd5() {

  // FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // IR BUSCAR OS NÚMEROS
  let r = -1;

  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }

  function tweetAdd55() {
    r += 1;
    if (r < 11) {
      $('main').append(tweetCinco[ranNums[r]]);
      // console.log(r);
      var audio = new Audio('images/TwitterSoundFx.mp3');
      audio.play();
      console.log('tweet 5' + r);
    } else {};
  }

  // TIMER -- SET INTERVAL DOS TWEETS
  timer = Math.floor(Math.random() * 25000);
  // var timer = 25000;
  setInterval(tweetAdd55, timer);

  // clearInterval(run);
  // // entre 30 segundos
  // timer = Math.floor(Math.random() * 30000);
  //
  // run = setInterval(tweetAdd2, timer);
  // console.log('timer tweet:' + timer);
}

window.addEventListener('load', tweetAdd5);

const qrt = [qrt1, qrt2, qrt3, qrt4, qrt5, qrt6, qrt7, qrt8, qrt9, qrt10, qrt11, qrt12, qrt13, qrt14, qrt15, qrt16, qrt17, qrt18, qrt19, qrt20, qrt21, qrt22, qrt23, qrt24, qrt25, qrt26, qrt27, qrt28, qrt29, qrt30, qrt31, qrt32];

      function qrtAdd() {

        // FAZER O SHUFFLE
        function shuffle(array) {
          let currentIndex = array.length,  randomIndex;
          // While there remain elements to shuffle...
          while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }
          return array;
        }

        // IR BUSCAR OS NÚMEROS
        let r = -1;
        var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

        ranNums = [],
        i = arr.length,
        j = 0;

          while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(arr[j]);
            arr.splice(j, 1);
        }


        // ADICIONAR NO LOAD
        for (var i = 0; i < 1; i++) {
          r = r + 1;
          $('main').append(qrt[ranNums[r]]);
          // console.log('ole');
        }

        r = 1;

        function qrtAdd2() {
          if (r < 32) {
            r += 1;
            $('main').append(qrt[ranNums[r]]);
            // console.log('qrt número' + r);
            var audio = new Audio('images/TwitterSoundFx.mp3');
            audio.play();
            console.log('qrt' + r);
          } else {}
        }

        // TIMER
        timer = Math.floor(Math.random() * 50000);
        // var timer = 50000;
        // let run = setInterval(qrtAdd2, timer);
        setInterval(qrtAdd2, timer);

          // clearInterval(run);
          // //entre 1 min
          // timer = Math.floor(Math.random() * 100000);
          //
          // run = setInterval(qrtAdd2, timer);
          // console.log('timer qrt:' + timer);

        }

        window.addEventListener('load', qrtAdd);



const thread = [thread1, thread2, thread3, thread4, thread5, thread6, thread7, thread8, thread9, thread10];

function threadAdd() {

// FAZER O SHUFFLE
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
    // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  }

// IR BUSCAR OS NÚMEROS
  let r = -1;
  var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  ranNums = [],
  i = arr.length,
  j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
  }


  // ADICIONAR NO LOAD
  for (var i = 0; i < 1; i++) {
    r = r + 1;
    $('main').append(thread[ranNums[r]]);
    // console.log('ole');
  }

  r = 1;

  function threadAdd2() {
    r += 1;
    $('main').append(thread[ranNums[r]]);
    // console.log('qrt número' + r);
    var audio = new Audio('images/TwitterSoundFx.mp3');
    audio.play();
    console.log('thread adicionado');
  }


  // TIMER
  timer = Math.floor(Math.random() * 200000);
  // var timer = 100000;
  // let run = setInterval(threadAdd2, timer);
  setInterval(threadAdd2, timer);

    // clearInterval(run);
    // // entre 2mins
    // timer = Math.floor(Math.random() * 200000);
    //
    // run = setInterval(threadAdd2, timer);
    // console.log('timer thread:' + timer);

}
  window.addEventListener('load', threadAdd);



// LIKES
$(document).on('click', '.likes > img', function() {
  var clicks = $(this).data('clicks');

  let like = $(this).parent().children('p').html();
  let nLikes = parseInt(like, 10);

  if (clicks) {
     $(this).attr("src","images/like.png");
     $(this).parent().children('p').css({'color': '#536471'});
     $(this).parent().children('p').html(nLikes - 1);
  } else {
     $(this).attr("src","images/like2.png");
     $(this).parent().children('p').css({'color': '#e02460'});

     if ($(this).parent().children('p').text() === "") {
       nLikes = 0;
     } else {
       $(this).parent().children('p').html(nLikes + 1);
     };
  }
  $(this).data("clicks", !clicks);
});

// RETWEETS
$(document).on('click', '.retweet > img', function() {
  var clicks = $(this).data('clicks');

  let retweets = $(this).parent().children('p').html();
  let nRetweet = parseInt(retweets, 10);

  if (clicks) {
     $(this).attr("src","images/retweet.png");
     $(this).parent().children('p').css({'color': '#536471'});
     $(this).parent().children('p').html(nRetweet - 1);
  } else {
     $(this).attr("src","images/retweet2.png");
     $(this).parent().children('p').css({'color': '#1cbf86'});

     if ($(this).parent().children('p').text() === "") {
       nRetweet = 0;
     } else {};

     $(this).parent().children('p').html(nRetweet + 1);
  }
  $(this).data("clicks", !clicks);
});
