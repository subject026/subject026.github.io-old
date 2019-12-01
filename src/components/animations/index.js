export const animateIconBar = (tl, refs) => {
  refs.forEach(ref => {
    tl.from(
      ref,
      0.5,
      {
        scale: 0,
        x: 5,
        y: 20,
        ease: "elastic.out(1, 1)",
      },
      "-=0.5"
    )
    tl.from(
      ref,
      0.5,
      {
        opacity: 0,
        ease: "elastic.out(1, 1)",
      },
      "-=0.5"
    )
  })
}
