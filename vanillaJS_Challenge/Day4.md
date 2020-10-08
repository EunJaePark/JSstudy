#### 🗓 2020.10.08 Thursday

## 바닐라 JS로 크롬 앱 만들기 (2.5강 ~ 2.7강)

### #2.5 If, else, and, or
- `&&` 
  - and
- `||`
  - or

<br/>

- `prompt()`
  - 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화상자를 띄워주는 함수.
  - `alert()`과 비슷.
  - 오래된 자바스크립트라 현재는 거의 사용하지 않음.
  

<br/>

### #2.6 DOM - If else - Function practice
⌨️ code JavaScript
```javascript
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
```

⌨️ code JavaScript
```javascript
function handleOffline() {
    console.log('wifi offline!!!');
}

function handleOnline() {
    console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
```
- `offline` 
  - wifi 연결이 끊겼을 경우 실행되는 이벤트.
- `online`
  - wifi 연결이 되었을 경우 실행되는 이벤트.

<br/>

### #2.7 DOM - If else - Function practice Two
- `className`
- `classList`
  - classList.add()
  - classList.remove()
  - classList.contains()

⌨️ code JavaScript
```javascript
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
```
<br/>

⌨️ code JavaScript
```javascript
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
```
- `toggle`
  - 해당 class가 있는지 체크해서 있으면 `add`, 아니면 `remove`를 해준다.
  
<br/>

- 위 2개의 코드는 작동시키면 같은 이벤트가 발생한다.

<br/>

#### 📝 [Quiz](https://github.com/EunJaePark/JSstudy/tree/main/vanillaJS_Challenge/Quiz/day4)

https://codesandbox.io/s/empty-blueprint-forked-sg8kx?file=/src/index.js




