import React from "react"
import styled from "styled-components"

import { ActivityFragment } from "../types"
import { Activity } from "./activity"
import { Section } from "./section"

const WidenList = styled.ul`
  list-style: none;
  margin-bottom: 2.5rem;
  padding-left: 0;
  margin-top: 0;
`

interface Props {
  activities: readonly ActivityFragment.Fragment[]
}

export const ActivitiesSection: React.SFC<Props> = ({ activities }) => (
  <Section id="activities">
    <h2>Activities</h2>
    <WidenList>
      {activities.map((a, i) => (
        <Activity activity={a} key={i} />
      ))}
    </WidenList>
  </Section>
)
