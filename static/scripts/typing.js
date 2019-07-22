'use strict';

const typeElement = document.getElementById('type1');

const phrases = [
  "I'm a web developer",
  "I like coffee",
  "I write about stuff I'm no expert in",
  "But then everyone else does so I guess that's ok",
];

let currentIdx0 = 0;

window.setInterval(() => {
  currentIdx0++;
  if (currentIdx0 > 3) {currentIdx0 = 0;}
  typeElement.innerText = phrases[currentIdx0];
}, 2400);

const sentenceElement0 = document.getElementById('sentence');
const sentence0 = 'Type this.';
let cursorPos0 = sentence0.length;

let direction0 = -1;
const switchDirection0 = () => direction0 *= -1;

window.setInterval(() => {
  const atStart = cursorPos0 === 0;
  const atEnd = cursorPos0 === sentence0.length;
  if (atStart && direction0 === -1 || atEnd && direction0 === 1) {switchDirection0();}
  cursorPos0 += direction0;
  sentenceElement0.innerText = sentence0.slice(0, cursorPos0);
}, 180);

const element = document.getElementById('typing-example');
const cursor = document.getElementById('cursor');
let direction = -1;
let phraseIdx = 0;
let sentence = phrases[phraseIdx];
let cursorPos = sentence.length;
let blinking = false;
let blinkIntervals = 0;

const switchDirection = () => {
  direction *= -1;
  toggleTyping();
  if (direction === 1) {
    /* Just started typing again, time to switch phrase */
    phraseIdx++;
    if (phraseIdx >= phrases.length) {phraseIdx = 0;}
    sentence = phrases[phraseIdx];
  }
};

const toggleTyping = () => {
  blinking = !blinking;
  if (blinking) {cursor.classList.add('blink')} else {cursor.classList.remove('blink');}
}

window.setInterval(() => {
  const atStart = cursorPos === 0;
  const atEnd = cursorPos === sentence.length;
  if (atStart && direction === -1 || atEnd && direction === 1) {switchDirection();}

  if (!blinking) {
    cursorPos += direction;
    element.innerText = sentence.slice(0, cursorPos);
  } else {
    blinkIntervals++;
    if (blinkIntervals >= 12) {
      blinkIntervals = 0;
      toggleTyping();
    }
  }
}, 90);
