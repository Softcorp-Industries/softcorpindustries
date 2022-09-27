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
  audio.src = "audio/OOH_LA_LA_Rod_Stewart.mp3";
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
  ctx.fillStyle = "black"; // Color of the Bars
  bars = 100;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(fbc_array[i] / 2);
    // fillRect( x, y, width, height)  //Explanation of Parameters Below
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}

function _(id) {
  return document.getElementById(id);
}


function audioApp() {
  let naudio = new Audio();
  let naudio_folder = "audio/";
  let naudio_ext = ".mp3";
  let naudio_index = 1;
  let is_playing = false;
  let playingTrack;
  let trackBox = _("trackBox");
  let tracks = {
    track1: ["Day by Day", "Day_By_Day_Doug_&_the_Slugs"],
    track2: ["Back to Paradise", "Back_To_Paradise_38_Special"],
    track3: ["OHH LA LA", "OOH_LA_LA_Rod_Stewart"],
    track4: ["We Didn't Start the Fire", "We_Didn't_Start_the_Fire_Billy_Joel"],
    track5: ["Don't Stop me Now", "Don't_Stop_Me_Now_Queen"],
  };
  for (let track in tracks) {
    let tb = document.createElement("div"); // Track Bar
    let pb = document.createElement("button"); // Play Button
    let tn = document.createElement("div"); // Track Name
    tb.className = "trackBar";
    pb.className = "playButton";
    tn.className = "trackName";
    tn.innerHTML = naudio_index + ". " + tracks[track][0];
    pb.id = tracks[track][1];
    pb.addEventListener("click", switchTrack);
    pb.innerHTML = "Play";
    tb.appendChild(pb);
    tb.appendChild(tn);
    trackBox.appendChild(tb);
    naudio_index++;
  }

  naudio.addEventListener("ended", function () {
    _(playingTrack).style.opacity = 0.4;
    playingTrack = "";
  });

  function switchTrack(e) {
    if (is_playing) {
      if (playingTrack != e.target.id) {
        is_playing = true;
        _(playingTrack).innerHTML = "Play";
        e.target.innerHTML = "Pause";
        naudio.src = naudio_folder + e.target.id + naudio_ext;
        naudio.play();
      } else {
        naudio.pause();
        is_playing = false;
        e.target.innerHTML = "Play";
      }
    } else {
      is_playing = true;
      e.target.innerHTML = "Pause";
      if (playingTrack != e.target.id) {
        naudio.src = naudio_folder + e.target.id + naudio_ext;
      }
      naudio.play();
    }
    playingTrack = e.target.id;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initAudioPlayer();
  audioApp();
});

//
