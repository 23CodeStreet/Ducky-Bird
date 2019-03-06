
var canvas = document.querySelector("#screen")
canvas.width = 500;
canvas.height = 300;

var ctx = canvas.getContext("2d");


// App State
var maxPipeSize = canvas.height / 2;

var pipe1 = {
  height: Math.random() * maxPipeSize,
  width: 40,
  x: canvas.width - 100,
}
var state = {
  spacePressed: false,
  bird: {
    y: canvas.height / 2,
    x: canvas.width / 4,
    size: 20,
    speed: 4,
  },
  timeInterval: 20,
  pipes: [pipe1],
  pipeSpeed: 10,
};


// Pipe code
function drawPipes() {
  ctx.fillStyle = "blue";
  for (var i = 0; i < state.pipes.length; i = i + 1) {
    var pipe = state.pipes[i];
    ctx.fillRect(pipe.x, canvas.height - pipe.height, pipe.width, pipe.height);
  }
}

function movePipes() {
  for (var i = 0; i < state.pipes.length; i = i + 1) {
    var pipe = state.pipes[i];
    pipe.x = pipe.x - state.pipeSpeed;
    if (pipe.x < 0) {
      pipe.x = canvas.width;
    }
  }
}


// Bird code
function drawBird() {
  ctx.fillStyle = "brown";
  ctx.fillRect(state.bird.x, state.bird.y, state.bird.size, state.bird.size);
}

function  moveBird() {
  if (state.spacePressed) {
    state.bird.y = state.bird.y - state.bird.speed;
  } else {
    state.bird.y = state.bird.y + state.bird.speed;
  }
}


// General code
function clearScreen() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


// Draw loop
function draw() {
  clearScreen();
  drawBird();
  drawPipes();

  moveBird();
  movePipes();
}

setInterval(draw, state.timeInterval);


// User input code
function handleKeyDown(e) {
  if (e.code === "Space") {
    state.spacePressed = true;
  }
}
body.addEventListener("keydown", handleKeyDown);

function handleKeyUp(e) {
  if (e.code === "Space") {
    state.spacePressed = false;
  }
}
body.addEventListener("keyup", handleKeyUp);
