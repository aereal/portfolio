import { graphql as gql } from "gatsby"
import React from "react"

import { BlogFragment } from "../types"
import { Section } from "./section"

type Blog = Required<BlogFragment.Fragment>

export const query = gql`
  fragment BlogFragment on BlogsYaml {
    title
    summary
    url
  }
`

interface Props {
  blogs: ReadonlyArray<Blog>
}

export const BlogsSection: React.SFC<Props> = ({ blogs }) => (
  <Section id="blogs">
    <h2>Blogs</h2>
    <ul>
      {blogs.map(({ url, title, summary }, i) => (
        <li key={i}>
          <a href={url}>{title}</a> - {summary}
        </li>
      ))}
    </ul>
  </Section>
)
