import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const HOUR_MILLISECONDS = NINE_HOURS_MILLISECONDS / 9;
const DAY_MILLISECONDS = HOUR_MILLISECONDS * 24;
const MUNITE_MILLISECONDS = HOUR_MILLISECONDS / 60;
const SECOND_MILLISECONDS = MUNITE_MILLISECONDS / 60;

const waitTime = document.querySelector(".time-toXmas");
const curTimeText = waitTime.querySelector("h2.js-currentTime");
const waitTimeText = waitTime.querySelector("h2.js-waitingTime");

function getTime() {
  // Don't delete this.
  const date = new Date();
  // const xmasDay = new Date("2020-12-24:00:00:00+0900");
  /* 사파리에서는 상수로 나오지 않아 아래로 수정하였어요 */
  const xmasDay = new Date("2020-12-24T00:00:00+0900");
  const remainTime = xmasDay - date;
  const remaindays = Math.floor(remainTime / DAY_MILLISECONDS);
  const remainHours = Math.floor(
    (remainTime % DAY_MILLISECONDS) / HOUR_MILLISECONDS
  );
  const remainMunites = Math.floor(
    (remainTime % HOUR_MILLISECONDS) / MUNITE_MILLISECONDS
  );
  const remainSeconds = Math.floor(
    (remainTime % MUNITE_MILLISECONDS) / SECOND_MILLISECONDS
  );

  waitTimeText.innerText = `남은시간은 -> ${remaindays}일 ${remainHours}시간 ${remainMunites}분 ${remainSeconds}초`;
  getCurrentTime();
}

function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const munites = date.getMinutes();
  const seconds = date.getSeconds();
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  //curTimeText.innerText = `현재시간은 -> ${years}년 ${months}월 ${days}일 ${hours}:${munites}:${seconds}`;
  curTimeText.innerText = `현재시간은 -> ${years}년 ${months}월 ${days}일 ${
    hours < 10 ? `0${hours}` : hours
  }:${munites < 10 ? `${munites}` : munites}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
