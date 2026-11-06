import { FC } from "react"
import { JobAssignment as JobAssignmentModel } from "../model"
import { Heading } from "./heading"
import { JobEntry } from "./job-entry"
import { Section } from "./section"

interface JobAssignmentProps {
  readonly jobAssignment: JobAssignmentModel
}

export const JobAssignment: FC<JobAssignmentProps> = ({
  jobAssignment: { name, activities, description },
}) => (
  <Section>
    <Heading>{name}</Heading>
    <div
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
    {(activities ?? []).map((jobEntry) => (
      <JobEntry key={jobEntry.title} jobEntry={jobEntry} />
    ))}
  </Section>
)
