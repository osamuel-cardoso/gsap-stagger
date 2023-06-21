/*eslint-disable no-unused-vars*/
import { gsap, ScrollTrigger } from 'gsap/all'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)
//Captura e envolve todos os caracteres em spans/divs
const sliceText = new SplitType('[text-split]', {
  types: 'words chars',
  tagName: 'span',
})

let wordsSlidesUp = document.querySelectorAll('[words-slide-up]')

wordsSlidesUp.forEach((element) => {
  let tl = gsap.timeline({ paused: true, defaults: { duration: 1 } })
  let onlyChar = element.querySelectorAll('.char')

  tl.from(
    onlyChar,

    {
      opacity: 0,
      yPercent: 100,
      stagger: { amount: 0.4 },
      ease: 'expo.InOut',
    }
  )
})
