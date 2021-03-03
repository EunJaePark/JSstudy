# Web Component

자바스크립트 프레임워크들은 다양한 문제를 해결할 강력한 도구이지만, 무거운 덩치는 앱을 무겁게 만들고 리소스를 사용자에게 전가시키며 프레임워크 종속적인 코드를 생산하게 한다. 

이러한 문제들의 해결을 위해 프레임워크 대신 브라우저 기능을 사용하는 것이다. 브라우저 기능을 사용해 해결하게 되면 프레임워크를 가볍게 만들어도 되고, 더 작은 자바스크립트 코드를  사용하게 되어 표준 코드로 만든 성능 좋은 Awesome APP이 된다. 

> 프레임워크는 키우지 말고 그러한 기능을 표준으로 정하고 표준대로 코딩하자.

프레임워크를 줄이는 시도의 중심에 웹 컴포넌트가 있는 것이다. 웹 컴포넌트는 JavaScript, CSS, HTML들을 컴포넌트화하기 위해 필요한 4개의 표준을 묶어서 부르는 이름이다. 

웹 컴포넌트는 프레임워크를 대체하기 위한 것이 아니라 보완하기 위한 것임을 기억하자. 



## 왜 결국 컴포넌트일까?

### 캡슐화

컴포넌트는 메인 어플리케이션과 완전히 분리되어야 한다. 이로써 재사용성, 테스트 가용성, 신뢰성이 높아지게 된다. 컴포넌트가 내부적인 동작에 반응할 뿐, 어플리케이션의 상태에 관여하지 않기 때문이다.

따라서, 컴포넌트의 작성자와 사용자 모두 컴포넌트를 업그레이드 할 때 어플리케이션의 나머지 부분에 영향을 미칠 것인지 걱정하지 않아도 된다.

### 확장성

컴포넌트는 각각이 확장 가능해야 하며 웹에서는 DOM 객체가 그러하다. 즉, 코드 작성자가 바퀴를 다시 발명할 필요가 없이 이미 있는 기능을 다시 사용하기 쉬워야 한다는 것이다.

### 결합성

아주 복잡한 컴포넌트나 심지어는 하나의 어플리케이션을 컴포넌트의 조합으로 만들 수도 있다. **전역**로직의 감소는 좀 더 나은 아키텍처를 가능하게 하며, 버그가 발생할 가능성을 줄인다. 각각의 조각들이 좀 더 나은 방식으로 만들어지기 때문이다.

### 재사용성

위에 설명한 모든 내용들이 모두 쉽게 재사용하기 위한 것이며, 의존도를 낮추고 좀 더 간결하고 명확한 API를 위한 것이다.



### shadow DOM

Shadow DOM은 최종적으로 완전히 캡슐화된 sub-DOM 트리를 제공하며 외부 스타일에 영향을 받지 않는다. 다시 말해 컴포넌트 작성자로써 컴포넌트가 어떻게 보일지 완벽하게 조작할 수 있으며, 사용자가 컴포넌트에 영향을 주지 못하게 할 수 있다는 것이다.

Angular와 React 컴포넌트를 이용하면 Shadow DOM을 사용할 수 있다.



### 왜 웹 컴포넌트인가?

프레임워크가 위와 같은 장점들을 모두 제공한다면 굳이 왜 웹 컴포넌트가 필요한 것일까? 그 이유는 **상호운용성(Interoperability)** 때문이다. 

프레임워크 컴포넌트는 훌륭하지만 그 생태계 안에서만 훌륭할 뿐이다. Angular 컴포넌트 안에서 React를 쉽게 사용(동작)할 수 없으며 반대의 경우도 마찬가지이다.

반면에, 웹 컴포넌트는 웹 표준 이외에는 어떤 것도 관여하지 않았기 때문에 어떤 생태계에서도 동작한다. 

- 상호운용성(Interoperability) : 컴포넌트는 프레임워크를 넘어 다른 기술 스택의 프로젝트에서도 동작할 것이다.
- 수명(Lifespan) : 컴포넌트가 상호운용 가능하기 때문에 더 긴 수명을 갖게 되고, 새 기술에 맞춰 재작성해야할 필요가 줄어든다.
- 가용성(Portability) : 컴포넌트가 특정 라이브러리나 프레임워크에 크게 의존하지 않는다면 컴포넌트가 의존성 없이 어디에서도 동작하기 때문에 도입에 대한 장벽이 상당히 낮아진다.

컴포넌트에 대한 이런 장점들은 모두 웹 컴포넌트에도 적용된다.



***



## Custom Element

custom element는 web custom의 주요 표준 중 하나이다.

### tl;dr(too long; didn't read)

- ```<div></div>``` 대신 ```<current-time></current-time>```처럼 적절한 이름의 태그를 사용할 수 있다. 

- HTML Element와 JavaScript Class를 한 몸으로 만들어준다.

- 긴 [MutationObserver]()코드를 사용하지 않아도 된다.

  > `MutationObserver`는 DOM의 변화를 감지하는 Javascript 장치이다.
  >
  > - [MDN 참고](https://developer.mozilla.org/ko/docs/Web/API/MutationObserver)
  >
  > - [참고 블로그](https://uxgjs.tistory.com/170)

### 사용법

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="../src/CurrentTime.js"></script>
    </head>
    <body>
        <current-time>
            <!– fallback value –>
            6/11/2017, 11:55:49
        </current-time>
    </body>
</html>
```

```javascript
class CurrentTime extends HTMLElement {
    constructor() {
        // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
        super();
    }
    static get observedAttributes() {
        // 모니터링 할 속성 이름
        return ['locale'];
    }
    connectedCallback() {
        // DOM에 추가되었다. 렌더링 등의 처리를 하자.
        this.start();
    }
    disconnectedCallback() {
        // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
        this.stop();
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        // 속성이 추가/제거/변경되었다.
        this[attrName] = newVal;
    }
    adoptedCallback(oldDoc, newDoc) {
        // 다른 Document에서 옮겨져 왔음
        // 자주 쓸 일은 없을 것.
    }
    start() {
        // 필요에 따라 메서드를 추가할 수 있다.
        // 이 클래스 인스턴스는 HTMLElement이다.
        // 따라서 `document.querySelector('current-time').start()`로 호출할 수 있다.
        this.stop();
        this._timer = window.setInterval(() => {
            this.innerText = new Date().toLocaleString(this.locale);
        }, 1000);
    }
    stop() {
        // 이 메서드 역시 CurrentTime클래스의 필요에 의해 추가했다.
        if (this._timer) {
            window.clearInterval(this._timer);
            this._timer = null;
        }
    }
}
// <current-time> 태그가 CurrentTime 클래스를 사용하도록 한다.
customElements.define('current-time', CurrentTime);
```





Custom Elements는 웹 애플리케이션을 작성하는데 필요한 HTML의 빠진 조각들을 자연스러우면서도 직관적인 방법으로 제공해준다.





## Custom Element 구현

### 엘리먼트와 클래스 묶어주기

```javascript
window.customElements.define('current-time', class extends HTMLElement {});

<current-time></current-time>
```

위 코드는 Custom Element를 등록하는 가장 간단한 방법이다. window의 CustomElementRegistry에 custom-time태그와 주어진 클래스를 묶는 역할을 한다.

아무런 로직을 주지 않았기 때문에 별 의미는 없지만, `current-time`은 엄연히 HTML에서 사용될 수 있는 Custom Element이다. 



### 이름 규칙: `-`를 포함하자.

Custom Element는 특별한 이름 규칙을 필요로 한다. 글자 가운데 `-`를 하나 이상 포함해야 한다. 

#### 올바른 이름

```javascript
<tui-editor></tui-editor>
<my-element></my-element>
<super-awsome-carousel></super-awsome-carousel>
```

#### 잘못된 이름

```javascript
<tuieditor></tuieditor> /* `-` 없음 */
<font-face></font-face> /* 예약된 태그 이름 SVG */
<missing-glyph></missing-glyph> /* 예약된 태그 이름 SVG */
```

위와 같은 제약을 가지는 이유는 HTML 파서가 자바스크립에서 선언된 Custom Element를 모르는 상황에서도 Custom Element가 될지도 모르는 태그들을 구분하기 위해서이다. 

HTML 표준에 정의되어 있지 않으면서도 Custom Element 이름 규칙에 맞지 않는 태그들은 HTMLUnknownElement인터페이스가 할당된다. 그러나 Custom Element는 HTMLElement로부터 직접 상속되어야 하므로 Custom Element 이름 규칙에 맞는 것들의 HTMLUnknownElement 상속을 막기 위해서이다. 



### HTMLElement의 상속과 constructor

> ### **constructor**
>
> class 내에서 객체를 생성하고 초기화하기 위한 메서드이다.
>
> ```constructor([arguments]){...}``` 
>
> - class는 constructor 메서드를 하나씩만 가질 수 있다. 두 개 이상의 constructor메서드는 SyntaxError(문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류)를 유발한다. 

전통적인 방법에서는 `constructor`에서 DOM을 조작할 수 있었다. 가능했던 이유는 Document의 DOMContentLoaded이벤트를 받아 DOM이 로드되고 나서 class를 초기화하기에 consturctor가 실행되는 시점에서 엘리먼트는 DOM에 붙어있는 상태이다. 따라서 constructor에서 어떠한 DOM 조작을 해도 무방한 것이다.

그러나 HTMLElement를 상속받은 Custom Element의 constructor의 실행시점은 아직 DOM에 추가되지 않은 상태이다. 그렇기 때문에 어떠한 DOM 조작도 할 수 없으며, DOM과 무관한 클래스 인스턴스 자체의 준비만 해야한다.

```javascript
class CurrentTime {
    constructor(el) {
        super();
        this._initDOM(el); // DOM 조작들
    }
}
```



```javascript
constructor() {
    super(); // 항상 맨 앞에!
    console.log(this.parentNode); // null
    console.log(this.firstChild); // null
    console.log(this.innerHTML); // ""
    console.log(this.getAttribute('locale')); // null
    this.setAttribute('locale', 'ko-KR'); // 에러: Uncaught DOMException: Failed to construct 'CustomElement': The result must not have attributes
    this.innerText = 'Arr'; // 에러: Uncaught DOMException: Failed to construct 'CustomElement': The result must not have children
}
```





## 웹 컴포넌트 라이프 사이클

자주 사용하는 라이프 사이클 위주로 알아보자.

### connectedCallback & disconnectedCallback

HTMLElement를 상속받은 경우 이 Custom Element가 DOM에 추가되거나 제거될 때마다 실행된다.

#### `connectecCallback` 

- custom element가 문서의 DOM에 처음 연결될 때 호출된다.

- ```javascript
  connectedCallback(): void {
    // beforeCreate(Vue.js)
    console.log(`beforeCreate`);
    super.connectedCallback();
    // created(Vue.js)
    console.log(`created`);
  }
  ```

  

#### `disconnectedCallback` 

- custom element가 문서의 DOM에서 연결 해제 될 때 호출된다.

- ```javascript
  disconnectedCallback(): void {
    // beforeDestory(Vue.js)
    super.disconnectedCallback();
    // destroy(Vue.js)
  }
  ```

  

### update

- Property 값들을 attributes에 반영한다.

- lit-html의 render를 호출한다.

- ```javascript
  update(changedProperty): void {
    // before Update(Vue.js)
    super.update(changedProperty);
  }
  ```



### firstUpdated

- DOM이 처음으로 업데이트 되었을 때 호출된다. element의 템플릿이 처음 만들어 졌을 때 한 번만 실행하기 위해 사용된다.

- ```javascript
  firstUpdated(): void {
    // mounted(Vue.js)
  }
  ```

  

### updated

- DOM이 업데이트되어 렌더링된 후에 호출 된다.

- ```javascript
  updated(changedProperty: PropertyValues): void {
    console.log(changedProperty);
  }
  ```

  



***





## Shadow DOM

### 분리: #shadow-root

쉐도우 돔은 돔 자체의 분리 역할을 한다.

`#shadow-root (open)`의 style은 밖으로 영향을 주지 않는다. 마찬가지로 글로벌에 존재하는 style 역시 `#shadow-root (open)` 안에 있는 엘리먼트에 영향을 미치지 못한다.

쉐도우 루트를 기준으로 `id`를 중복해서 사용이 가능하며, 루트 안팎의 동일한 `class` 역시 전혀 다른 클래스의 역할을 수행한다.

쉐도우 루트 밖에서 쉐도우 돔의 엘리먼트를 셀렉트 할 수도 없다. 

```javascript
// shadowDOM의 엘리먼트 호출 방법.
this.shadowRoot.querySelector('엘리먼트id')
```





## 조합: `<slot>`

`slot`은 HTML에서 조합을 지어 나타나 특별한 기능을 수행할 수 있다. `ol` + `li`, `select` + `item`, `form` + `input` 등이 그 예이다.

- 쉐도우 돔 : shadow root에 붙어있는 DOM
- 쉐도우 루트 : `#shadow-root`
- 쉐도우 호스트 : 쉐도우 루트의 부모. 
- 라이트 돔 : 도큐먼트의 쉐도우 호스트에 붙어있는 노드들.

> 쉐도우 돔의 슬롯이 가진 이름에 맞는 라이트 돔의 노드가 각 슬롯에 삽입된다.





## 컴포넌트: 커스텀 엘리먼트 + 쉐도우 돔 = DOM OPP

커스텀 엘리먼트가 가지고 있는 쉐도우 돔 트리의 엘리먼트들은 OOP에서 내부 구현에 해당한다.



## shadowDOM 특징

- 쉐도우 돔은 여러 번 **중첩**될 수 있다. `slot`도 마찬가지이다.































***

참고

- [웹 컴포넌트 정리 블로그](https://kyu.io/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B82-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8/)
- [왜 Web Component가 중요한가](https://han41858.tistory.com/15#:~:text=%EC%9B%B9%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%8A%94%20%EC%9A%B0%EB%A6%AC%EA%B0%80,%EC%9E%91%EC%84%B1%ED%95%A0%20%ED%95%84%EC%9A%94%EA%B0%80%20%EC%97%86%EC%9D%84%20%EA%B2%83%EC%9D%B4%EB%8B%A4.)
