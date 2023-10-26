const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
let timer;
let isRunning = false;

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = 'Pause';
        timer = setInterval(updateTime, 1000);
    } else {
        isRunning = false;
        startBtn.textContent = 'Resume';
        clearInterval(timer);
    }
}

function updateTime() {
    const timeParts = timeDisplay.textContent.split(':');
    let minutes = parseInt(timeParts[0]);
    let seconds = parseInt(timeParts[1]);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
    timeDisplay.textContent = '25:00';
}
