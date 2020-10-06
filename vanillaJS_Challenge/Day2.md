#### 🗓 2020.10.06 Tuesday

## 바닐라 JS로 크롬 앱 만들기 (1.6강 ~ 1.10강)

### #1.6 Your first JS Variable(변수!)
- JavaScript는 프로그래밍 언어. 프로그래밍 언어는 따라야하는 규칙이 있다.
  - ex)
    - expresstion은 한 줄에 있어야 한다. / 마칠 때 `;`을 입력한다.
    - 변수 생성 시 `var`, `let`, `const`를 이용해 선언한다.   
    등등...
    
    ⌨️ code
    ```javascript
    let a = 221;
    let b = a - 5;
    
    a = 4;
    console.log(b, a);
    ```
    
    🖨 console 결과
    ```
    216 4
    ```

<br/>

### #1.7 let, const, var 
- let
  - 변수가 바뀌는걸 허용.
  
- const
  - constant(상수)
  - 변하지 않는다. 안정적.
  
    ⌨️ code
    ```javascript
    const a = 221;
    let b = a - 5;
    a = 4;
    console.log(b, a);
    ```
    🖨 console 결과
    ```
    TypeError: Assignment to constant variable.
    at /home/runner/OlivedrabIndianredWifi/index.js:3:3
    ```
    `상수에 변수 대입`했다는 에러가 발생했음을 볼 수 있다.
    
- var
  - varible
 
  
<br/>

### #1.8 Data Types on JS
- 변수 선언 시 첫 사용은 `const`를 사용하자. 
- `let`은 정말 필요한 경우에만 사용하도록 한다.

- 주석 처리
  ```
  //
  
  /* */
  ```

- 변수에 사용할 수 있는 데이터
  - `string` 
    - 텍스트.

        ⌨️ code
        ```javascript
        //  String
        const what = "hello😁";

        console.log(what);
        ```

        🖨 console 결과
        ```
        hello😁
        ```

  - `Boolean` 
    - True or False.
    - 1 = True.
    - 0 = False
    - 모두 소문자로 쓴다.
    - `' '`, `" "`는 적지 않는다.

        ⌨️ code
        ```javascript
        // Boolean
        const what = true;

        console.log(what)
        ```

        🖨 console 결과
        ```
       true
        ```

  - `Number` 
    - 숫자.
    - `' '`, `" "`는 적지 않는다.

        ⌨️ code
        ```javascript
        const what = 666;

        console.log(what)
        ```

        🖨 console 결과
        ```
        666
        ```

  - `Float`
    - floating number(떠돌이 소숫점)을 가지고 있는 숫자.

        ⌨️ code
        ```javascript
        const what = 55.1;

        console.log(what)
        ```

        🖨 console 결과
        ```
        55.1
        ```

<br/>

### #1.9 Organizing Data with Arrays  
- 변수명 규칙
  - `Camel Case`로 작성해줘야 좋다.
    - 띄어쓰기를 해야할 위치에 대문자로 적어주는 것.
  - 변수명에 기호를 넣지 않는다.
  - 변수명 시작을 문자로 해야 한다.
  
- JavaScript에 데이터 정렬하는 방법
  1) `Object`
      - `Object`를 선언하기 위해서는 `{}(컬리 브라켓)`을 써준다.
     
  2) `Array`
      - `Array`를 선언하기 위해서는 `[](브라켓)`을 써준다.
  
  - `Array`로 데이터 정렬
  
      ⌨️ code
      ```javascript
      const something = "something";
      const daysOfWeek = ["Mon", "Tue", "wed", "Thu", "Fri", "Sat", "Sun", true, something];

      console.log(daysOfWeek);
      console.log(daysOfWeek[2]);
      ```
      `컴퓨터`는 `0`부터 센다.
      
      🖨 console 결과
      ```
      [
        'Mon', 'Tue',
        'wed', 'Thu',
        'Fri', 'Sat',
        'Sun', true,
        'something'
      ]
      wed
      ```


<br/>

### #1.10 Organizing Data with Objects
- `Object`로 데이터 정렬

    ⌨️ code
    ```javascript
    const myInfo = {
      name: "EJ", 
      age: "28", 
      gender: 'Female', 
      isHandsome: true,
      favMovies: ["HarryPotter", "Her", "The Avengers"],
      favFood: [
        {
          name: "Kimchi",
          fatty: false
        },
        {
          name: "Cheese burger",
          fatty: true
        }
      ],
    };


    console.log(myInfo);
    console.log(myInfo.name);
    console.log(myInfo.age);
    ```
      
      
    🖨 console 결과
    ```
    {
      name: 'EJ',
      age: '28',
      gender: 'Female',
      isHandsome: true,
      favMovies: [ 'HarryPotter', 'Her', 'The Avengers' ],
      favFood: [
        { name: 'Kimchi', fatty: false },
        { name: 'Cheese burger', fatty: true }
      ]
    }
    EJ
    28 
    ```


<br/>






