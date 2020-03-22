import React, { FC } from "react"
import { JobPosition as JobPositionModel } from "../model"
import { Section } from "../components/section"
import { Heading } from "../components/heading"
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
