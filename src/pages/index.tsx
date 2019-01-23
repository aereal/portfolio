import { graphql as gql, StaticQuery } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"

import { ActivitiesSection } from "../components/activities-section"
import { BlogsSection } from "../components/blogs"
import { Metadata } from "../components/metadata"
import { SelfSection } from "../components/self"
import { SocialSection } from "../components/social"
import { WholeContainer } from "../components/whole-container"
import { BlogFragment, IndexQuery, SocialAccountFragment } from "../types"

export const query = gql`
  query IndexQuery {
    site {
      siteMetadata {
        ...MetadataFragment
      }
    }
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
    allActivitiesYaml(sort: { fields: [recordedAt___startDate], order: DESC }) {
      edges {
        node {
          ...ActivityFragment
        }
      }
    }
  }
`

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

const IndexPage: React.SFC<IndexQuery.Query> = data => (
  <>
    <GlobalStyle />
    <Metadata metadata={data.site!.siteMetadata!} />
    <WholeContainer>
      <SelfSection />
      <BlogsSection
        blogs={
          data.allBlogsYaml!.edges!.map(e => e!.node!) as ReadonlyArray<
            Required<BlogFragment.Fragment>
          >
        }
      />
      <ActivitiesSection
        activities={data.allActivitiesYaml!.edges!.map(e => e!.node!)}
      />
      <SocialSection
        socialAccounts={
          data.allSocialAccountsYaml!.edges!.map(
            e => e!.node!
          ) as ReadonlyArray<Required<SocialAccountFragment.Fragment>>
        }
      />
    </WholeContainer>
  </>
)

export default () => (
  <StaticQuery query={query}>{data => <IndexPage {...data} />}</StaticQuery>
)
