#### 🗓 2020.10.10 Saturday

## 바닐라 JS로 크롬 앱 만들기 (3.3강 ~ 3.4강)

### # [3.3 Saving the User Name part Two](https://github.com/EunJaePark/JSstudy/blob/main/vanillaJS_Challenge/Day5.md)


### #3.4 Making a To Do List part One

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
    <form class="js-toDoForm">
        <input type="text" placeholder="Writea to do">
    </form>
    <ul class="js_toDoList">
    </ul>

    <script src="src/index.js"></script>
    <script src="src/greeting.js"></script>
    <script src="src/todo.js"></script>
</body>
</html>
```

⌨️ code JavaScript
```javascript
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
        
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

```

- to do list 추가 기능 생성.


<br/>

#### 📝 [Quiz](https://github.com/EunJaePark/JSstudy/tree/main/vanillaJS_Challenge/Quiz/Day6)
- 내 코드 답안: https://codesandbox.io/s/day-six-blueprint-forked-2zdu4?file=/src/index.js 
