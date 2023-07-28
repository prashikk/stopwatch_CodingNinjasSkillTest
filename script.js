// Variables
let interval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

// Elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

// Functions
function updateTime() {
  const currentTime = Date.now();
  const timeDifference = currentTime - startTime + elapsedTime;
  const minutes = Math.floor(timeDifference / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);
  const milliseconds = timeDifference % 1000;

  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
  millisecondsElement.textContent = String(milliseconds).padStart(3, '0');
}

function startStopTimer() {
  if (isRunning) {
    clearInterval(interval);
  } else {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 10);
  }
  isRunning = !isRunning;
  startStopButton.textContent = isRunning ? 'Stop' : 'Start';
}

function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  updateTime();
  isRunning = false;
  startStopButton.textContent = 'Start';
}

// Event Listeners
startStopButton.addEventListener('click', startStopTimer);
resetButton.addEventListener('click', resetTimer);

// Initial Setup
updateTime();


