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
  audioApp();
});

function _(id) {
  return document.getElementById(id);
}