import React, { FC } from "react"
import { Heading } from "../components/heading"
import { Section } from "../components/section"
import { JobPosition as JobPositionModel } from "../model"
import { JobAssignment } from "./job-assignment"

interface JobPositionProps {
  readonly jobPosition: JobPositionModel
}

export const JobPosition: FC<JobPositionProps> = ({
  jobPosition: {
    fields: { name, assignments },
  },
}) => (
  <Section>
    <Heading>{name}</Heading>
    {(assignments ?? []).map((jobAssignment) => (
      <JobAssignment key={jobAssignment.sys.id} jobAssignment={jobAssignment} />
    ))}
  </Section>
)
