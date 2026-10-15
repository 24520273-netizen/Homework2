const beatQueue = [];

function recordBeat(pad) {
    const beat = {
        key: pad.dataset.key,
        sound: pad.dataset.sound,
        timestamp: Date.now()
    };

    beatQueue.push(beat);

    console.log(beatQueue);
}
function playSound(pad) {
    const soundPath = pad.dataset.sound;

    if (!soundPath) return;

    const audio = new Audio(soundPath);
    audio.play();
    recordBeat(pad);
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