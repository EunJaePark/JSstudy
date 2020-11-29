배열의 각 요소에 대해 주어진 **리듀서(reducer)함수를 실행**하고, **하나의 결과값을 반환**한다.

리듀서 함수는 네 개의 인자를 가진다
```
1. 누산기 (acc) (: accumulator)
2. 현재 값 (cur)
3. 현재 인덱스 (idx)
4. 원본 배열 (src)
```
리듀서 함수의 **반환 값**은 **누산기에 할당**되고, 누산기는 순회 중 유지되므로 결국 **최종 결과**는 **하나의 값**이 된다.
> **`누산기`**란?
컴퓨터의 중앙처리장치(CPU)는 중간 계산 결과가 저장되는 레지스터. 
연산 결과를 일시적으로 기억한다.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (acc, cur) => acc + cur;

console.log(array1.reduce(reducer));
// ===> 1 + 2 + 3 + 4
// ===> 결과값: 10

console.log(array1.reduce(reducer, 5));
// ===> 5 + 1 + 2 + 3 + 4
// ====> 결과값: 15
```

<br/>

```javascript
arr.reduce(callback[, initialValue])
````
- **callback**   
배열의 각 요소에 대해 실행할 함수.   
즉, 위에서 예시로 설명한 `reducer`함수가 되겠다.   
callback함수는 아래의 네 가지 인수를 받는다.   

  1️⃣ **누산기** (acc): **accumulator**   
      콜백의 반환값을 누적.   
      
  2️⃣ **현재 값** (cur): **currentValue**   
      처리할 현재 요소.   
      
  3️⃣ **현재 인덱스 **(idx): **currentIndex**   
      처리할 현재 요소의 인덱스.   
      `initialValue`를 제공한 경우 0, 아니면 1부터 시작합니다. (Optional)   
      
  4️⃣ **원본 배열** (src): **array**   
      `reduce()`를 호출한 배열. (Optional)   

- **initialValue**     
`callback`의 최초 호출에서 **첫 번째 인수에 제공하는 값**.     
**초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용**한다.      
빈 배열에서 초기값 없이 `reduce()`를 호풀하면 오류가 발생하다.     
위의 예시 `console.log(array1.reduce(reducer, 5));`에서 `5`이다.      



***
- [MDN - Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
