document.addEventListener("keypress", playSound);

const keys = document.querySelectorAll(".key");
// best to use transition end event , to ensure the transition speed is consistent , better that creating manual way using setTimeout to remove class after transition

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  //get audio from
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  //animate key
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;

  key.classList.add("playing");

  // to rewind it to the start of the sound , so that multiple clicks could work
  audio.currentTime = 0;

  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
