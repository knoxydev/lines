const canvas = document.getElementById("canvas");


class Main
{
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  x = 0;
  y = 0;
  side = 3;


  constructor(ctx)
  { this.ctx = ctx; }


  random()
  { this.side = Math.floor(Math.random() * 4) + 1; }


  draw()
  {
    this.ctx.fillStyle = child.color;
    this.ctx.fillRect(this.x, this.y, head.w, head.h);

    switch (this.side) {
      case 4: this.x -= head.km; break;
      case 3: this.x += head.km; break;
      case 2: this.y -= head.km; break;
      case 1: this.y += head.km; break;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > this.w) this.x = this.w;
    if (this.y < 0) this.y = 0;
    if (this.y > this.y) this.y = this.y;

    this.ctx.fillStyle = head.color;
    this.ctx.fillRect(this.x, this.y, head.w, head.h);
  }


  interval()
  {
    let int = setInterval(() => {
      setTimeout(() => { clearInterval(int) }, time.out);
      this.draw();
    }, time.int);
  }


  loop()
  {
    setInterval(() => {
      this.random();
      this.interval();
    }, time.main);

    //window.requestAnimationFrame(() => this.loop());
  }
}


const main = new Main(canvas.getContext("2d"));
main.loop();


window.onload = () =>
{
  document.getElementById("canvas").style.width = main.w;
  document.getElementById("canvas").style.height = main.h;
};