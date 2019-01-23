import { graphql as gql, StaticQuery } from "gatsby"
import React from "react"

import { BlogsSection } from "../components/blogs"
import { Layout } from "../components/layout"
import { SocialSection } from "../components/social"
import { BlogFragment, IndexQuery, SocialAccountFragment } from "../types"

const SelfSection: React.SFC<{}> = () => (
  <section id="self">
    <div className="description">
      <ul>
        <li>Software Developer</li>
        <li>Hobby player of Guitar</li>
      </ul>
    </div>
  </section>
)

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
    <main className="container">
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
    </main>
  </Layout>
)

export default () => (
  <StaticQuery query={query}>{data => <IndexPage {...data} />}</StaticQuery>
)
