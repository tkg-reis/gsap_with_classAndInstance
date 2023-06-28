import './style.css'
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class GsapInit {
  constructor(el, width, height, x, y, duration, autoalpha, formToX, fromtoY, fromToDuration, fromToautoautoAlpha) {
    this.el = el;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.duration = duration;
    this.autoalpha = autoalpha;
    this.formToX = formToX;
    this.fromtoY = fromtoY;
    this.fromToDuration = fromToDuration;
    this.fromToautoautoAlpha = fromToautoautoAlpha;
    this.el = document.querySelector(el);
  }
  gsapSet() {
    gsap.set(this.el, {
      width: this.width ? this.width : "100%",
      height: this.height ? this.height : "100%",
    }.bind(this))
  }
  gsapFrom() {
    console.log(this);
    gsap.from(this.el , {
      x: this.x ? this.x : undefined,
      y: this.y ? this.y : undefined,
      duration: this.duration ? this.duration : undefined,
      autoAlpha: this.autoalpha ? this.autoalpha : undefined,
    });
  }
  gsapTo() {
    gsap.to(this.el , {
      x: this.x ? this.x : undefined,
      y: this.y ? this.y : undefined,
      duration: this.duration ? this.duration : undefined,
      autoAlpha: this.autoalpha ? this.autoalpha : undefined,
    })
  }
  gsapFromTo() {
    gsapFromTo(this.el,
    {
      x: this.x ? this.x : undefined,
      y: this.y ? this.y : undefined,
      autoAlpha: this.autoalpha ? this.autoalpha : undefined,
    },
    {
      x: this.formToX ? this.formToX: undefined,
      y: this.fromtoY ? this.fromtoY : undefined,
      duration: this.fromToDuration ? this.fromToDuration : undefined,
      autoAlpha: this.fromToautoautoAlpha ? this.fromToautoautoAlpha : undefined,
    }
    )
  }
}

const gi = new GsapInit("h1",100,100,100,100,2,1)
gi.gsapFrom();

// export class GsapScrollTrigger {
//   constructor() {

//   }
// }