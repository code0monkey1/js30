let currentTimer;
function timer(seconds) {
  clearInterval(currentTimer);
  const now = Date.now();
  const target = now + seconds * 1000;
  let diff = (target - now) / 1000;

  displayTimeLeft(diff);
  displayEndTime(target);
  currentTimer = setInterval(() => {
    diff--;
    if (diff < 0) {
      clearInterval(currentTimer);
      alert("Time Over");
      displayTimeLeft(0);
      return;
    }
    console.log("diff is", diff);
    document.title.display = diff;
    displayTimeLeft(diff);
  }, 1000);
}
const timeLeftText = document.querySelector(".display__time-left");

const targetTimeText = document.querySelector(".display__end-time");

function displayTimeLeft(seconds) {
  let secondsRemaining = seconds;

  const hours = Math.floor(secondsRemaining / 3600);

  secondsRemaining = secondsRemaining % 3600;

  const minutes = Math.floor(secondsRemaining / 60);

  secondsRemaining = secondsRemaining % 60;

  console.log({ hours, minutes, secondsRemaining });
  // the hours minute and seconds should be at least 2 digits long
  timeLeftText.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  targetTimeText.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

const timeControls = document.querySelector(".timer__controls");

timeControls.addEventListener("click", (e) => {
  // if the target is an input element, return

  if (!e.target.matches("button")) {
    return;
  }

  console.log("The value is", e.target.dataset.time);
  timer(e.target.dataset.time);
});

// select input with type text and name minutes

const customMinutes = document.querySelector('input[name="minutes"]');

console.log(customMinutes);
// need to get text inside input whenever a person enters text

customMinutes.addEventListener("input", function (e) {
  const time = e.target.value;
  if (isNaN(time)) {
    console.log("Not a number");
    alert("Please enter a number");
    // clear the input
    this.value = "";
    return;
  }
  console.log("The value is", time);
  timer(Number(time) * 60);
});
