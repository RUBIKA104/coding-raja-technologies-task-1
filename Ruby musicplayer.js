// script.js
const audioPlayer = document.getElementById('music-player');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

const tracks = ['C:\Users\rubyk\Downloads\rockabye.mp3', 'rockabye.mp3', 'rockabye.mp3'];
let currentTrack = 1;

function loadTrack(index) {
    audioPlayer.src = tracks[index];
    audioPlayer.load();
    playPauseButton.textContent = 'Play';
}

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
});

// Load the first track initially
loadTrack(currentTrack);
