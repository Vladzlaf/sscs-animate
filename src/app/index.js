import '../assets/style.scss'
import { sort } from './sort'

let position = 0;
let direction = 2;
function animateSquare() {
  const frame = document.querySelector('.wrap__request-frame');
  const brick = document.querySelector('.wrap__path-request');
  position += direction;
  brick.style.left = position + 'px';
  if (position >= frame.getBoundingClientRect().width - brick.getBoundingClientRect().width || position <= 0) {
    direction *= -1;
  }
  requestAnimationFrame(animateSquare);
}
animateSquare();

let containerWidth = document.querySelector('.wrap__timeout').getBoundingClientRect().width;
function animateSquareWithSetTimeout() {
  const btick = document.querySelector('.wrap__path__timeout-brick');
  const btickWidth = btick.getBoundingClientRect().width;
  position += direction;
  btick.style.left = position + 'px';
  if ( position >= containerWidth - btickWidth || position <= 0) {
    direction *= -1;
  }
  setTimeout(animateSquareWithSetTimeout, 20);
}
animateSquareWithSetTimeout();

const button = document.querySelector('.warp__button').addEventListener("click", () => sort(array));
let array = [...Array(100000)].map(()=>{return Math.floor(Math.random()*20)})
 








