var songs = [
  {name: 'Favourite Food', src: 'music-files/favourite-food.mp3'},
  {name: 'Thrill of the Hunt', src: 'music-files/thrill-of-the-hunt.mp3'},
  {name: 'Transgender Dysphoria Blues', src: 'music-files/transgender-dysphoria-blues.mp3'},
  {name: "Where I'm From", src: 'music-files/where-im-from.mp3'}
];

var player = document.getElementById("player");
var headline = document.getElementById("headline");
var nowPlaying = null;

document.getElementById("icon0").addEventListener('click', function () {
  if (player.paused === false && nowPlaying === 'song0') { //If song0 is playing
      player.pause(); //then pause the song
      nowPlaying = null;
      headline.innerHTML = "Select a Song";
      icon0.classList.remove('fa-stop');
      icon0.classList.add('fa-play');
    } else if (player.paused === false && nowPlaying != 'song0') { //If another song is playing
      player.pause(); //then pause the song
      player.src = songs[0].src;
      headline.innerHTML = 'Favourite Food';
      player.play(); //then play song0
      nowPlaying = 'song0';
      icon0.classList.remove('fa-play');
      icon0.classList.add('fa-stop');
      icon1.classList.remove('fa-stop');
      icon1.classList.add('fa-play');
      icon2.classList.remove('fa-stop');
      icon2.classList.add('fa-play');
      icon3.classList.remove('fa-stop');
      icon3.classList.add('fa-play');
    }
    else { //If no song is playing
      player.src = songs[0].src;
      headline.innerHTML = 'Favourite Food';
      player.play(); //then play song0
      nowPlaying = 'song0';
      icon0.classList.remove('fa-play');
      icon0.classList.add('fa-stop');
    }
});

document.getElementById("icon1").addEventListener('click', function () {
  if (player.paused === false && nowPlaying === 'song1') { //If song1 is playing
      player.pause(); //then pause the song
      nowPlaying = null;
      headline.innerHTML = "Select a Song";
      icon1.classList.remove('fa-stop');
      icon1.classList.add('fa-play');
    } else if (player.paused === false && nowPlaying != 'song1') { //If another song is playing
      player.pause(); //then pause the song
      player.src = songs[1].src;
      headline.innerHTML = 'Thrill of the Hunt';
      player.play(); //then play song1
      nowPlaying = 'song1';
      icon1.classList.remove('fa-play');
      icon1.classList.add('fa-stop');
      icon0.classList.remove('fa-stop');
      icon0.classList.add('fa-play');
      icon2.classList.remove('fa-stop');
      icon2.classList.add('fa-play');
      icon3.classList.remove('fa-stop');
      icon3.classList.add('fa-play');
    }
    else { //If no song is playing
      player.src = songs[1].src;
      headline.innerHTML = 'Thrill of the Hunt';
      player.play(); //then play song1
      nowPlaying = 'song1';
      icon1.classList.remove('fa-play');
      icon1.classList.add('fa-stop');
    }
});

document.getElementById("icon2").addEventListener('click', function () {
  if (player.paused === false && nowPlaying === 'song2') { //If a song is playing
      player.pause(); //then pause the song
      nowPlaying = null;
      headline.innerHTML = "Select a Song";
      icon2.classList.remove('fa-stop');
      icon2.classList.add('fa-play');
    } else if (player.paused === false && nowPlaying != 'song2') {
      player.pause(); //then pause the song
      player.src = songs[2].src;
      headline.innerHTML = 'Transgender Dysphoria Blues';
      player.play(); //then play song2
      nowPlaying = 'song2';
      icon2.classList.remove('fa-play');
      icon2.classList.add('fa-stop');
      icon0.classList.remove('fa-stop');
      icon0.classList.add('fa-play');
      icon1.classList.remove('fa-stop');
      icon1.classList.add('fa-play');
      icon3.classList.remove('fa-stop');
      icon3.classList.add('fa-play');
    }
    else { //If no song is playing
      player.src = songs[2].src;
      headline.innerHTML = 'Transgender Dysphoria Blues';
      player.play(); //then play song2
      nowPlaying = 'song2';
      icon2.classList.remove('fa-play');
      icon2.classList.add('fa-stop');
    }
});

document.getElementById("icon3").addEventListener('click', function () {
  if (player.paused === false && nowPlaying === 'song3') { //If a song is playing
      player.pause(); //then pause the song
      nowPlaying = null;
      headline.innerHTML = "Select a Song";
      icon3.classList.remove('fa-stop');
      icon3.classList.add('fa-play');
    } else if (player.paused === false && nowPlaying != 'song3') {
      player.pause(); //then pause the song
      player.src = songs[3].src;
      headline.innerHTML = "Where I'm From";
      player.play(); //then play song3
      nowPlaying = 'song3';
      icon3.classList.remove('fa-play');
      icon3.classList.add('fa-stop');
      icon0.classList.remove('fa-stop');
      icon0.classList.add('fa-play');
      icon1.classList.remove('fa-stop');
      icon1.classList.add('fa-play');
      icon2.classList.remove('fa-stop');
      icon2.classList.add('fa-play');
    }
    else { //If no song is playing
      player.src = songs[3].src;
      headline.innerHTML = "Where I'm From";
      player.play(); //then play song3
      nowPlaying = 'song3';
      icon3.classList.remove('fa-play');
      icon3.classList.add('fa-stop');
    }
});

// http://development.tdkehoe-js-music-player.divshot.io/
