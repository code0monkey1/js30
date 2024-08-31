/* Get our HTML Elements */
const player = document.querySelector(".player");

const playButton = player.querySelector('button[title="Toggle Play"]');

const volumeSlider = player.querySelector('input[name="volume"]');

const playbackSlider = player.querySelector('input[name="playbackRate"]');

const video = player.querySelector("video");

const progress = player.querySelector(".progress__filled");

/* Define our functions */

// play button should start the video

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playButton.textContent = video.paused ? "►" : "❚ ❚";
}

// change video sound

function changeVolume() {
  video.volume = volumeSlider.value;

  if (video.volume === 0) {
    video.muted = true;
  } else {
    video.muted = false;
    video.volume = volumeSlider.value;
  }
}

function getToPositionInVideo() {
  // create a function to get the position of the slider and set the position of the video
  // get to the percentage position of the slider
  console.log(playbackSlider);
  video.currentTime = video.duration * playbackSlider.value;

  if (video.ended) {
    playButton.textContent = "►";
  }

  video.play();
}

/* Hook our functions the our html elements events */

playButton.addEventListener("click", togglePlay);

volumeSlider.addEventListener("change", changeVolume);

playbackSlider.addEventListener("change", getToPositionInVideo);

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
});
