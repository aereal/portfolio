import React, { FC } from "react"
import { List, ListItem } from "./list"
import { Heading, HeadingLevel } from "./heading"
import { Work } from "../model"

interface RelatedWorksListProps {
  readonly level: HeadingLevel
  readonly relatedWorks: Work[]
}

export const RelatedWorksList: FC<RelatedWorksListProps> = ({
  level,
  relatedWorks,
}) => (
  <>
    <Heading level={level}>関連</Heading>
    <List>
      {relatedWorks.map((relatedWork) => (
        <ListItem key={relatedWork.sys.id}>
          <a href={relatedWork.fields.url}>{relatedWork.fields.name}</a>
        </ListItem>
      ))}
    </List>
  </>
)
