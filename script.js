const player = document.getElementById("player");
const display = document.getElementById("display");

const musicList = [
  "audio/仮面ライダーAGITO.mp3",
  "audio/Tokyo Manaka.mp3",
  "audio/Justiφ's.mp3",
  "audio/HIT THE JACKPOT! .mp3"
];

const musicNames = [
  "仮面ライダー AGITO",
  "Tokyo Manaka",
  "Justiφ's",
  "Jackpot"
];

let current = 0;
let isPlaying = false;

function selectMusic(index) {
  current = index;
  player.src = musicList[current];
  display.innerText = musicNames[current];
  player.play();
  isPlaying = true;
}

function togglePlay() {
  if (!player.src) return;

  if (isPlaying) {
    player.pause();
  } else {
    player.play();
  }
  isPlaying = !isPlaying;
}

function next() {
  current = (current + 1) % musicList.length;
  selectMusic(current);
}

function prev() {
  current = (current - 1 + musicList.length) % musicList.length;
  selectMusic(current);
}