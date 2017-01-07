/**
 * Pomodoro Timer app behavior
 *
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */

import Timer from '../shared/timer';

window.addEventListener('load', () => {
  const timer = new Timer({
    workDuration: 25 * 60000,
    breakDuration: 5 * 60000,
    longBreakDuration: 15 * 60000,
  });
  const startButton = document.querySelector('.c-timer__start-button');
  const pauseButton = document.querySelector('.c-timer__pause-button');
  const restartButton = document.querySelector('.c-timer__restart-button');

  startButton.addEventListener('click', () => { timer.start(); });
  pauseButton.addEventListener('click', () => { timer.pause(); });
  restartButton.addEventListener('click', () => { timer.restart(); });
});
