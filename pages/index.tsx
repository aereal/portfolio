import React, { FC, useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
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

const RootPage: FC = () => {
  const [works, setWorks] = useState<readonly Work[]>([])
  const [blogs, setBlogs] = useState<readonly Blog[]>([])
  const [socialAccoutns, setSocialAccounts] = useState<
    readonly SocialAccount[]
  >([])
  const [site, setSite] = useState<Site | undefined>(undefined)

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

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html itemScope={true} itemType="http://schema.org/Person" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
      </Helmet>
      {site ? <Metadata site={site} /> : null}
      <WholeContainer>
        <SelfSection />
        <BlogsSection blogs={blogs} />
        <ActivitiesSection works={works} />
        <SocialSection socialAccounts={socialAccoutns} />
      </WholeContainer>
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
