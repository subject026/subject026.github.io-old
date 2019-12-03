import { TimelineMax, Power3 } from "gsap"

export const animateTextAndLappy = refs => {
  const { lappyRef, titleTextRef, subtitleTextRef } = refs
  const makeTextTl = ref => {
    const tl = new TimelineMax()
    tl.from(ref.current, 0.5, {
      y: 10,
      opacity: 0,
      ease: Power3.easeOut,
    })

    return tl
  }

  const makeLappyTl = ref => {
    tl.from(ref.current, 0.5, {
      x: 100,
      opacity: 0,
      ease: Power3.easeOut,
    })
  }

  const tl = new TimelineMax()

  if (window.innerWidth < 500) {
    tl.add(makeTextTl(titleTextRef))
    tl.add(makeLappyTl(lappyRef))
    tl.add(makeTextTl(subtitleTextRef))
  } else {
    tl.add(makeLappyTl(lappyRef))
    tl.add(makeTextTl(titleTextRef), "-=0.35")
    tl.add(makeTextTl(subtitleTextRef), "-=0.25")
  }

  return tl
}
