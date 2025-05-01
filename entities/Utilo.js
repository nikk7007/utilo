import { Slide } from './Slide.js'

export class Utilo {

  static randint(max, min = 0) {
    return min + Math.floor(Math.random() * (max + 1 - min))
  }
  static slide = (container, timeInterval, pauseble = false, amoutRepeat = -1) => {
    return new Slide(container, timeInterval, pauseble, amoutRepeat)
  }
}