/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  ship : {
    forward : false,
    back : false,
    rotateClockwise : false,
    rotateCounterClockwise : false
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = true;
      break;
    case "ArrowLeft":
      CONTROLS.ship.rotateCounterClockwise = true;
      break;
    case "ArrowRight":
      CONTROLS.ship.rotateClockwise = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = false;
      break;
    case "ArrowLeft":
      CONTROLS.ship.rotateCounterClockwise = false;
      break;
    case "ArrowRight":
      CONTROLS.ship.rotateClockwise = false;
      break;
    default:
      break;
  }
});
