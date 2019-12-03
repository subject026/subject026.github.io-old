import { gsap, TimelineMax, CSSPlugin } from "gsap"

import { animateBackground } from "./animateBackground"
import { animateTextAndLappy } from "./animateTextAndLappy"
import { animateIcons } from "./icons"

gsap.registerPlugin(CSSPlugin)

export const animateIn = refs => {
  const master = new TimelineMax()
  const {
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
    }),
    "-=0.3"
  )
}
