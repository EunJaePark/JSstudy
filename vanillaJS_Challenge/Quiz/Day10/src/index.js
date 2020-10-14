// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeText = document.querySelector('.rangeText'),
    rangeSubmitForm = document.querySelector('.js-rangeSubmit'),
    inputRange = rangeSubmitForm.querySelector('.inputRange'),
    submitForm = document.querySelector('.js-submit'),
    inputNumber = submitForm.querySelector('.inputNumber'),
    resultBox = document.querySelector('.resultBox'),
    myNum = document.querySelector('.myNum'),
    randomNum = document.querySelector('.randomNum'),
    winOrNot = document.querySelector('.winOrNot');
let myNumber = '',
    randomNumber = '',
    range = inputRange.value;



// 우승 여부.
function winOrNotResult() {
    console.log(`myNumber : ${myNumber}, randomNumber: ${randomNumber}, range: ${range}`);
    if(myNumber > randomNumber) {
        winOrNot.innerText = 'You won! 🤩';
    } else if(myNumber < randomNumber) {
        winOrNot.innerText = 'You lost! 😭'
    } else {
        winOrNot.innerText = "It's a tie! 👍🏼";
    }
}


// (내가 선택한 숫자 + 컴퓨터 랜덤 숫자) 화면에 뿌려줌.
function printNum() {
    // 내가 선택한 숫자.
    myNum.innerText = myNumber;
    // 랜덤 숫자.
    getRandomNum();
    randomNum.innerText = randomNumber;

    // 우승 여부 결과 추출.
    winOrNotResult();
    // 'my chose', 'random num', '우승 결과' 적힌 박스 보이게 함.
    resultBox.classList.add('show');
}

// random 숫자 추출.
function getRandomNum() {
    randomNumber = Math.floor(Math.random() * range);
}

// 'range input' submit.
function handledRangeSubmit() {
    range = inputRange.value;
    // range 숫자 화면에 보이도록 태그에 넣어줌.
    rangeText.innerText = inputRange.value;
}

// input에 내가 선택한 숫자 입력 후 submit.
function handledSubmit(event) {
    event.preventDefault();
    if(inputNumber.value === '') { // 내가 선택한 숫자가 없으면 알림창 뜨게 함.
        alert('Please choose a number');
    } else { // 내가 선택한 숫자 있으면 화면에 숫자 출력되는 함수 실행.
        myNumber = inputNumber.value;
        printNum();
    }
    inputNumber.value = '';
}

function init() {  
    rangeText.innerText = inputRange.value; // range 화면에 출력.
    rangeSubmitForm.addEventListener('click', handledRangeSubmit);
    submitForm.addEventListener('submit', handledSubmit);
}

init();