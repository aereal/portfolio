import { graphql as gql, StaticQuery } from "gatsby"
import React from "react"

import { BlogsSection } from "../components/blogs"
import { Layout } from "../components/layout"
import { SelfSection } from "../components/self"
import { SocialSection } from "../components/social"
import { WholeContainer } from "../components/whole-container"
import { BlogFragment, IndexQuery, SocialAccountFragment } from "../types"

export const query = gql`
  query IndexQuery {
    allBlogsYaml {
      edges {
        node {
          ...BlogFragment
        }
      }
    }
    allSocialAccountsYaml {
      edges {
        node {
          ...SocialAccountFragment
        }
      }
    }
  }
`

const IndexPage: React.SFC<IndexQuery.Query> = data => (
  <Layout>
    <WholeContainer>
      <h1 itemProp="name">aereal</h1>
      <SelfSection />
      <BlogsSection
        blogs={
          data.allBlogsYaml!.edges!.map(e => e!.node!) as ReadonlyArray<
            Required<BlogFragment.Fragment>
          >
        }
      />
      <SocialSection
        socialAccounts={
          data.allSocialAccountsYaml!.edges!.map(
            e => e!.node!
          ) as ReadonlyArray<Required<SocialAccountFragment.Fragment>>
        }
      />
    </WholeContainer>
  </Layout>
)

export default () => (
  <StaticQuery query={query}>{data => <IndexPage {...data} />}</StaticQuery>
)
