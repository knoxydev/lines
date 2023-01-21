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


  start()
  {
    const head_pos = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.x = head_pos(0, this.w);
    this.y = head_pos(0, this.h);

    this.w = Math.floor(this.w / 10) * 10;
    this.y = Math.floor(this.y / 10) * 10;

    switch (head.generator) {
      case 1: main.loop_one(); break;
      case 2: main.loop_two(); break;
      case 3: main.loop_the(); break;
      default: main.loop_one(); break;
    }
  }


  random_color()
  {
    const rndm = (x = 255) => Math.floor(Math.random() * x);
    return `rgb(${rndm()}, ${rndm()}, ${rndm()})`;
  }


  draw()
  {
    this.ctx.fillStyle = (child.random_color == true) ? this.random_color() : child.color;
    this.ctx.fillRect(this.x, this.y, head.w, head.h);

    switch (this.side) {
      case 4: this.x -= head.km; break;
      case 3: this.x += head.km; break;
      case 2: this.y -= head.km; break;
      case 1: this.y += head.km; break;
    }

    if (this.x < 0) this.x = 0;
    if (this.x >= this.w) this.x = this.w;
    if (this.y < 0) this.y = 0;
    if (this.y >= this.y) this.y = this.y;

    this.ctx.fillStyle = head.color;
    this.ctx.fillRect(this.x, this.y, head.w, head.h);
  }


  loop_one()
  {
    setInterval(() => {
      this.random();
      
      const int = setInterval(() => {
        setTimeout(() => { clearInterval(int) }, time_one.out);
        this.draw();
      }, time_one.int);
    }, time_one.main);
  }


  loop_two()
  {
    this.random();
    
    for (let i = 0; i < time_two.dis; i++) { this.draw(); }

    window.requestAnimationFrame(() => this.loop_two());
  }


  loop_the()
  {
    setInterval(() => {
      for (let i = 0; i < time_two.dis; i++) {
        this.random();
        this.draw();
      }
    }, time_the.main);
  }
}


const main = new Main(canvas.getContext("2d"));
main.start();


window.onload = () =>
{
  document.getElementById("canvas").style.width = main.w;
  document.getElementById("canvas").style.height = main.h;
};