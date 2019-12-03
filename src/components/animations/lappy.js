import { TimelineMax, Power3, Back } from "gsap"

export const animateLappy = lappyRef => {
  console.log(lappyRef)
  const tl = new TimelineMax()
  tl.from(
    lappyRef.current,
    0.5,
    {
      y: "40%",
      ease: Back.out,
    },
    "-=0.3"
  )
  tl.from(
    lappyRef.current,
    0.5,
    {
      opacity: 0,
      ease: Power3.easeOut,
    },
    "-=0.2"
  )
  return tl
}
