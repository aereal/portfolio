import React, { FC } from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { Section } from "./section"
import { Heading } from "./heading"
import { JobEntry } from "./job-entry"
import { JobAssignment as JobAssignmentModel } from "../model"

interface JobAssignmentProps {
  readonly jobAssignment: JobAssignmentModel
}

export const JobAssignment: FC<JobAssignmentProps> = ({
  jobAssignment: {
    fields: { name, activities, description },
  },
}) => (
  <Section>
    <Heading>{name}</Heading>
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(description),
      }}></div>
    {(activities ?? []).map((jobEntry) => (
      <JobEntry key={jobEntry.sys.id} jobEntry={jobEntry} />
    ))}
  </Section>
)
