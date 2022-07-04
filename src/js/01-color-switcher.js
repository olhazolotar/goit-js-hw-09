const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
} 

let timerId = null;

refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStoptBtnClick);

function onStartBtnClick() {
    timerId = setInterval(onChangeColor, 1000);
    refs.start.setAttribute('disabled', 'disabled');
    refs.stop.removeAttribute('disabled');
}

function onStoptBtnClick() {
    clearInterval(timerId);
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', 'disabled');
    
}

function onChangeColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
