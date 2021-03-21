# setTimeout과 setInerval을 이용한 호출 스케줄링

호출스케줄링 : 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것.

호출 스케줄링을 구현하는 방법에는 `setTimeout`과 `setInterval`을 이용하는 방법이 있다. 

## setTimeout
```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

### `func|code`
실행하고자 하는 코드로 **함수** 또는 **문자열** 형태로 넣어야 한다.

### `delay`
실행 전 대기시간으로, 단위는 millisecond(100밀리초 = 1초)이며 기본값은 0이다.

### `arg1`, `arg2` ....
함수에 전달할 인수들로, IE9 이하에서는 지원하지 않는다.

<br/>


```javascript
function sayHi() {
  alert('안녕하세요');
}

setTimout(sayHi, 1000);
```

```javascript
function sayHi(who, phrase) {
  alert( who + '님, ' + phrase );
}

setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.
```
<br/>

`setTimeout`의 첫 번째 인수가 문자열이면 자바스크립트는 이 문자열을 이용해 함수를 만든다.    
하지만 문자열을 직접 사용하기보다, 익명 화살표 함수를 사용하는 것이 좋다.

<br/>

```javascript
// bad
setTimeout("alert('hello~~!')", 1000);

// good
setTimeout(() => alert('hello~~~!'), 1000);
```

<br/>

### 함수를 실행하지 말자.
```javascript
// bad
setTimeout(sayHi(), 1000);
```
`setTimeout`은 함수의 참조 값을 받도록 정의되어 있다. 따라서, `sayHi()`를 인수로 전달하면 함수의 실행 결과가 전될되게 된다. 그런데 `sayHi()`에는 반환문이 없다. 그렇기 때문에 호출 결과는 `undefined`가 나올 것이다. 따라서 `setTimeout`은 스케줄링 할 대상을 찾지 못해 원하는대로 코드가 동작하지 않게 된다.

<br/>


## clearTimeout
`setTimeout`을 호출하면 **타이머 식별자(timer identifier)**가 반환된다. 스케줄링을 취소하고 싶다면 이 식별자를 사용하면 된다.

```javascript
let timerId = setTimeout(...);
clearTimeout(timerId);

// 위 코드에서는 timerId가 타이머 식별자.
```

<br/><br/>

## setInterval
```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```
<br/>

`setInerval`은 함수를 주기적으로 실행하게 만든다.     
함수 호출을 중단하려면 `clearInterval(timerId)`를 사용하면 된다.

<br/>

```javascript
let timerId = setInerval(() => alert('hello'), 2000);

setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 5000);

// 2초 간격으로 메시지를 보여주다, 5초 후에 정지.
```

### `alert` 창이 떠 있더라도 타이머는 멈추지 않는다.
Chrome, Firefox 등 대부분의 브라우저는 

<br/>










