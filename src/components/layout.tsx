import Head from "next/head"
import React, { FC, useEffect } from "react"
import { createGlobalStyle } from "styled-components"

const GA_PROP = "UA-36542486-1"

export const Layout: FC = ({ children }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push("js", new Date())
    window.dataLayer.push("config", GA_PROP)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          key="font"
        />
      </Head>
      {children}
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_PROP}`}
        async
      />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', 'Helvetiva Neue', 'YuGothic', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;
    color: #222;
    background-color: #fdfafa;
  }

  a {
    color: #1eaedb;

    &:hover {
      color: #0fa0ce;
    }
  }
`

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}
