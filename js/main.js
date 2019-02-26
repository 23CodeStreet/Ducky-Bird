
var state = {
    boxes: []
};


var canvas = document.querySelector("#screen")
canvas.width = 500;
canvas.height = 300;

var ctx = canvas.getContext("2d");

function clickHandler(e){
  console.log(e);
  var newBox = {
    x: e.offsetX,
    y: e.offsetY,
  }
  state.boxes.push(newBox);
}

function gameLoop(){
    moveBoxes();
    renderBoxes();
}

function moveBoxes() {
  for (var i = 0; i < state.boxes.length;i = i + 1) {
    var box = state.boxes[i];
    box.x = box.x + 10;
    if (box.x > canvas.width) {
      box.x = 0;
    }
  }
}

function renderBoxes() {
  for (var i = 0; i < state.boxes.length;i = i + 1) {
    var box = state.boxes[i];
    drawBox(box.x, box.y);
  }
}

function drawBox(x, y){
  ctx.fillStyle = "pink";

  var width = Math.random() * 100;

  ctx.fillRect(x, y, width, width);
}

canvas.addEventListener("click", clickHandler)
