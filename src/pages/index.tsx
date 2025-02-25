import { GetStaticProps } from "next"
import { FC, useEffect, useState } from "react"
import { ActivitiesSection } from "../components/activities-section"
import { BlogsSection } from "../components/blogs"
import { Layout } from "../components/layout"
import { Metadata } from "../components/metadata"
import { SelfSection } from "../components/self"
import { SocialSection } from "../components/social"
import { WholeContainer } from "../components/whole-container"
import { fetchEntries } from "../fetch-entries"
import { Blog, Site, SocialAccount, Work } from "../model"

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

const RootPage: FC<RootPageProps> = (props) => {
  const [works, setWorks] = useState<readonly Work[]>(props.works)
  const [blogs, setBlogs] = useState<readonly Blog[]>(props.blogs)
  const [socialAccoutns, setSocialAccounts] = useState<
    readonly SocialAccount[]
  >(props.socialAccounts)
  const [site, setSite] = useState<Site | undefined>(props.site)

  useEffect(() => {
    const doFetch = async (): Promise<void> => {
      const accum = await fetchEntries()
      setWorks([...accum.works])
      setBlogs([...accum.blogs])
      setSocialAccounts([...accum.socialAccounts])
      if (!accum.site) {
        throw new Error("site not found")
      }
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
