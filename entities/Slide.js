export class Slide {
  #index
  #items
  #container
  #idSlider
  #pause
  constructor(container, timeInterval, pauseble = false, amoutRepeat = -1) {
    this.#index = 0;
    this.#pause = false;
    this.#container = container
    this.#items = container.querySelectorAll('*')
    this.interval = timeInterval
    this.repeat = {
      max: amoutRepeat,
      cur: 0
    }
    this.#idSlider = setInterval(this.#action, this.interval)
    this.configAnimation()
    this.configPause(pauseble)
  }

  get container() {
    return this.#container
  }

  get items() {
    return items
  }

  get isPaused() {
    return this.#pause
  }

  #action = () => {
    if (!this.#pause) {
      this.#index++;
      if (this.#index >= this.#items.length) {
        this.#index = 0;
        this.repeat.cur++
        if (this.repeat.max !== -1 && this.repeat.cur >= this.repeat.max) {
          this.stop()
        }
      }
      this.#items.forEach((item) => {
        item.style.translate = `-${this.#index * 100}%`;
      });
    }
  }

  stop = () => {
    clearInterval(this.#idSlider)
    return this
  }

  configAnimation = (time = 1000, timingFuncition = 'ease-in-out') => {
    Object.assign(this.#container.style, {
      cursor: 'pointer',
      display: 'flex',
      overflow: 'hidden'
    })
    this.#items.forEach(item => {
      Object.assign(item.style, {
        height: '100%',
        width: '100%',
        transition: `${time}ms ${timingFuncition}`,
        flexShrink: 0
      });
    })

    return this
  }

  configPause = (pauseble = false, visualReturn = this.#visualReturn) => {
    if (pauseble) {
      this.pause = () => {
        this.#pause = !this.#pause
        this.#visualReturn()
        return this
      }
    } else {
      this.pause = () => { }
    }
    this.#visualReturn = visualReturn;
  }

  #visualReturn = () => {
    if (this.#pause) {
      if (this.#container.style.transition == '') {
        this.#container.style.transition = '500ms ease-in-out'
      }
      Object.assign(this.#container.style, {
        filter: 'brightness(0.5)'
      })
    } else {
      Object.assign(this.#container.style, {
        filter: 'brightness(1)'
      })

    }
  }
}