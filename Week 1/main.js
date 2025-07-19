import Game from './game.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const game = new Game(canvas);

function start() {
    // init currently is empty
    game.init();
    requestAnimationFrame(update);
}

function update(timestamp) {
    // TODO: what's my fps tho?
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(timestamp, ctx);
    game.draw(ctx);

    requestAnimationFrame(update);
}

start();
