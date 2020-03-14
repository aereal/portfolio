import React, { FC, useState, useEffect } from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { createGlobalStyle } from "styled-components"
import { WholeContainer } from "../src/components/whole-container"
import { SelfSection } from "../src/components/self"
import { BlogsSection } from "../src/components/blogs"
import { ActivitiesSection } from "../src/components/activities-section"
import { SocialSection } from "../src/components/social"
import { Metadata } from "../src/components/metadata"
import {
  Work,
  Blog,
  fetchEntries,
  SocialAccount,
  Site,
} from "../src/fetch-entries"

export const getStaticProps: GetStaticProps = async () => {
  const { works, blogs, socialAccounts, site } = await fetchEntries()
  return {
    props: { works, blogs, socialAccounts, site },
  }
}

interface RootPageProps {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  readonly site: Site
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

const GA_PROP = "UA-36542486-1"

const RootPage: FC<RootPageProps> = props => {
  const [works, setWorks] = useState<readonly Work[]>(props.works)
  const [blogs, setBlogs] = useState<readonly Blog[]>(props.blogs)
  const [socialAccoutns, setSocialAccounts] = useState<
    readonly SocialAccount[]
  >(props.socialAccounts)
  const [site, setSite] = useState<Site | undefined>(props.site)

  useEffect(() => {
    const doFetch = async () => {
      const accum = await fetchEntries()
      setWorks([...accum.works])
      setBlogs([...accum.blogs])
      setSocialAccounts([...accum.socialAccounts])
      setSite(accum.site)
    }
    doFetch()
  }, [])

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push("js", new Date())
    window.dataLayer.push("config", GA_PROP)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Head>
        <html itemScope={true} itemType="http://schema.org/Person" key="html" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          key="font"
        />
      </Head>
      {site ? <Metadata site={site} /> : null}
      <WholeContainer>
        <SelfSection />
        <BlogsSection blogs={blogs} />
        <ActivitiesSection works={works} />
        <SocialSection socialAccounts={socialAccoutns} />
      </WholeContainer>
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
    font-size: 1.5em;
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

export default RootPage
