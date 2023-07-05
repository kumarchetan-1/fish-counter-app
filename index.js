let saveEl = document.getElementById("save-el-inner")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearAll() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent=""
}

function decrement(){
    count -= 1;
    countEl.textContent = count;
}


// Script for draggable behavior

var draggableElement = document.getElementById('draggable-conta');
var offsetX, offsetY;

draggableElement.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', ''); // Required for Firefox
  offsetX = event.clientX - draggableElement.offsetLeft;
  offsetY = event.clientY - draggableElement.offsetTop;
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.addEventListener('drop', function(event) {
  event.preventDefault();
  draggableElement.style.left = (event.clientX - offsetX) + 'px';
  draggableElement.style.top = (event.clientY - offsetY) + 'px';
});
