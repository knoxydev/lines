const canvas = document.getElementById("canvas");

class Main
{
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  constructor(ctx)
  { this.ctx = ctx; }

  draw() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(10, 10, 150, 100);
  }

}


const main = new Main(canvas.getContext("2d"));
main.draw();

window.onload = () =>
{
  document.getElementById("canvas").style.width = main.w;
  document.getElementById("canvas").style.height = main.h;
};
