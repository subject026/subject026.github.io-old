import { gsap, TimelineMax, CSSPlugin, Power1, Power3, Back } from "gsap"

gsap.registerPlugin(CSSPlugin)

export const animateIn = refs => {
  const master = new TimelineMax()
  const [
    heroRef,
    iconContainerRef,
    textContainerRef,
    iconRef,
    titleTextRef,
    subtitleTextRef,
    githubIconRef,
    cvIconRef,
    twitterIconRef,
  ] = refs

  const animateBackground = () => {
    const tl = new TimelineMax()
    tl.to(iconContainerRef.current, 0.2, {
      opacity: 1,
    })
    tl.to(
      textContainerRef.current,
      0.4,
      {
        y: 0,
        ease: Power1.out,
      },
      "-=0.2"
    )
    return tl
  }

  const animateLappy = () => {
    const tl = new TimelineMax()
    tl.from(
      iconRef.current,
      0.5,
      {
        y: "40%",
        ease: Back.out,
      },
      "-=0.3"
    )
    tl.from(
      iconRef.current,
      0.5,
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      "-=0.2"
    )
    return tl
  }
  const animateTitleText = () => {
    const tl = new TimelineMax()
    tl.from(
      titleTextRef.current,
      0.4,
      {
        y: 50,
        ease: Power3.easeOut,
      },
      "-=1"
    )
    tl.from(
      titleTextRef.current,
      0.4,
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      "-=0.4"
    )
    // subtitle text
    tl.from(
      subtitleTextRef.current,
      0.5,
      {
        x: 50,
        opacity: 0,
        ease: "power3.easeOut",
      },
      "-=0.25"
    )
    return tl
  }
  // title text
  const animateIcons = () => {
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

  const squashHero = () => {
    const tl = new TimelineMax()
    tl.to(heroRef.current, 0.3, {
      height: "80vh",
    })
    return tl
  }

  // // icons
  // animateIconBar(tl)
  master.add(animateBackground())
  master.add(animateLappy(), "-=0.5")
  master.add(animateTitleText(), "-=0.9")
  master.add(animateIcons(), "-=0.5")
  // master.add(squashHero())
  // master.play()
}
