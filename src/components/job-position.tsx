import React, { FC } from "react"
import { JobPosition as JobPositionModel } from "../model"
import { Section } from "../components/section"
import { Heading, HeadingLevel } from "../components/heading"
import { JobAssignment } from "./job-assignment"

interface JobPositionProps {
  readonly jobPosition: JobPositionModel
  readonly headingLevel: HeadingLevel
}

export const JobPosition: FC<JobPositionProps> = ({
  headingLevel,
  jobPosition: {
    fields: { name, assignments },
  },
}) => (
  <Section>
    <Heading level={headingLevel}>{name}</Heading>
    {(assignments ?? []).map((jobAssignment) => (
      <JobAssignment
        key={jobAssignment.sys.id}
        jobAssignment={jobAssignment}
        headingLevel={(headingLevel + 1) as any}
      />
    ))}
  </Section>
)
