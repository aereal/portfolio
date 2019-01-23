import { graphql as gql } from "gatsby"
import React from "react"
import styled from "styled-components"

import { ActivityFragment } from "../types"

export const query = gql`
  fragment ActivityFragment on ActivitiesYaml {
    name
    url
    recordedAt {
      url
      name
      startYear: startDate(formatString: "YYYY")
      startDate: startDate(formatString: "YYYY-mm-dd")
    }
  }
`

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
  activity: ActivityFragment.Fragment
}

export const Activity: React.SFC<Props> = ({ activity }) => (
  <TableListItem>
    <ActivityLink as="a" href={activity.url!}>
      {activity.name}
    </ActivityLink>
    <EventName>{activity.recordedAt!.name}</EventName>
    <EventDate dateTime={activity.recordedAt!.startDate}>
      {activity.recordedAt!.startYear}
    </EventDate>
  </TableListItem>
)
