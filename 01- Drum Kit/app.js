function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;

    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);