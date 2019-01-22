import { graphql as gql } from "gatsby"
import React from "react"

import { BlogsSection } from "../components/blogs"
import { Layout } from "../components/layout"
import { SocialSection } from "../components/social"

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

const IndexPage = () => (
  <Layout>
    <main className="container">
      <h1 itemProp="name">aereal</h1>
      <SelfSection />
      <BlogsSection
        blogs={[
          {
            summary: "Technical writing in Japanese",
            title: "Sexually Knowing",
            url: "https://this.aereal.org/",
          },
          {
            summary: "diary with words or not",
            title: "『言葉を吐く』",
            url: "https://d.aereal.org/",
          },
        ]}
      />
      <SocialSection
        socialAccounts={[
          {
            alt: "Hatena id:aereal",
            service: "hatena",
            url: `http://profile.hatena.ne.jp/aereal/`,
          },
          {
            alt: "GitHub @aereal",
            service: "github",
            url: "https://github.com/aereal",
          },
          {
            alt: "Twitter @aereal",
            service: "twitter",
            url: "https://twitter.com/aereal",
          },
        ]}
      />
    </main>
  </Layout>
)

export default IndexPage
