var player;
$(document).ready( function() {
  console.log( "ready!" );
  loadPlayer();
});

function getArtistId() {
  var api = "AIzaSyClgexEq4TgaGAH3dCJq3BiyBjHCccxL5Y";
  var urlYT ="https://www.googleapis.com/youtube/v3/search?part=id&maxResults=5&q=pink+floyd+shine&key="+api;

  console.log(urlYT);
  var dataT =  "json/application";
  return $.ajax({
        type: "get",
        url: urlYT,
        data: "json/application"
      });
}

function loadPlayer() {
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = function() {
        console.log("Loading player.....")
      onYouTubePlayer();
    };

  } else {

    onYouTubePlayer();

  }
}



function onYouTubePlayer() {
  var id = getArtistId().then(function(data){
    console.log(data);
    player = new YT.Player('player', {
      height: '220',
      width: '450',
      playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 , autoplay:1 },
      events: {
        'onStateChange': onPlayerStateChange,
        'onError': catchError,
        'cueVideoById':data.items[0].id.videoId
      }
    });
  });
}

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    } else if (event.data == YT.PlayerState.ENDED) {
      location.reload();
    }
  }

  function onPlayerReady(event) {
  }
  function catchError(event)
  {
    if(event.data == 100) console.log("De video bestaat niet meer");
  }

  function stopVideo() {
    player.pauseVideo();
  }
  function playVideo(){
    player.playVideo();
  }
  function changeSong(str){
      var values = str.replace(/"/g, "");
    player.loadVideoById({'videoId': values});
  }
  function setVolume(num){
    player.setVolume(num);
  }
