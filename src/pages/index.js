import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Hero from "../components/Hero"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', serif;
    overflow-x: hidden;
    /* background-color: ${({ fontIsLoaded }) =>
      fontIsLoaded ? "#fff" : "red"}; */
  }

  * {
    box-sizing: border-box;
  }
`

const IndexPage = () => {
  const [state, setState] = useState({ fontIsLoaded: false })

  useEffect(() => {
    document.fonts.ready.then(event => {
      console.log(event)
      setState(state => {
        return {
          ...state,
          fontIsLoaded: true,
        }
      })
    })
  }, [])

  const { fontIsLoaded } = state
  return (
    <>
      <GlobalStyle fontIsLoaded={fontIsLoaded} />
      <SEO title="Home" />
      {fontIsLoaded && (
        <>
          <Hero />
          <h1>BOOO</h1>
        </>
      )}
    </>
  )
}
export default IndexPage
