import { Utilo } from "./entities/Utilo.js";

const galeria = document.querySelector('.slide')
const slide = Utilo.slide(galeria, 2000, true);
slide.configPause(true, () => {
  if (slide.isPaused) {
    slide.container.style.border = '2px solid #0000ff'
  } else {
    slide.container.style.border = ''
  }
})
galeria.addEventListener('click', slide.pause)
