// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const bgColor = ["#2d8cd5", "#914ead", "#d3a70e"];

function handleResize() {
  console.log(window.innerWidth);
  const bodyWidth = window.innerWidth;
  if(bodyWidth < 400) {
      body.style.backgroundColor = bgColor[0];
  } else if(bodyWidth < 800) {
      body.style.backgroundColor = bgColor[1];
  } else {
      body.style.backgroundColor = bgColor[2];
  }
}

window.addEventListener("resize", handleResize);
