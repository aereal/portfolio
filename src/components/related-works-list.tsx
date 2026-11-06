import { FC } from "react"
import { Work } from "../model"
import { Heading } from "./heading"
import { List, ListItem } from "./list"

interface RelatedWorksListProps {
  readonly relatedWorks: readonly Work[]
}

export const RelatedWorksList: FC<RelatedWorksListProps> = ({
  relatedWorks,
}) => (
  <>
    <Heading>関連</Heading>
    <List>
      {relatedWorks.map((relatedWork) => (
        <ListItem key={relatedWork.url}>
          <a href={relatedWork.url}>{relatedWork.name}</a>
        </ListItem>
      ))}
    </List>
  </>
)
