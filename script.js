function play() {
  var handstandsButton = document.getElementById("handstands");
  handstandsButton.onclick = playHandstands
}

function playHandstands() {
  var audio = document.getElementById("audio");
  audio.play();
}

play()
