전달된 **파라미터 객체가 가지는 속성의 값들로 이루어진 배열**을 리턴한다. 
```javascript
const 과일 = {
	a: '딸기',
   	b: '무화과',
	c: '거봉'
};

console.log(Object.values(과일)); 
// ===> ['딸기', '무화과', '거봉']
```

<br/>

**숫자를 속성으로 사용**하는 객체일 경우, 숫자의 **크기 순으로 정렬**되어 반환된다.
```javascript
const obj = {
	100: 'a',
	2: 'b',
	50: 'c'
}

console.log(Object.values(obj));
// ===> ['b', 'c', 'a']
```

<br/>

**객체가 아닌 경우**에는 **강제로 객체로 변환**되어 적용된다.
```javascript
console.log(Object.values('hello'));
// ===> ['h', 'e', 'l', 'l', 'o']
```




***
- [MDN - Object.values()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
