import React from 'react';

let angle = 0;
let mp = 300; //max particles
let particles = [];
const W = window.innerWidth;
const H = window.innerHeight;

const draw = (ctx, particles) => {

  ctx.clearRect(0,0,W,H);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  for (var i = 0; i < mp; i++) {
    var p = particles[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update(particles);
};

const update = particles => {
  angle += 0.01;
  for (let i = 0; i < mp; i++) {
    var p = particles[i];

    p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
    p.x += Math.sin(angle) * 2;

    if (p.x > W + 5 || p.x < -5 || p.y > H) {
      if (i % 3 > 0) {
        //66.67% of the flakes
        particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
      } else {
        if (Math.sin(angle) > 0) {
          particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
        } else {
          particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
        }
      }
    }
  }
};

class Canvas extends React.Component {
  constructor() {
    super();
    this.canvas = React.createRef();
  }

  componentDidMount() {
    
    const ctx = this.canvas.current.getContext('2d');
  
    //snowflake particles
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 4 + 1, //radius
        d: Math.random() * mp //density
      });
    }
  
    //Lets draw the flakes
    setInterval(() => draw(ctx, particles), 33);
  }
  
  render() {
    return (
      <canvas className="canvas" width={W} height={H} ref={this.canvas}>
      </canvas>
    );
  }
};

export default Canvas;
