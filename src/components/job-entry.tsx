import React, { FC } from "react"
import styled from "styled-components"
import { Section } from "./section"
import { Heading, HeadingLevel } from "./heading"

interface DateTime {
  readonly dateTime: string
  readonly label: string
}

interface JobEntryProps {
  readonly startDate: DateTime
  readonly finishDate?: DateTime
  readonly title: string
  readonly level?: HeadingLevel
}

export const JobEntry: FC<JobEntryProps> = ({
  title,
  startDate,
  finishDate,
  children,
  level,
}) => (
  <EntrySection>
    <Heading level={level !== undefined ? level : 4}>{title}</Heading>
    <Aside>
      <time dateTime={startDate.dateTime}>{startDate.label}</time>〜
      {finishDate ? (
        <time dateTime={finishDate.dateTime}>{finishDate.label}</time>
      ) : (
        "現在"
      )}
    </Aside>
    {children}
  </EntrySection>
)

const EntrySection = styled(Section)`
  margin-top: 4.5rem;
`

const Aside = styled.div`
  font-size: 1.4rem;
  margin-top: -0.5rem;
  color: #777;
`
