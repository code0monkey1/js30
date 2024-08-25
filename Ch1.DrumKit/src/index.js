window.addEventListener("keydown", playSound);
document.addEventListener("DOMContentLoaded", () => {
  console.log("This loads");
  document.querySelectorAll(".key").forEach((key) => {
    console.log(key.dataset);

    key.addEventListener("keypress", (event) => {
      if (key.dataset.key === "a") playSound(event);
      if (key.dataset.key === "s") playSound(event);
    });
  });
});

function playSound(e) {
  console.log(e.key);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  if (!audio) return;

  key.classList.add("playing");

  setTimeout(function () {
    key.classList.remove("playing");
    // Remove glow class after a delay
  }, 500); //

  audio.currentTime = 0;
  audio.play();
}
