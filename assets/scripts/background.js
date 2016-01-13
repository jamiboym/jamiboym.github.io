var initialCanvas = Trianglify().canvas();
initialCanvas.classList.add('blurin');
document.getElementById('background').appendChild(initialCanvas);
window.setInterval(function() {
  var background = document.getElementById('background');
  var newCanvas = Trianglify().canvas();
  newCanvas.classList.add('blurin');
  if (background.childNodes.length > 2) {
    background.removeChild(background.firstChild);
  }
  background.firstChild.classList.remove('blurin');
  background.firstChild.classList.add('blurout');
  background.appendChild(newCanvas);
}, 3000);
