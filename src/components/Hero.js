import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import LappyIcon from "./LappyIcon"
import CvIcon from "./CvIcon"
import GithubIcon from "./GithubIcon"
import TwitterIcon from "./TwitterIcon"
import { animateIn } from "./animations"

const Hero = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
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
  padding: 15px;
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
    img {
      width: 40px;
      height: 40px;
    }
  }
`

const IconContainer = styled.div`
  grid-column-start: 0;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-image: url("/images/Jt20.gif");
  }
`
const TextContainerTop = styled.div`
  grid-column-start: 0;
  grid-column-end: 1;
  grid-row-start: 0;
  grid-row-end: 1;
  background-color: #202020;
`

const TextContainerBottom = styled.div`
  grid-column-start: 0;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #202020;
`

const TitleText = styled.h1`
  color: #c2c2c2;
  margin: 0;
  padding: 15px;
  font-size: 44px;
  @media (min-width: 600px) {
    font-size: 68px;
  }
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
  const heroRef = useRef(null)
  const textContainerRef = useRef(null)
  const iconRef = useRef(null)
  const titleTextRef = useRef(null)
  const subtitleTextRef = useRef(null)
  const githubIconRef = useRef(null)
  const cvIconRef = useRef(null)
  const twitterIconRef = useRef(null)

  useEffect(() => {
    animateIn([
      heroRef,
      iconContainerRef,
      textContainerRef,
      iconRef,
      titleTextRef,
      subtitleTextRef,
      githubIconRef,
      cvIconRef,
      twitterIconRef,
    ])
  }, [])

  return (
    <>
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
      <Hero ref={heroRef}>
        <IconContainer ref={iconContainerRef}>
          <LappyIcon iconRef={iconRef} />
        </IconContainer>
        <TextContainerTop ref={textContainerRef}>
          <TitleText ref={titleTextRef}>
            Hi,
            <br />
            I'm <Louis>Louis</Louis>.
          </TitleText>
        </TextContainerTop>
        <TextContainerBottom ref={textContainerRef}>
          <SubtitleText ref={subtitleTextRef}>
            I'm a web developer based in Cardiff, Wales.
          </SubtitleText>
        </TextContainerBottom>
      </Hero>
    </>
  )
}
