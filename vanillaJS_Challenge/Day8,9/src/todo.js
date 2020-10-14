const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo) { // toDo는 ele인 것.
    return toDo.id == toDo;
}

let toDos = [];

function deleteToDo(event) {
    console.log(event.target.parentNode);
    console.dir(event.target)
    const btn = event.target;
    const li = btn.parentNode;
    console.log(li.id);
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        console.log(typeof toDo.id, typeof li.id);
        return toDo.id !== parseInt(li.id);
    }); // filter()함수도 forEach()처럼 각각의 아이템들을 모두 돌린다.
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();