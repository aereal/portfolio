import { graphql, StaticQuery } from "gatsby"
import React from "react"

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}>
    {({
      site: {
        siteMetadata: { siteName },
      },
    }) => <>{children}</>}
  </StaticQuery>
)
