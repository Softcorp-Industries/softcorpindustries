var audio,
  playBtn,
  muteBtn,
  seekSlider,
  volumeSlider,
  seeking,
  seekTo,
  curTimeText,
  durTimeText,
  analyzerBox,
  analyzer,
  context,
  canvas,
  ctx,
  source,
  fbc_array,
  bars,
  bar_x,
  bar_width,
  bar_height;

function initAudioPlayer() {
  audio = new Audio();
  audio.src = "audio/Gordon_Lightfoot-Sundown.mp3";
  audio.loop = true;

  analyzerBox = document.getElementById("analyzerBox").appendChild(audio);
  context = new AudioContext(); // AudioContext object instance
  analyzer = context.createAnalyser(); // AnalyzerNode method
  canvas = document.getElementById("graphics");

  playBtn = document.getElementById("playPauseBtn2");
  muteBtn = document.getElementById("muteBtn2");
  seekSlider = document.getElementById("seekSlider2");
  volumeSlider = document.getElementById("volumeSlider2");
  curTimeText = document.getElementById("curTimeText2");
  durTimeText = document.getElementById("durTimeText2");
  ctx = canvas.getContext("2d");

  // RE-route audio playback into the processing graph of the AudioContext //

  source = context.createMediaElementSource(audio);
  source.connect(analyzer);
  analyzer.connect(context.destination);
  frameLooper();

  playBtn.addEventListener("click", playPause);
  muteBtn.addEventListener("click", mute);
  seekSlider.addEventListener("mousedown", function (e) {
    seeking = true;
  });
  seekSlider.addEventListener("mousemove", function (e) {
    seek(e);
  });
  seekSlider.addEventListener("mouseup", function (e) {
    seeking = false;
  });
  volumeSlider.addEventListener("mousemove", setVolume);
  audio.addEventListener("timeupdate", function () {
    seekTimeUpdate();
  });

  function playPause() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = "Pause";
    } else {
      audio.pause();
      playBtn.innerHTML = "Play";
    }
  }

  function mute() {
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  }

  function setVolume() {
    audio.volume = volumeSlider.value / 100;
  }

  function seek(e) {
    if (seeking) {
      seekSlider.value = e.clientX - seekSlider.offsetLeft;
      seekTo = audio.duration * (seekSlider.value / 100);
      audio.currentTime = seekTo;
    }
  }

  function seekTimeUpdate() {
    var nt = audio.currentTime * (100 / audio.duration);
    seekSlider.value = nt;
    var curmins = Math.floor(audio.currentTime / 60);
    var cursecs = Math.floor(audio.currentTime - curmins * 60);
    var durmins = Math.floor(audio.duration / 60);
    var dursecs = Math.floor(audio.duration - durmins * 60);

    if (cursecs < 10) {
      cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
      dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
      curmins = "0" + curmins;
    }
    if (durmins < 10) {
      durmins = "0" + durmins;
    }

    curTimeText.innerHTML = curmins + ":" + cursecs + " / ";
    durTimeText.innerHTML = durmins + ":" + dursecs;
  }
}



// frameLooper() animates any style of graphics you wish to move to audio frequency
// Looping at the default frame rate that the browser provides (approx. 60 fps)

function frameLooper() {
  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyzer.frequencyBinCount);
  analyzer.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the Canvas
  ctx.fillStyle = "white"; // Color of the Bars
  bars = 100;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(fbc_array[i] / 2);
    // fillRect( x, y, width, height)  //Explanation of Parameters Below
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initAudioPlayer();
});

