#### 🗓 2020.10.07 Wednesday

## 바닐라 JS로 크롬 앱 만들기 (2.1강 ~ 2.4강)

### #2.1 More Function Fun

⌨️ code
```javascript
function sayHello(name, age) {
  return (`Hello ${name} you are ${age} years old`);
}

const greet = sayHello('EJ', 10);

console.log(greet);
```

🖨 console 결과
```
Hello EJ you are 10 years old
```

<br/>

⌨️ code
```javascript
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
}

const a = 6;
const b = 2;

const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const multiply = calculator.multiply(a, b);
const divide = calculator.divide(a, b);
const power = calculator.power(a, b);

console.log(plus, minus, multiply, divide, power);
```

🖨 console 결과
```
8 4 12 3 36
```

<br/>

### #2.2 JS DOM Functions
- DOM
  - Document Object Module

⌨️ code HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Something</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 id="title">This works!</h1>
    <script src="index.js"></script>
  </body>
</html>
```

⌨️ code CSS
```css
body{ background-color:peru; }
h1{ color:white; }
#title{ }
```

⌨️ code JavaScript
```javascript
console.log(document);

const title = document.getElementById("title");
console.log(title);

title.innerHTML = "Hi! From JS"
```

- HTML을 DOM 객체로 바꿀 수 있다는 것을 실습.

<br/>

### #2.3 Modifying the DOM with JS
- `console.log()`
  - 요소를 HTML과 같은 트리구조로 출력한다.
  
- `console.dir()`
  - 요소를 JSON과 같은 트리구조로 출력한다.
  
<br/>

- `document.getElementByClassName()`
- `document.getElementByTagName()`
  - tag name : h1, h2, body, article...
- `document.querySelector()`
  - 노드의 첫번째 자식을 반환. 
- `document.querySelectorAll()`
  - 해당하는 모든 자식을 반환.

<br/>

### #2.4 Events and event handlers
⌨️ code JavaScript
```javascript
const title = document.getElementById("title");

function handleResize() {
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
```
- `handleResize`는 해당 이벤트가 실행될 때에만 함수가 작동하도록 한다.
- `handleResize()`라고 입력하면 렌더링 되자마자 해당 함수가 작동되게 된다.

<br/>


