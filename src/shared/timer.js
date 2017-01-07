/**
 * Timer module
 *
 * @module
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */

/**
 * @class
 */
export default class {

  /**
   * @constructor
   * @param {Object} config This timer's configuration
   * @param {Number} config.workDuration Length of work durations (ms)
   * @param {Number} config.breakDuration Length of normal break durations (ms)
   * @param {Number} config.longBreakDuration Length of long break durations (ms)
   */
  constructor(config) {
    this.workDuration = config.workDuration;
    this.breakDuration = config.breakDuration;
    this.longBreakDuration = config.longBreakDuration;
  }

  /**
   * Starts the next timer duration
   */
  start() {
    this.timerStart = Date.now();
  }

  /**
   * Pauses the current timer duration
   */
  pause() {
    this.pauseStart = Date.now();
  }

  /**
   * Restarts the timer
   */
  restart() {
    this.completedDurations = 0;
  }
}
