import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { FC } from "react"
import styled from "styled-components"
import { JobEntry as JobEntryModel } from "../model"
import { Heading } from "./heading"
import { RelatedWorksList } from "./related-works-list"
import { Section } from "./section"

interface JobEntryProps {
  readonly jobEntry: JobEntryModel
}

export const JobEntry: FC<JobEntryProps> = ({
  jobEntry: {
    fields: { title, startDate, finishDate, body, relatedWorks },
  },
}) => (
  <EntrySection>
    <Heading>{title}</Heading>
    <Aside>
      <DateMonth dateTime={startDate} />〜
      {finishDate ? <DateMonth dateTime={finishDate} /> : "現在"}
    </Aside>
    {body !== undefined ? (
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(body) }} />
    ) : undefined}
    {relatedWorks !== undefined && relatedWorks.length > 0 ? (
      <RelatedWorksList relatedWorks={relatedWorks} />
    ) : null}
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

const jaFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
})

const DateMonth: FC<{ readonly dateTime: string }> = ({ dateTime }) => {
  const dt = new Date(Date.parse(dateTime))
  const month = dt.getMonth() + 1
  return (
    <time dateTime={`${dt.getFullYear()}-${month < 10 ? `0${month}` : month}`}>
      {jaFormatter.format(dt)}
    </time>
  )
}
