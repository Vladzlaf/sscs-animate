import '../assets/style.scss'

let position = 0;
let direction = 2;
function animateSquare() {
  const frame = document.querySelector('.wrap__request-frame');
  const brick = document.querySelector('.wrap__request-frame > .wrap__path-request');
  position += direction;
  brick.style.left = position + 'px';
  if (position >= frame.getBoundingClientRect().width - brick.getBoundingClientRect().width || position <= 0) {
    direction *= -1;
  }
  requestAnimationFrame(animateSquare);
}
animateSquare();

let timePosition = 0;
let timeDirection = 2;
let containerWidth = document.querySelector('.wrap__timeout').getBoundingClientRect().width;
function animateSquareWithSetTimeout() {
  const btick = document.querySelector('.wrap__timeout > .wrap__path__timeout-brick');
  const btickWidth = btick.getBoundingClientRect().width;
  timePosition += timeDirection;
  btick.style.left = timePosition + 'px';
  if ( timePosition >= containerWidth - btickWidth || timePosition <= 0) {
    timeDirection *= -1;
  }
  setTimeout(animateSquareWithSetTimeout, 20);
}
animateSquareWithSetTimeout();