import { FC } from "react"
import { Work } from "../model"
import { Heading } from "./heading"
import { List, ListItem } from "./list"

interface RelatedWorksListProps {
  readonly relatedWorks: Work[]
}

export const RelatedWorksList: FC<RelatedWorksListProps> = ({
  relatedWorks,
}) => (
  <>
    <Heading>関連</Heading>
    <List>
      {relatedWorks.map((relatedWork) => (
        <ListItem key={relatedWork.sys.id}>
          <a href={relatedWork.fields.url}>{relatedWork.fields.name}</a>
        </ListItem>
      ))}
    </List>
  </>
)
