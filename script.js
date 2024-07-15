const keys = document.querySelectorAll(".keys");
const piano = document.querySelectorAll("li");

function playNoteFromKey(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.toLowerCase()}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function playNoteFromEvent(e) {
  playNoteFromKey(e.key);
}

function playNoteFromClick(e) {
  const key = e.target.getAttribute("data-key");
  playNoteFromKey(key);
}

window.addEventListener("keyup", playNoteFromEvent);

piano.forEach((key) => {
  key.addEventListener("click", playNoteFromClick);
});
