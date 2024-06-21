function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card(card, ev) {
    let img = card.querySelector('img');
    let rotateY = map(ev.clientX, 0, card.clientWidth, -10, 10);
    let rotateX = map(ev.clientY, 0, card.clientHeight, 10, -10);
    let brightness = map(ev.clientY, 0, card.clientHeight, 1.3, 0.5);
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
}

var cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mousemove', (ev) => {
        Card(card, ev);
    });
    card.addEventListener('mouseleave', (ev) => {
        let img = card.querySelector('img');
        img.style.transform = 'rotateX(0deg) rotateY(0deg)';
        img.style.filter = 'brightness(1)';
    });
});