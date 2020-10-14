// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const PENDING = 'pending',
    FINISHED = 'finished',
    inputForm = document.querySelector("form"),
    input = inputForm.querySelector('input'),
    pendingList = document.querySelector('.pendingList'),
    finishedList = document.querySelector('.finishedList'),
    pendingTodo = localStorage.getItem(PENDING),
    parseTodo = JSON.parse(pendingTodo),
    finishedTodo = localStorage.getItem(FINISHED),
    parseFinishedTodo = JSON.parse(finishedTodo);
let toDoArr = [],
    finishToDoArr = [];

function reTodo(event) {
    const target = event.target;
    const reTarget = target.parentNode;
    finishedList.removeChild(reTarget);

    // 1) PENDING ul에 완료취소된 todo를 todo를 뿌려줌.
    const finishedTodo = finishToDoArr.filter(ele => {
        return (ele.id === parseInt(reTarget.id) && ele.text === reTarget.innerText.slice(0, reTarget.innerText.length - 2));
    });
    paintToDos(finishedTodo[0].text);

    // 2) FINISHED ul에 나머지 완료된 todo들을 다시 뿌려줌.
    const notFinishedTodo = finishToDoArr.filter(ele => {
        return ele.id !== parseInt(reTarget.id);
    });
    finishToDoArr = (notFinishedTodo);
    saveFinishToDos();
}

function finishTodo(event) {
    const target = event.target;
    const okTarget = target.parentNode;
    pendingList.removeChild(okTarget);

    // 1) FINISHED ul에 완료된 todo를 뿌려줌.
    const finishedTodo = toDoArr.filter(ele => {
        return ele.id === parseInt(okTarget.id);
    });
    paintFinishedToDos(finishedTodo[0]);

    // 2) PENDING ul에 완료된 todo를 제외한 나머지 todo들 다시 뿌려줌.
    const notFinishedTodo = toDoArr.filter(ele => {
        return ele.id !== parseInt(okTarget.id);
    });
    toDoArr = notFinishedTodo;
    saveToDos();

}

function removeTodo(event) {
    const target = event.target;
    const delTarget = target.parentNode;
    const targetCheck = delTarget.parentNode;
    console.log(targetCheck.className);

    if(targetCheck.className === 'finishedList') {
        finishedList.removeChild(delTarget);
        const filterFinishedTodo = finishToDoArr.filter(ele => {
            return ele.id !== parseInt(delTarget.id);
        });
        finishToDoArr = filterFinishedTodo;
        saveFinishToDos();
    } else {
        pendingList.removeChild(delTarget);
        const filterTodo = toDoArr.filter(ele => {
            return ele.id !== parseInt(delTarget.id);
        });
    
        toDoArr = filterTodo;
        saveToDos();
    }   
}

function getLStodos() {
    if(pendingTodo !== null) {
        parseTodo.forEach(ele => {
            console.log(ele);
            paintToDos(ele.text);
        });
    } 
    if(parseFinishedTodo !== null) {
        parseFinishedTodo.forEach(ele => {
            paintFinishedToDos(ele);
        });
    }
}

function saveFinishToDos() {
    localStorage.setItem(FINISHED, JSON.stringify(finishToDoArr));
}

function saveToDos() {
    localStorage.setItem(PENDING, JSON.stringify(toDoArr));
}

function paintFinishedToDos(finishTodo) {
    const liFinish = document.createElement('li');
    const delBtn = document.createElement('button');
    const reBtn = document.createElement('button');
    delBtn.addEventListener('click', removeTodo);
    reBtn.addEventListener('click', reTodo);

    liFinish.innerText = finishTodo.text;
    liFinish.id = finishTodo.id;

    delBtn.innerText = '❌';
    reBtn.innerText = '⏪';
    
    finishedList.appendChild(liFinish);
    liFinish.appendChild(delBtn);
    liFinish.appendChild(reBtn);

    const todoData = {
        text: finishTodo.text,
        id: finishTodo.id,
    }
    finishToDoArr.push(todoData);
    saveFinishToDos();
}

function paintToDos(newTodo) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const finishBtn = document.createElement('button');   
    const newId = toDoArr.length + 1;
    delBtn.addEventListener('click', removeTodo);
    finishBtn.addEventListener('click', finishTodo);

    li.innerText = newTodo;
    li.id = newId;

    delBtn.innerText = '❌';
    finishBtn.innerText = '✅'

    pendingList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    
    const todoData = {
        text: newTodo,
        id: newId,
    }
    toDoArr.push(todoData);
    
    saveToDos();  
}

function handleSubmit(event) {
    event.preventDefault();
    const newTodo = input.value;

    paintToDos(newTodo);

    input.value = '';
}

function init() {
    getLStodos();
    inputForm.addEventListener("submit", handleSubmit);
}

init();
