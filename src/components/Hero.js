import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import LappyIcon from "./LappyIcon"
import CvIcon from "./CvIcon"
import GithubIcon from "./GithubIcon"
import TwitterIcon from "./TwitterIcon"
import { animateIn } from "./animations"

const Hero = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  @media (min-width: 500px) {
    height: 400px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const IconBar = styled.ul`
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  z-index: 10;
  list-style-type: none;
  padding: ${({ theme }) => theme.layout.padding.small};
  li {
    display: inline-block;
    margin-left: 20px;
  }
  a {
    display: inline-block;
    &:hover,
    :active {
      svg {
        transform: scale(1.2);
      }
    }
  }
  svg {
    transition: transform 0.1s ease-out;
    width: 25px;
    height: 25px;
    @media (min-width: 500px) {
      width: 35px;
      height: 35px;
    }
  }
`

const LappyContainer = styled.div`
  background-color: #f2f2f2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  opacity: 0;
  @media (min-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`
const TextContainerTop = styled.div`
  grid-row-start: 0;
  grid-row-end: 1;
  background-color: #202020;
  transform: translateX(-100vw);
  @media (min-width: 500px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    align-items: flex-end;
    transform: translateX(100vw);
  }
`

const TextContainerBottom = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #202020;
  transform: translateX(-100vw);
  @media (min-width: 500px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    transform: translateX(100vw);
  }
`

const TitleText = styled.h1`
  color: #ddd;
  margin: 0;
  padding: 15px;
  font-size: 35px;
  @media (min-width: 500px) {
    font-size: 50px;
    padding: 15px ${({ theme }) => theme.layout.padding.large};
  }
  font-weight: 700;
  line-height: 1.2;
`

const Louis = styled.span`
  color: #fff;
`

const SubtitleText = styled.p`
  margin: 0;
  padding: 30px ${({ theme }) => theme.layout.padding.small};
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #ddd;
  @media (min-width: 500px) {
    padding: 15px ${({ theme }) => theme.layout.padding.large};
  }
`

export default () => {
  const lappyContainerRef = useRef(null)
  const heroRef = useRef(null)
  const textContainerTopRef = useRef(null)
  const textContainerBottomRef = useRef(null)
  const lappyRef = useRef(null)
  const titleTextRef = useRef(null)
  const subtitleTextRef = useRef(null)
  const githubIconRef = useRef(null)
  const cvIconRef = useRef(null)
  const twitterIconRef = useRef(null)

  useEffect(() => {
    animateIn({
      heroRef,
      lappyContainerRef,
      textContainerTopRef,
      textContainerBottomRef,
      lappyRef,
      titleTextRef,
      subtitleTextRef,
      githubIconRef,
      cvIconRef,
      twitterIconRef,
    })
  }, [])

  return (
    <>
      <IconBar>
        <li>
          <a ref={cvIconRef} href="#">
            <CvIcon />
          </a>
        </li>
        <li>
          <a ref={githubIconRef} href="#">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a ref={twitterIconRef} href="#">
            <TwitterIcon />
          </a>
        </li>
      </IconBar>
      <Hero ref={heroRef}>
        <LappyContainer ref={lappyContainerRef}>
          <LappyIcon lappyRef={lappyRef} />
        </LappyContainer>
        <TextContainerTop ref={textContainerTopRef}>
          <TitleText ref={titleTextRef}>
            Hi,
            <br />
            I'm <Louis>Louis</Louis>.
          </TitleText>
        </TextContainerTop>
        <TextContainerBottom ref={textContainerBottomRef}>
          <SubtitleText ref={subtitleTextRef}>
            I'm a web developer based in Cardiff, Wales.
          </SubtitleText>
        </TextContainerBottom>
      </Hero>
    </>
  )
}
