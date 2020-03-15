import React, { FC, useState, useEffect } from "react"
import { GetStaticProps } from "next"
import { WholeContainer } from "../components/whole-container"
import { SelfSection } from "../components/self"
import { BlogsSection } from "../components/blogs"
import { ActivitiesSection } from "../components/activities-section"
import { SocialSection } from "../components/social"
import { Metadata } from "../components/metadata"
import { Layout } from "../components/layout"
import { fetchEntries } from "../fetch-entries"
import { Work, Blog, SocialAccount, Site } from "../model"

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

  return (
    <Layout>
      {site ? <Metadata site={site} /> : null}
      <WholeContainer>
        <SelfSection />
        <BlogsSection blogs={blogs} />
        <ActivitiesSection works={works} />
        <SocialSection socialAccounts={socialAccoutns} />
      </WholeContainer>
    </Layout>
  )
}

export default RootPage
