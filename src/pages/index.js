import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

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

const theme = {
  layout: {
    padding: {
      small: "15px",
      large: "30px",
    },
  },
}

export default () => {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle fontIsLoaded={fontIsLoaded} />
      <SEO title="Home" />
      {fontIsLoaded && (
        <>
          <Hero />
          {/* <h1>BOOO</h1> */}
        </>
      )}
    </ThemeProvider>
  )
}
