const body = document.querySelector('body');

const IMG_NUMBER = 5;

function handleImgLoad() {
    console.log('finished loading');
}

function paintImage(imgNumber) {
    console.log(imgNumber, `images/${imgNumber + 1}.jpg`);
    const image = new Image();
    console.log(image);
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add('bgImage');
    body.appendChild(image);


    // image.addEventListener('loadend', handleImgLoad);
    // 'loadend'일 경우 이벤트리스너를 작동하게 하려면 지금처럼 저장된 이미지를 불러올 때 사용하는게 아닌, API를 이용해 원격 데이터를 불러올 때 사용하는 것이다.
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();