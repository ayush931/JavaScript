const image = document.getElementById('image');

let x = 0;
let y = 0;

function moveImage(event) {
  switch (event.keyCode) {
    case 37: // Left arrow key
      x -= 10;
      break;
    case 38: // Up arrow key
      y -= 10;
      break;
    case 39: // Right arrow key
      x += 10;
      break;
    case 40: // Down arrow key
      y += 10;
      break;
  }
  
  image.style.left = x + 'px';
  image.style.top = y + 'px';
}

document.addEventListener('keydown', moveImage);
