import React, { FC } from "react"
import styled from "styled-components"
import { Document } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { Section } from "./section"
import { Heading, HeadingLevel } from "./heading"

interface DateTime {
  readonly dateTime: string
  readonly label: string
}

interface JobEntryProps {
  readonly startDate: string
  readonly finishDate?: string
  readonly title: string
  readonly body?: Document
  readonly level?: HeadingLevel
}

export const JobEntry: FC<JobEntryProps> = ({
  title,
  startDate,
  finishDate,
  children,
  body,
  level,
}) => (
  <EntrySection>
    <Heading level={level !== undefined ? level : 4}>{title}</Heading>
    <Aside>
      <time dateTime={startDate}>{startDate}</time>〜
      {finishDate ? <time dateTime={finishDate}>{finishDate}</time> : "現在"}
    </Aside>
    {body !== undefined ? (
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(body) }} />
    ) : undefined}
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
