const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    if (canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.fillStyle = "rgb(0, 255, 255, 0.5)";
            ctx.arc(
                random(canvas.width),
                random(canvas.height),
                random(50),
                0,
                2 * Math.PI,
            );
            ctx.fill();
        }
    }
}
if (btn) {
    btn.addEventListener("click", draw);
}