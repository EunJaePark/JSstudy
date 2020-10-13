#### 🗓 2020.10.12-13 Monday-Tuesday

## 바닐라 JS로 크롬 앱 만들기 (3.5강 ~ 3.7강)

### #3.5 Making a To Do List part Two
- `local storage`
  - 자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려 한다.
- `JSON` 
  - JavaScript Object Notation
  - 데이터를 전달할 때 자바스크립트가 해당 데이터를 다룰 수 있도록 `object >> string`, `string >> object`로 바꿔준다. 
      
  - `JSON.stringify()`
    - Object를 string으로 바꿔준다.
  - `JSON.parse()`
    - string을 object로 바꿔준다.
  
  

### #3.6 Making a To Do List part Three
- `forEach()`
  - 해당 함수를 적용할 배열의 아이템들을 모두 돌려서 확인한다.
- `filter()`
  - forEach()처럼 해당 배열의 모든 아이템들을 확인해 필터에 해당하는 함수만 return해준다.
- `parseInt()`
  - string을 number로 바꿔준다.



### #3.7 Image Background
- `Math.random()`
  - 임의의 숫자가 생성된다.
  - ex) `Math.random(3)`
    - 3 이하의 소수점을 지닌 랜덤한 숫자를 생성한다.
- `Math.floor()`
  - 소수점 버림
- `Math.ceiling()`
  - 소수점 올림



<br/>

#### 📝 [Quiz](https://github.com/EunJaePark/JSstudy/tree/main/vanillaJS_Challenge/Qiz/Day7%2C8)
- 내 코드 답안: https://codesandbox.io/s/empty-blueprint-forked-ijf36?file=/src/index.js
