import { TimelineMax, Power1 } from "gsap"

export const animateBackground = refs => {
  const {
    textContainerTopRef,
    textContainerBottomRef,
    lappyContainerRef,
  } = refs
  const tl = new TimelineMax()
  if (window.innerWidth < 500) {
    tl.to([textContainerTopRef.current, textContainerBottomRef.current], 0.3, {
      x: 0,
      ease: Power1.out,
    })
    tl.to(
      lappyContainerRef.current,
      0.3,
      {
        opacity: 1,
      },
      "-=0.3"
    )
    tl.to(
      lappyContainerRef.current,
      0.3,
      {
        x: 0,
      },
      "-=0.3"
    )
  } else {
    tl.to([textContainerTopRef.current, textContainerBottomRef.current], 0.3, {
      x: 0,
      ease: Power1.out,
    })
    tl.to(
      lappyContainerRef.current,
      0.3,
      {
        x: 0,
      },
      "-=0.3"
    )
    tl.to(
      lappyContainerRef.current,
      0.3,
      {
        opacity: 1,
      },
      "-=0.3"
    )
  }
  return tl
}
