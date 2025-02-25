import React from "react"
import styled from "styled-components"
import { Work } from "../model"
import { Activity } from "./activity"
import { Section } from "./section"

const WidenList = styled.ul`
  list-style: none;
  margin-bottom: 2.5rem;
  padding-left: 0;
  margin-top: 0;
`

interface Props {
  readonly works: readonly Work[]
}

export const ActivitiesSection: React.FC<Props> = ({ works }) => (
  <Section id="activities">
    <h2>Activities</h2>
    <WidenList>
      {works.map((work, i) => (
        <Activity key={i} work={work} />
      ))}
    </WidenList>
  </Section>
)
