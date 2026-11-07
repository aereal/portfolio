import { GetStaticProps } from "next"
import { FC } from "react"
import { ActivitiesSection } from "../components/activities-section"
import { BlogsSection } from "../components/blogs"
import { Layout } from "../components/layout"
import { Metadata } from "../components/metadata"
import { SelfSection } from "../components/self"
import { SocialSection } from "../components/social"
import { WholeContainer } from "../components/whole-container"
import { loadContent } from "../content"
import { Blog, Site, SocialAccount, Work } from "../model"

interface RootPageProps {
  readonly works: Work[]
  readonly blogs: Blog[]
  readonly socialAccounts: SocialAccount[]
  readonly site: Site
}

export const getStaticProps: GetStaticProps<RootPageProps> = () => {
  const { works, blogs, socialAccounts, site } = loadContent()
  return {
    props: { works, blogs, socialAccounts, site },
  }
}

const RootPage: FC<RootPageProps> = ({
  works,
  blogs,
  socialAccounts,
  site,
}) => (
  <Layout>
    <Metadata site={site} />
    <WholeContainer>
      <SelfSection />
      <BlogsSection blogs={blogs} />
      <ActivitiesSection works={works} />
      <SocialSection socialAccounts={socialAccounts} />
    </WholeContainer>
  </Layout>
)

export default RootPage
