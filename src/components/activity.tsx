import React from "react"
import styled from "styled-components"
import { Work } from "../model"

const TableListItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
`

const ItemFragment = styled.span`
  display: block;
  padding-right: 4rem;
`

const ActivityLink = styled(ItemFragment)<{ href: string; as: "a" }>``

const EventName = styled(ItemFragment)`
  color: rgb(130, 130, 130);
`

const EventDate = styled(ItemFragment)<{ dateTime?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  color: rgb(130, 130, 130);
`

interface Props {
  readonly work: Work
}

export const Activity: React.SFC<Props> = ({ work }) => (
  <TableListItem>
    <ActivityLink as="a" href={work.fields.url}>
      {work.fields.name}
    </ActivityLink>
    <EventName>{work.fields.eventName}</EventName>
    <EventDate dateTime={work.fields.performedDate}>
      {work.fields.performedDate}
    </EventDate>
  </TableListItem>
)
