`Set`객체는 자료형에 관계 없이 [원시 값](https://developer.mozilla.org/ko/docs/Glossary/Primitive)(string, number, bigint, boolean, undefined, symbol)과 객체 참조 모두 **유일한 값**을 **저장**할 수 있다.

```javascript
const set1 = new set([1, 2, 3, 4, 5]);

console.log(set1.has(1)); // true
consoel.log(set1.has(5)); // true
consoel.log(set1.has(8)); // false
```

<br/>

>
```javascript
new Set([iterable]);
```
- **iterable**     
반복 가능한 객체가 전달된 경우, 그 요소는 모두 새로운 `Set`에 추가된다.     
만약 매개변수(여기선 `iterable`)를 명시하지 않거나 `null`을 전달하면 새로운 `Set`은 비어있는 상태가 된다.     

`Set` 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있다.     
**하나의 `Set` 내 값은 한 번만 나타날 수 있다.** 즉, 어떤 값은 그 `Set` 콜렉션 내에서 유일하다.     

<br/>

***

따라서, 배열 속 중복 값을 제거하고 싶을 경우에 사용이 가능하다.        
(알고리즘 문제 [[프로그래머스 / level2] 위장](https://velog.io/@design0728/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level2-%EC%9C%84%EC%9E%A5)에 적용 가능하겠다!)
```javascript
const dupArr = [1, 2, 3, 1, 2];
const set = new Set(dupArr);  // 중복 값은 제거되었지만 배열이 아닌 상태이다.
const setNewArr = Array.from(set); // 배열로 변환.
```
***

### **✔️ Set 객체를 배열(Array)로 변환하는 3가지 방법**
**1. Array.from()**
```javascript
const set = new Set([1, 2, 3]);

const arr = Array.from(set);

```

**2. Spread Operator (전개 연산자)**
```javascript
const set = new Set([1, 2, 3]);

const arr = [...set];
```

**3. forEach**
```javascript
const set = new Set([1, 2, 3]);
const arr = [];

set.forEach(ele => {
	arr.push(ele);
})
```





***
- [MDN - Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [배열 중복 제거하는 3가지 방법](https://hianna.tistory.com/422)
- [Performance of Javascript Array Ops](https://blog.usejournal.com/performance-of-javascript-array-ops-2690aed47a50)
- [Set 객체를 배열(Array)로 변환하는 3가지 방법](https://hianna.tistory.com/421)
