import { gsap, TimelineMax, CSSPlugin } from "gsap"

import { animateBackground } from "./animateBackground"
import { animateTextAndLappy } from "./animateTextAndLappy"
import { animateIcons } from "./icons"

gsap.registerPlugin(CSSPlugin)

export const animateIn = refs => {
  const master = new TimelineMax()
  const {
    // heroRef,
    lappyContainerRef,
    textContainerTopRef,
    textContainerBottomRef,
    lappyRef,
    titleTextRef,
    subtitleTextRef,
    githubIconRef,
    cvIconRef,
    twitterIconRef,
  } = refs

  // title text

  // const squashHero = () => {
  //   const tl = new TimelineMax()
  //   tl.to(heroRef.current, 0.3, {
  //     height: "80vh",
  //   })
  //   return tl
  // }

  // // icons
  // animateIconBar(tl)
  master.add(
    animateBackground({
      textContainerTopRef,
      textContainerBottomRef,
      lappyContainerRef,
    })
  )
  master.add(
    animateTextAndLappy({
      lappyRef,
      titleTextRef,
      subtitleTextRef,
    })
  )
  master.add(
    animateIcons({
      githubIconRef,
      cvIconRef,
      twitterIconRef,
    })
  )
  // master.add(squashHero())
  // master.play()
}
