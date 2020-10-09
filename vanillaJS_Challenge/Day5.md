#### 🗓 2020.10.09 Friday

## 바닐라 JS로 크롬 앱 만들기 (3.1강 ~ 3.2강)

### #3.1 Making a JS Clock part Two
- `setInterval(함수, 실행할시간간격)`

- 삼항연산자

⌨️ code HTML
```html
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="src/style.css">
</head>
<body>
    <h1></h1>
    <script src="src/index.js"></script>
</body>
</html>
```

⌨️ code JavaScript
```javascript
const clockTitle = document.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
```
<br/>

### #3.2 Saving the User Name part One
- `Local Storage`

<br/>

### #3.3 Saving the User Name part Two
⌨️ code HTML
```html
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="src/style.css">
</head>
<body>
    <h1>00:00</h1>
    <form class="js-form form">
        <input type="text" placeholder="what is your name">
    </form>
    <h4 class="js-greetings greetings"></h4>
    <script src="src/index.js"></script>
    <script src="src/greeting.js"></script>
</body>
</html>
```

⌨️ code JavaScript
```javascript
const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // she is not
        askForName();
    } else {
        // she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
```

- `event.preventDefault();`
  - event가 발생하면 root에서 일어나고 form에서 일어난다. event는 마지 bubble같은 것. 
  - 따라서 event가 계속 위로 올라가는 것을 막기위해 `preventDefault()`를 사용하는 것이다.

<br/>

#### 📝 [Quiz](https://codesandbox.io/s/day-five-blueprint-forked-jgtiy?file=/src/index.js)

- 참고
    - http://blog.naver.com/PostView.nhn?blogId=magnking&logNo=221164677877



