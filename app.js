// alert('Hi!');

// http://development.tdkehoe-js-music-player.divshot.io/

//Create the audio HTML element after the click because the audio element isn't clickable
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '/Users/TDK/playground/music-player/music-files/favourite-food.mp3');

var audioElement2 = document.createElement('audio');
audioElement2.setAttribute('src', '/Users/TDK/playground/music-player/music-files/thrill-of-the-hunt.mp3');

var audioElement3 = document.createElement('audio');
audioElement3.setAttribute('src', '/Users/TDK/playground/music-player/music-files/favourite-food.mp3');

var audioElement4 = document.createElement('audio');
audioElement4.setAttribute('src', '/Users/TDK/playground/music-player/music-files/favourite-food.mp3');

var i = document.getElementById("icon1");
var i2 = document.getElementById("icon2");
var i3 = document.getElementById("icon3");
var i4 = document.getElementById("icon4");

document.getElementById("icon1").addEventListener('click', function () {
  if (audioElement.paused) {
      audioElement.play();
      i.classList.toggle('fa-play');
      i.classList.toggle('fa-stop');
    }
    else {
      audioElement.pause();
      i.classList.toggle('fa-play');
      i.classList.toggle('fa-stop');
    }
});

document.getElementById("icon2").addEventListener('click', function () {
  if (audioElement2.paused) {
      audioElement2.play();
      i2.classList.toggle('fa-play');
      i2.classList.toggle('fa-stop');
    }
    else {
      audioElement2.pause();
      i2.classList.toggle('fa-play');
      i2.classList.toggle('fa-stop');
    }
});

document.getElementById("icon3").addEventListener('click', function () {
  if (audioElement3.paused) {
      audioElement3.play();
      i3.classList.toggle('fa-play');
      i3.classList.toggle('fa-stop');
    }
    else {
      audioElement3.pause();
      i3.classList.toggle('fa-play');
      i3.classList.toggle('fa-stop');
    }
});

document.getElementById("icon4").addEventListener('click', function () {
  if (audioElement4.paused) {
      audioElement4.play();
      i4.classList.toggle('fa-play');
      i4.classList.toggle('fa-stop');
    }
    else {
      audioElement4.pause();
      i4.classList.toggle('fa-play');
      i4.classList.toggle('fa-stop');
    }
});
