import { TimelineMax, Power3 } from "gsap"

export const animateTextAndLappy = refs => {
  const { lappyRef, titleTextRef, subtitleTextRef } = refs

  const windowIsSmall = window.innerWidth < 500
  console.log("win small? ", windowIsSmall)
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

  if (windowIsSmall) {
    tl.add(makeTextTl(titleTextRef))
    tl.add(() => {
      const tl = new TimelineMax()
      tl.to(lappyRef.current, 0.5, {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut,
      })
      return tl
    }, "-=0.3")
    tl.add(makeTextTl(subtitleTextRef), "-=0.2")
  } else {
    tl.add(makeLappyTl(lappyRef))
    tl.add(makeTextTl(titleTextRef), "-=0.35")
    tl.add(makeTextTl(subtitleTextRef), "-=0.25")
  }

  return tl
}
