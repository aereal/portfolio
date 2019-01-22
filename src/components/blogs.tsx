import { graphql as gql } from "gatsby"
import React from "react"

export const query = gql`
  fragment BlogFragment on BlogsYaml {
    title
    summary
    url
  }
`

interface Blog {
  url: string
  title: string
  summary: string
}

interface Props {
  blogs: ReadonlyArray<Blog>
}

export const BlogsSection: React.SFC<Props> = ({ blogs }) => (
  <section id="blogs">
    <h2>Blogs</h2>
    <ul>
      {blogs.map(({ url, title, summary }, i) => (
        <li key={i}>
          <a href={url}>{title}</a> - {summary}
        </li>
      ))}
    </ul>
  </section>
)
