import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const countDown = document.querySelector('.count-down');

function convertTime(untilXmas) {
    const seconds = parseInt((untilXmas / 1000) % 60);
    const minutes = parseInt((untilXmas / (1000 * 60)) % 60);
    const hours = parseInt((untilXmas / (1000 * 60 * 60)) % 24);
    const day = parseInt(untilXmas / 1000 / 60 / 60 / 24);

    countDown.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();

  const untilXmas = xmasDay.getTime() - date;
  convertTime(untilXmas);
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
