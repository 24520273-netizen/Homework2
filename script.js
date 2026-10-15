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