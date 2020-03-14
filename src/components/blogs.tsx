import React from "react"
import styled from "styled-components"

import { BlogFragment } from "../types"
import { Section } from "./section"

type Blog = Required<BlogFragment.Fragment>

interface Props {
  blogs: readonly Blog[]
}

const List = styled.ul`
  padding-inline-start: 0;
`

const ListItem = styled.li``

export const BlogsSection: React.SFC<Props> = ({ blogs }) => (
  <Section id="blogs">
    <h2>Blogs</h2>
    <List>
      {blogs.map(({ url, title, summary }, i) => (
        <ListItem key={i}>
          <a href={url}>{title}</a> - {summary}
        </ListItem>
      ))}
    </List>
  </Section>
)
