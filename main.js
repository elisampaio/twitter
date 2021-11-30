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

<div class="frame"><div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Governament freezes retirement of around 5000 seniors<span class="hashtag"> bit.ly/60TucxY</span> - via <span class="hashtag">@rpnews</span></p><img class="tweetimage" src="images/news/1.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">6</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var qrt2 = `<div class="qrt"><div class="tweet"><img class="usericon" src="images/users/a02.png" alt=""><div class="content"><p><span class="username">Inês Inês</span> <span class="usertag">@iines</span> <span class="time">· Sep 9</span></p><p class="text"> Finally the congress did something about this fucking bastard 💩</p></div>

<div class="frame"><div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Congress revokes Presidents's report promoting 'patriotic education'<span class="hashtag"> bit.ly/40AvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/4.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">20</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var qrt3 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a03.png" alt=""><div class="content"><p><span class="username">Amy Stake </span> <span class="usertag">@amy_stake</span> <span class="time">· Nov 1</span></p><p class="text">Stormed?!?! They are in the fucking entrance!! They are simply protesting against this inhumane country!!!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Mix of extremists who stormed the capital isn't retreating.<span class="hashtag"> bit.ly/31OpsxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/5.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">25</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">125</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">352</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt4 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a04.png" alt=""><div class="content"><p><span class="username">John Smith</span> <span class="usertag">@JSmith</span> <span class="time">· 5 h</span></p><p class="text">Supporters?! For fucks sake! They are a bunch of lunitacs and supremacists who want to basically wipe half of our population! The media is a joke 🤡</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Support for the government is statistically increasing. <span class="hashtag"> bit.ly/22sxB</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/6.jpg" alt="">
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
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">34</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">77</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">197</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt6 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a07.png" alt=""><div class="content"><p><span class="username">Monster Fucker 3000</span> <span class="usertag">@...</span> <span class="time">· 10 h</span></p><p class="text">Some people are scared about being censored, but you will never be censored if you don't say shit online</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div></div></div>`;

var qrt7 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a08.png" alt=""><div class="content"><p><span class="username">Seymour</span> <span class="usertag">@seymour_cox</span> <span class="time">· 17 h</span></p><p class="text">I'm glad some people won't be able to talk anymore</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Internet Protection law was approved by the president.<span class="hashtag"> bit.ly/77TybxU</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/7.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt8 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a09.png" alt=""><div class="content"><p><span class="username">JD</span> <span class="usertag">@iwaskilledyesterday</span> <span class="time">· 2 h</span></p><p class="text">DUDE THIS IS FUCKING INSANE!!!! WE ARE EVERYDAY ONE STEP CLOSER TO DICTATORSHIP</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closes down opposite parties involved with rebels.<span class="hashtag"> bit.ly/64SdavX</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/8.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt9 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a10.png" alt=""><div class="content"><p><span class="username">Amanda</span> <span class="usertag">@_hugginkiss</span> <span class="time">· Nov 20</span></p><p class="text">Finally.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt10 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a11.png" alt=""><div class="content"><p><span class="username">Anita Hanjaab</span> <span class="usertag">@an_jaab</span> <span class="time">· Nov 24</span></p><p class="text">Man we are all going to die in the hands of this motharfucker</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">7</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt11 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a12.png" alt=""><div class="content"><p><span class="username">Rex Sean</span> <span class="usertag">@e_rex_sean</span> <span class="time">· Nov 25</span></p><p class="text">I bet he is trying to avoid prosecution 🤷</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about closing the Supreme Court, claiming they are too corrupted.<span class="hashtag"> bit.ly/21YerxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/9.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt12 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a13.png" alt=""><div class="content"><p><span class="username">Wilma</span> <span class="usertag">@wilma_fingerdoo</span> <span class="time">· 10 h</span></p><p class="text">Aka the government literally allows the police to beat the crap out of people, we are all gonna die.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government passes a bill that allows law enforcement to use force against protesters.<span class="hashtag"> bit.ly/12RecaY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/10.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt13 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a14.png" alt=""><div class="content"><p><span class="username">Jack Dilf</span> <span class="usertag">@jack_dolphins</span> <span class="time">· 14 h</span></p><p class="text">There is no freedom anymore!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">2</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt14 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a15.png" alt=""><div class="content"><p><span class="username">P</span> <span class="usertag">@pedro_esperando_trem</span> <span class="time">· 1 h</span></p><p class="text">Finally we are going back to the good old art days! No more "artsy kids"</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt15 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a16.png" alt=""><div class="content"><p><span class="username">Jean</span> <span class="usertag">@jean_the_peridot</span> <span class="time">· 30 min</span></p><p class="text">In all my years as a performer I have never seen something like this.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology.<span class="hashtag"> bit.ly/61QacxK</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/11.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">3</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt16 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a17.png" alt=""><div class="content"><p><span class="username">.</span> <span class="usertag">@whatdoesthefoxsay</span> <span class="time">· 2 min</span></p><p class="text">HIS CONSTITUTION THAT WILL KEEP HIS INTERESTS PROTECTED!!! AAAAAA THIS FUCKING COUNTRY</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">President talks about a new Constitution that will soon be come into force.<span class="hashtag"> bit.ly/45AhgxL</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/12.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt17 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a18.png" alt=""><div class="content"><p><span class="username">Not Obama</span> <span class="usertag">@notobama</span> <span class="time">· 10 h</span></p><p class="text">of course who wants to keep living in this mad house</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span> <span class="time">· 2 h</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt18 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a19.png" alt=""><div class="content"><p><span class="username">Carteiro Paulo</span> <span class="usertag">@my_hero</span> <span class="time">· Dec 2</span></p><p class="text">I don't want to raise my kids in here, but i don't have a choice!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">10</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">65</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt19 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a20.png" alt=""><div class="content"><p><span class="username">Gracie Adams</span> <span class="usertag">@all23</span> <span class="time">· 5 h</span></p><p class="text">They won't be missed 😎 👍</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Number of people leaving the country is skyrocketing.<span class="hashtag"> bit.ly/38bitvH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/13.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt20 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a21.png" alt=""><div class="content"><p><span class="username">Eric</span> <span class="usertag">@peace_joint</span> <span class="time">· 7 h</span></p><p class="text">We are not rebels we are freedom fighters!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">3</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">9</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt21 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a22.png" alt=""><div class="content"><p><span class="username">Michael P.</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@thePresbitt</span> <span class="time">· 3 h</span></p><p class="text">well... all the medias left are aligned to the government, which means we will never have the whole truth</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">6</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">11</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">34</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt22 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a23.png" alt=""><div class="content"><p><span class="username">Tanica</span> <span class="usertag">@sheriff</span> <span class="time">· 5 min</span></p><p class="text">serves them right! Terrorist scum!!</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Federal Government closed down several newspapers and tv stations, claiming they were aligned with the rebels.<span class="hashtag"> bit.ly/40TucxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/14.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt23 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a24.png" alt=""><div class="content"><p><span class="username">Johanna</span> <span class="usertag">@nojoke</span> <span class="time">· 2 h</span></p><p class="text"> it is the fucking citzens that are in the FUCKING streets protesting for a better life in this FUCKING COUNTRY</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Riots all over the country, citzens don't feel safe anymore.<span class="hashtag"> bit.ly/26BruhxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/15.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">5</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt24 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a25.png" alt=""><div class="content"><p><span class="username">Juán Pepito</span> <span class="usertag">@jpepito</span> <span class="time">· Dec 4</span></p><p class="text">a bunch of lowlives if you ask me</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Riots all over the country, citzens don't feel safe anymore.<span class="hashtag"> bit.ly/26BruhxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/15.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">3</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt24 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a26.png" alt=""><div class="content"><p><span class="username">Zara Hudain</span> <span class="usertag">@hudaini</span> <span class="time">· Sep 23</span></p><p class="text">my family didn't receive shit and we are literally starving</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">The Administration's handling of pay outs for separated families put a tense relationship under further strain.<span class="hashtag"> bit.ly/10CminxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/17.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">5</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">10</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt25 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a27.png" alt=""><div class="content"><p><span class="username">Bloody Mary</span> <span class="usertag">@lambstake</span> <span class="time">· 9 h</span></p><p class="text">Proditio anniversary is like celebrating the devil's birthday</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Proditio protests turn violent on anniversary.<span class="hashtag"> bit.ly/18PacxJ</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/18.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">4</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">7</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt26 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a28.png" alt=""><div class="content"><p><span class="username">John Phillip</span> <span class="usertag">@fatherjohn</span> <span class="time">· 11 h</span></p><p class="text">Nothing is sacred anymore</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Proditio protests turn violent on anniversary.<span class="hashtag"> bit.ly/18PacxJ</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/18.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">1</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt27 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a29.png" alt=""><div class="content"><p><span class="username">Erika</span> <span class="usertag">@Erikka</span> <span class="time">· 1 min</span></p><p class="text">she did nothing wrong! She wasn't even at the protests! This is political persecution.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Leader of Rebels detained in Republic of Proditio.<span class="hashtag"> bit.ly/76RuczY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/20.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt28 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a30.png" alt=""><div class="content"><p><span class="username">Phoebe Mill</span> <span class="usertag">@chubbybun</span> <span class="time">· 5 h</span></p><p class="text">Well.. we don't even know if there will be elections, the president doesn't want to step down.</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Election violence spiked worldwide in 2020 – will this year be better?<span class="hashtag"> bit.ly/52HecxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/23.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">2</p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;



// EM FALTAAAAA 24
var qrt29 = `<div class="tweet"><img class="usericon" src="images/users/a31.png" alt=""><div class="content"><p><span class="username">Ramiro</span> <span class="usertag">@flattoast</span> <span class="time">· Dec 10</span></p><p class="text">WHICH CITIZENS???? THE ONES THAT ARE IN FAVOR OF THE GOVERNMENT??? MOST OF US ARE SCARED TO EVEN LEAVE THEIR HOUSES</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet">5</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">13</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;

var qrt30 = `<div class="tweet"><img class="usericon" src="images/users/a32.png" alt=""><div class="content"><p><span class="username">Sensei Luigi</span> <span class="usertag">@spiritualguy</span> <span class="time">· Dec 1</span></p><p class="text">we must keep peace at all costs!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber"></p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">1</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>`;






var qrt31 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a33.png" alt=""><div class="content"><p><span class="username">Gina</span> <span class="usertag">@Canesten</span> <span class="time">· 2 h</span></p><p class="text">it looks like the president already bought the Supreme court, amazing</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">'Immense disgust', says Court; raps lawyer for calling riots handiwork of political party.<span class="hashtag"> bit.ly/5OvcxY</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/26.jpg" alt="">
</div></div></div>

<div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">1</p></div><div class="retweet"><img class="r" class="icon" src="images/retweet.png" alt=""><p class="hitsnumber" class="nRetweet"></p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes"></p></div><div class="share"><img class="icon" src="images/share.png" alt="">
</div></div></div></div>`;

var qrt32 = `<div class="qrt">
<div class="tweet"><img class="usericon" src="images/users/a34.png" alt=""><div class="content"><p><span class="username">Assad</span> <span class="usertag">@am101</span> <span class="time">· Nov 29</span></p><p class="text">well of course we are protesting, UN and Hauge Court already announced there was fraud involved</p>
</div>

<div class="frame">
<div class="tweet2"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">RP News</span> <img class="certified" src="images/certified2.png" alt=""> <span class="usertag">@rpnews</span></p><p class="text">Post-poll violence continues in West Proditio.<span class="hashtag"> bit.ly/14MnjxH</span> - via <span class="hashtag">@rpnews</span></p></p><img class="tweetimage" src="images/news/27.jpg" alt="">
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
var thread1 = `<div class="thread" style="height: 490px"> <div class="line"	style="height: 450px;"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">about the Internet Protection law, what our government says it is to protect its citizens and their data and rights, BUT this censorship +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">this law is about spying on the people and what they do online and if they SEEM to be against the federal government they will censor their online life +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">i don't feel safe anymore, because anything i say might be watched! +</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">i plead the international community to spread the word.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread2 = `<div class="thread" style="height: 625px"> <div class="line"	style="height: 560px;"></div> <div class="resto" style="position:relative; top:-560px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">To all my international friends! You must know what is happening at Republic of Proditio!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">The government is closing down every party that does not align with the current president and his ideology, this is an absurd!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">They call every person who does not think like the president a "rebel", which is not true!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">We don't have freedom of speech anymore and we are being slowly shut down from the rest of the world!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Please we need to spread the word!! UN must help us somehow! <span class="hashtag">#SaveRepublicofProditio</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread3 = `<div class="thread" style="height: 450px"> <div class="line"	style="height: 500px; background: linear-gradient(180deg, lightgrey 80%, white 81%);"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Whoever approves the President thinking of closing down the Supreme Court, please unfollow me and go to fucking hell.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">that MF is literally trying to contain all the power to himself</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">I know the Supreme Court does shit sometimes, but we still need it to live in a democratic country!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Please stop aligning with that fucking authoritarian</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread4 = `<div class="thread" style="height: 335px"> <div class="line"	style="height: 450px; background: linear-gradient(180deg, lightgrey 60%, white 61%);"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">The Federal Government just passed down a bill that allows the pigs to beat us up while we protest.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Aka, that asshole of a President wants to kill us in any way possible.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Our blood is in his hands.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread5 = `<div class="thread" style="height: 330px"> <div class="line"	style="height: 420px; background: linear-gradient(180deg, lightgrey 60%, white 61%);"></div> <div class="resto" style="position:relative; top:-420px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">People are leaving the country as if there was no tomorrow, a bunch of pussies if you ask me!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Just because our President doesn't do what they want, they leave the country!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Well good bye mother fuckers!! You won't be missed!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread6 = `<div class="thread" style="height: 450px"> <div class="line"	style="height: 500px; background: linear-gradient(180deg, lightgrey 70%, white 71%);"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">On the anniversary of our beloved country, blood thirst rebels did a series of violent protests around the country! A complete absurd!!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Who do they think they are!! In this day many years ago our brave brothers and sisters died in battle so we could be free, but now these ungrateful draughters and sons are doing something shameful!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Nothing is sacred anymore, the ones who died in battle were forgotten because of petty reasons!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread7 = `<div class="thread" style="height: 525px"> <div class="line"	style="height: 500px;"></div> <div class="resto" style="position:relative; top:-500px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">The Man who organized the demonstrations against the government was just arrested!! Seriously what the fuck! </p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">We were protesting peacefuly and he was arrested for no reason! The police said he was a terrorist for having a bag with him!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">A fucking back!! Which was full of masks and water so he could give it for free to other protesters, because remember guys we are still in the middle of a pandemic!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">WHAT THE ACTUAL FUCK! <span class="hashtag">#SaveRepublicofProditio</span></p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread8 = `<div class="thread" style="height: 270px"> <div class="line"	style="height: 450px; background: linear-gradient(180deg, lightgrey 30%, white 31%);"></div> <div class="resto" style="position:relative; top:-450px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">What was the most mudane but thunderous epiphany you ever had?</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Mine: I thought Arson was a guy. The news would say "Arson is suspected." And I was like, 'Another one?!? They gotta catch this guy!'</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread9 = `<div class="thread" style="height: 875px"> <div class="line"	style="height: 900px;"></div> <div class="resto" style="position:relative; top:-900px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Guys i need to tell you what happened today! Read the thread!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">So I was going out with this cute guy, right?! And well it was already our third day and we were like "well lets go to third base"</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">And i was all excited and all, i was in his bed like a rosted chicken, waiting for him.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">And then he takes off his shirt, unbuckles his belt, takes of his pants, and i see for the first time that he has a prostetic leg!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">I was there like "wow, okay, no big deal!" but then! he takes it off as well and comes to me jumping in one leg, a bursted into laugher</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Oh man he got so so sad, i never apologized so much in my life. In the end we did the deed, and it was amazing. And he started teasing me saying i have a pig laugh lol</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">Tomorrow is our 4th date!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>
</div></div>`

var thread10 = `<div class="thread" style="height: 450px"> <div class="line"	style="height: 870px; background: linear-gradient(180deg, lightgrey 40%, white 41%);"></div> <div class="resto" style="position:relative; top:-870px;"><div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">i went to the protest today, and oh god, the police shot an innocent kid, they were probably around 16 years old.</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">seriously how could they do that???? the kid was doing nothing wrong, he was just holding a sign that said "down with the authoritarianism" and the police just shot him! It was a rubber bullet, but it was right in his eye!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

<div class="tweet"><img class="usericon" src="images/usericon.png" alt=""><div class="content"><p><span class="username">Britney</span> <span class="usertag">@ItsBritneyBitch</span> <span class="time">· 5 d</span></p><p class="text">there was so much blood, i think he lost his eye, poor kid, he is so young!</p><div class="bottomicons"><div class="comments"><img class="icon" src="images/comment.png" alt=""><p class="hitsnumber">2</p></div><div class="retweet"><img class="icon" src="images/retweet.png" alt=""> <p class="hitsnumber" class="nRetweet">68</p></div><div class="likes"><img id="likes" class="icon" src="images/like.png" alt=""><p class="hitsnumber" class="nLikes">99</p></div><div class="share"><img class="icon" src="images/share.png" alt=""></div></div></div></div>

</div></div>`


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


// const tweet = [tweet1, tweet2, tweet3, tweet4, tweet5, tweet6, tweet7, tweet8, tweet9, tweet10, tweet11, tweet12, tweet13, tweet14, tweet15, tweet16, tweet17, tweet18, tweet19, tweet20, tweet21, tweet22, tweet23, tweet24, tweet25, tweet26, tweet27, tweet28, tweet29, tweet30, tweet31, tweet32, tweet33, tweet34, tweet35, tweet36, tweet37, tweet38, tweet39, tweet40, tweet41, tweet42, tweet43, tweet44, tweet45, tweet46, tweet47, tweet48, tweet49, tweet50, tweet51];
//
// function tweetAdd() {
//
//   // FAZER O SHUFFLE
//   function shuffle(arrTweets) {
//     let currentIndex = arrTweets.length,  randomIndex;
//     // While there remain elements to shuffle...
//     while (currentIndex != 0) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
//     return array;
//   }
//
//   // IR BUSCAR OS NÚMEROS
//   let r = -1;
//   var arrTweets = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
//   ranNums = [],
//   i = arr.length,
//   j = 0;
//
//   while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(arr[j]);
//     arr.splice(j, 1);
//
//     //PARA VER TUDO
//     for (var i = 0; i < tweet.length; i++) {
//       $('main').append(tweet[i]);
//     }
//   }


const news = [news1, news4, news5, news6, news7, news8, news9, news10, news11, news12, news13, news14, news15, news17, news18, news20, news23, news26, news27];
  function newsAdd() {

    // FAZER O SHUFFLE
    function shuffle(arrTweets) {
      let currentIndex = arrTweets.length,  randomIndex;
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
    var arrTweets = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    ranNums = [],
    i = arr.length,
    j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(arr[j]);
      arr.splice(j, 1);
    }
}
//PARA VER TUDO
for (var i = 0; i < news.length; i++) {
  $('main').append(news[i]);
}



const qrt = [qrt1, qrt2, qrt3, qrt4, qrt5, qrt6, qrt7, qrt8, qrt9, qrt10, qrt11, qrt12, qrt13, qrt14, qrt15, qrt16, qrt17, qrt18, qrt19, qrt20, qrt21, qrt22, qrt23, qrt24, qrt25, qrt26, qrt27, qrt28, qrt29, qrt30, qrt31, qrt32];
      function qrtAdd() {

        // FAZER O SHUFFLE
        function shuffle(arrTweets) {
          let currentIndex = arrTweets.length,  randomIndex;
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
        var arrTweets = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
        ranNums = [],
        i = arr.length,
        j = 0;

        while (i--) {
          j = Math.floor(Math.random() * (i+1));
          ranNums.push(arr[j]);
          arr.splice(j, 1);


        }
}
//PARA VER TUDO
for (var i = 0; i < qrt.length; i++) {
  $('main').append(qrt[i]);
}




const thread = [thread1, thread2, thread3, thread4, thread5, thread6, thread7, thread8, thread9, thread10];
              function threadAdd() {

                // FAZER O SHUFFLE
                function shuffle(arrTweets) {
                  let currentIndex = arrTweets.length,  randomIndex;
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
                var arrTweets = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                ranNums = [],
                i = arr.length,
                j = 0;

                while (i--) {
                  j = Math.floor(Math.random() * (i+1));
                  ranNums.push(arr[j]);
                  arr.splice(j, 1);


                }

}
//PARA VER TUDO
for (var i = 0; i < thread.length; i++) {
  $('main').append(thread[i]);
}



// LIKES
$(document).on('click', '.likes > img', function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     $(this).attr("src","images/like.png");
  } else {
     $(this).attr("src","images/like2.png");
  }
  $(this).data("clicks", !clicks);
});

// LIKES -- ALTERAR A COR
$(document).on('click', '.likes', function() {
  var clicks = $(this).data('clicks');

  let like = $(this).children('p').html();
  let nLikes = parseInt(like, 10);

  if (clicks) {
    $(this).children('p').css({'color': '#536471'});
    $(this).children('p').html(nLikes - 1);

  } else {
    $(this).children('p').css({'color': '#e02460'});

    if ($(this).text() === "") {
      nLikes = 0;
    } else {};

    $(this).children('p').html(nLikes + 1);
  }
  $(this).data("clicks", !clicks);
});

let like = $('.nLikes').html();
let nLikes = parseInt(like, 10);

// RETWEETS
$(document).on('click', '.retweet > img', function() {
  var clicks = $(this).data('clicks');

  if (clicks) {
     $(this).attr("src","images/retweet.png");
  } else {
     $(this).attr("src","images/retweet2.png");
  }
  $(this).data("clicks", !clicks);
});

// RETWEETS -- ALTERAR A COR
$(document).on('click', '.retweet', function() {
  var clicks = $(this).data('clicks');

  let retweets = $(this).children('p').html();
  let nRetweet = parseInt(retweets, 10);

  if (clicks) {
    $(this).children('p').css({'color': '#536471'});


    // if ($(this).text().equals("0")) {
    //   nRetweet.text("");
    // } else {};
    //
    $(this).children('p').html(nRetweet - 1);


  } else {
    $(this).children('p').css({'color': '#00b06a'});

    if ($(this).text() === "") {
      nRetweet = 0;
    } else {};

$(this).children('p').html(nRetweet + 1);

  $(this).data("clicks", !clicks);
}
});


// TIMER -- SET INTERVAL DOS TWEETS
// var timer = 3000;
// let run = setInterval(tweetAdd, timer);






  // r += 1;
  // $('main').append(tweet[ranNums[r]]);
  // console.log(r);
  // var audio = new Audio('images/TwitterSoundFx.mp3');
  // audio.play();
  //
  // clearInterval(run);
  // timer = Math.floor(Math.random() * 20000);
  //
  // run = setInterval(tweetAdd, timer);
  // console.log(timer);

  // window.addEventListener('load', newsAdd);
  //   window.addEventListener('load', qrtAdd);
  //     window.addEventListener('load', threadAdd);
