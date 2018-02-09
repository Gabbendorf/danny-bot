function play(buttonId, audioId) {
  var playButton = document.getElementById(buttonId);
  playButton.onclick = function() {
    playAudio(audioId)
  }
}

function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

play("handstands", "handstands-audio")
play("laughing", "laughing-audio")
