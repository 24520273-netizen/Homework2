function playSound(pad) {
    const soundPath = pad.dataset.sound;

    if (!soundPath) return;

    const audio = new Audio(soundPath);
    audio.play();
}

const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach((pad) => {
    pad.addEventListener('click', () => {
        playSound(pad);
    });
});
window.addEventListener('keydown', (event) => {
    if (event.repeat) return;

    const key = event.key.toLowerCase();

    const pad = document.querySelector(
        `.drum-pad[data-key="${key}"]`
    );

    if (!pad) return;

    playSound(pad);
});