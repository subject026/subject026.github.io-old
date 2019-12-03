import { TimelineMax, Power1 } from "gsap"

export const animateIcons = ({ cvIconRef, githubIconRef, twitterIconRef }) => {
  const tl = new TimelineMax()
  tl.staggerFrom(
    [cvIconRef.current, githubIconRef.current, twitterIconRef.current],
    0.6,
    {
      opacity: 0,
      scale: 0,
      x: 5,
      y: 20,
      ease: "elastic.out(1, 1)",
    },
    0.1,
    "-=0.6"
  )

  return tl
}
