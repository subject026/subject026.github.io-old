import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TimelineMax, Power3, Power1, Back } from "gsap"

import LappyIcon from "./LappyIcon"
import CvIcon from "./CvIcon"
import GithubIcon from "./GithubIcon"
import TwitterIcon from "./TwitterIcon"

const Hero = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`

const IconBar = styled.ul`
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  z-index: 10;
  list-style-type: none;
  padding: 30px;
  li {
    display: inline-block;
    margin-left: 20px;
  }
  a {
    display: inline-block;
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
  svg {
    width: 35px;
    height: 35px;
    transition: transform 0.1s ease-out;
  }
`

const IconContainer = styled.div`
  background-color: #f2f2f2;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  background-color: #202020;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: translateY(100%);
  padding: 30px;
`

const TitleText = styled.h1`
  width: 100%;
  margin: 0;
  color: #c2c2c2;
  font-size: 68px;
  font-weight: 700;
  line-height: 1.2;
`

const Louis = styled.span`
  color: #fff;
`

const SubtitleText = styled.p`
  width: 100%;
  font-size: 28px;
  font-weight: 400;
  color: #c2c2c2;
`

export default () => {
  const iconContainerRef = useRef(null)
  const textContainerRef = useRef(null)
  const iconRef = useRef(null)
  const titleTextRef = useRef(null)
  const subtitleTextRef = useRef(null)
  const githubIconRef = useRef(null)
  const cvIconRef = useRef(null)
  const twitterIconRef = useRef(null)
  const tl = new TimelineMax()

  const animateIn = () => {
    // background containers
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
    // lappy
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
    // title text
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

    tl.staggerFrom(
      [cvIconRef.current, githubIconRef.current, twitterIconRef.current],
      0.6,
      {
        opacity: 0,
        scale: 0,
        x: 5,
        y: 20,
        ease: "elastic.out(1, 1)",
        // delay: "-=1.6",
      },
      0.1,
      "-=0.6"
    )
    // // icons
    // animateIconBar(tl)
  }

  useEffect(() => {
    animateIn()
  }, [])

  return (
    <Hero>
      <IconBar>
        <li>
          <a ref={cvIconRef} target="_blank" href="#">
            <CvIcon />
          </a>
        </li>
        <li>
          <a ref={githubIconRef} target="_blank" href="#">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a ref={twitterIconRef} target="_blank" href="#">
            <TwitterIcon />
          </a>
        </li>
      </IconBar>
      <IconContainer ref={iconContainerRef}>
        <LappyIcon iconRef={iconRef} />
      </IconContainer>
      <TextContainer ref={textContainerRef}>
        <TitleText ref={titleTextRef}>
          Hi,
          <br />
          I'm <Louis>Louis</Louis>.
        </TitleText>
        <SubtitleText ref={subtitleTextRef}>
          I'm a web developer based in Cardiff, Wales.
        </SubtitleText>
      </TextContainer>
    </Hero>
  )
}
